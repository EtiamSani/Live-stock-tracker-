const companyCards = { 
    companyCardDisplayed : false,
    showEntryPriceInput : function (event) {


        const button = event.target; 
        
        const input = button.closest('.watchlist-company__company-entryprice').querySelector('.entryprice-input');
        
        input.classList.remove('is-hidden')
    },
    hideEntryPriceInput : function () {
        const hideEnteryPriceInput = document.querySelector('.entryprice-input');

        
        hideEnteryPriceInput.classList.add('is-hidden');
    },
    makeCompanyCard : async function (company) {
        const companyCardTemplate = document.querySelector('#CompanyCardColumn');
        const newCompanyCard = document.importNode(companyCardTemplate.content, true);
        newCompanyCard.querySelector('.watchlist-company__company-symbol').innerHTML = company.symbol
        newCompanyCard.querySelector('.watchlist-company__company-name').innerHTML = company.name
        newCompanyCard.querySelector('.entryprice').innerHTML = company.entry_price

        const response = await fetch(app.base_url +"/tickersearch/price/"+ company.symbol)
        const responseJson = await response.json()
        console.log(responseJson.c)
        // const companyPrice = responseJson["Global Quote"]['05. price']
        // const companyChange = responseJson["Global Quote"]['09. change']
        // const companyChangeInPercent = responseJson["Global Quote"]['10. change percent']



//         const socket = new WebSocket('wss://ws.finnhub.io?token=cgc550hr01qsquh3egv0cgc550hr01qsquh3egvg'); 

// // Connection opened -> Subscribe
// socket.addEventListener('open', function (event) {

    
//     socket.send(JSON.stringify({'type':'subscribe', 'symbol': company.symbol}))
//     // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'BINANCE:BTCUSDT'}))
//     // socket.send(JSON.stringify({'type':'subscribe', 'symbol': 'IC MARKETS:1'}))
// });

// // Listen for messages
// socket.addEventListener('message', function (event) {
//     console.log('Message from server ', event.data);
//     const response = JSON.parse(event.data);
//   const price = response.data[0].p;
  
 
//   // Sélectionnez l'élément de carte de l'entreprise existant à mettre à jour
// const companyCard = document.querySelector('.watchlist-company__company-price');

// // Mettre à jour la valeur du prix dans l'élément de carte de l'entreprise
// companyCard.innerHTML = price;

 
// });

// // Unsubscribe
//  var unsubscribe = function(symbol) {
//     socket.send(JSON.stringify({'type':'unsubscribe','symbol': symbol}))
// }
        companyCards.realTimePrice(responseJson)
       
        // newCompanyCard.querySelector('.watchlist-company__company-price-change').innerHTML = companyChange
        // newCompanyCard.querySelector('.watchlist-company__company-price-change-pourcent').innerHTML = companyChangeInPercent

        // if (companyChangeInPercent < '0' && Number(companyChange) < 0) {
        //     newCompanyCard.querySelector('.watchlist-company__company-price-change-pourcent').style.color = 'red'
        //     newCompanyCard.querySelector('.watchlist-company__company-price-change').style.color = 'red'
        // } else {
        //     newCompanyCard.querySelector('.watchlist-company__company-price-change-pourcent').style.color = 'green'
        //     newCompanyCard.querySelector('.watchlist-company__company-price-change').style.color = 'green'
        // }

        newCompanyCard.querySelector('.fa-pen').addEventListener('click',companyCards.showEntryPriceInput);
        newCompanyCard.querySelector('.delete').addEventListener('click',companyCards.deletCompanyFromWatchList);

        
        newCompanyCard.querySelector('.update-entrey-price-form').addEventListener('submit', companyCards.updateEntryPrice);
        newCompanyCard.querySelector('.entryprice-input').dataset.companyId = company.code_company;
        newCompanyCard.querySelector('.delete').dataset.deleteId = company.code_company;

        newCompanyCard.querySelector('.watchlist-company__company-price').dataset.symbolTicker = company.symbol;


        // const updateInput = newCompanyCard.querySelectorAll('.entryprice-input')
        // for (const input of updateInput) {
        //     input.addEventListener('submit', (event) => companyCards.refeshCards(event))

        // }

        const companyCardsContainer = document.querySelector('.company-cards');
        
        
       
        document.querySelector('.company-cards').append(newCompanyCard);
        
    },
    updateEntryPrice : async function (event) {
        event.preventDefault()
        const formData = new FormData(event.target)
        const idCompany = event.target.closest('.update-entrey-price-form').querySelector('.entryprice-input').dataset.companyId;
        await fetch(app.base_url + "/company/" + idCompany, {
            method: 'PUT',
            body: formData
        })
       
        companyCards.hideEntryPriceInput()
        const inputElement = event.target[0];
        inputElement.value = "";
        inputElement.focus();
        companyCards.refreshCompanyCards()

      
       
        
    },
    sendSelectedCompanyInDataBase : async function (symbol, name) {
        

        const symbolField = document.getElementById('symbolField');
        const nameField = document.getElementById('nameField');
        const addListForm = document.querySelector('#searchBarId');

        symbolField.value = symbol;
        nameField.value = name;

        await fetch(app.base_url + "/company", {
            method: 'POST',
            body: new FormData(addListForm)
        })
    },
   
    refreshCompanyCards : async function (event) {
       

        const companyCardsContainer = document.querySelector('.company-cards');
  companyCardsContainer.innerHTML = ''; // Supprimer toutes les cartes existantes
  const selectedWatchListId = localStorage.getItem('selectedWatchListId');
  // Récupérer la liste de surveillance
  const watchlist = await fetch(app.base_url + '/watchlist/'+ selectedWatchListId);
  const watchlistJson = await watchlist.json();

  // Mettre à jour chaque carte d'entreprise
  for (const company of watchlistJson.Companies) {
       const idCompany = company.code_company
    
    companyCards.makeCompanyCard(company);

  }
        
    },
   
    deletCompanyFromWatchList : async function (event) {

        
        const idCompanyToDelet = event.target.dataset.deleteId;
        
        await fetch(app.base_url + "/company/" + idCompanyToDelet, {
            method: 'DELETE',
           
        })

        companyCards.refreshCompanyCards()
    },
    realTimePrice : async function (responseJson) {
        const selectedWatchListId = localStorage.getItem('selectedWatchListId');
    // Récupérer la liste de surveillance
    const watchlist = await fetch(app.base_url + '/watchlist/' + selectedWatchListId).then(response => response.json());
    const socket = new WebSocket('wss://ws.finnhub.io?token=cgc550hr01qsquh3egv0cgc550hr01qsquh3egvg');
    // Itérer sur toutes les entreprises dans la liste de surveillance
    for (const company of watchlist.Companies) {


      // Connection opened -> Subscribe
      socket.addEventListener('open', function (event) {
        socket.send(JSON.stringify({ type: 'subscribe', symbol: company.symbol }));
      });

      // Listen for messages
      socket.addEventListener('message', function (event) {
        // console.log('Message from server ', event.data);
        const response = JSON.parse(event.data);
        const price = response.data[0].p;
        const previousPrice = responseJson.c; //ici mettre le prix qu'il yavais a la precedent cloture ! 
        const symbol = response.data[0].s;

        function calculatePercentageChange(previousPrice, price) {
            const percentageChange = ((price - previousPrice) / previousPrice) ;
            return percentageChange.toFixed(2);
          }

        if (company.symbol === symbol) {
            const companyCard = document.querySelector(`.watchlist-company__company-price[data-symbol-ticker="${company.symbol}"]`);
            // Mettre à jour la valeur du prix dans l'élément de carte de l'entreprise
            if(companyCard) {
            companyCard.innerHTML = price;
            const percentageChange = calculatePercentageChange(previousPrice, price);
            console.log(percentageChange + '%' + symbol)
            }
        }

      });

      // Unsubscribe
      var unsubscribe = function (symbol) {
        socket.send(JSON.stringify({ type: 'unsubscribe', symbol: symbol }));
      };
    }
  },
    

}