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
        
       
       
       
        const selectedWatchListId = localStorage.getItem('selectedWatchListId');
        const watchlist = await fetch(app.base_url + '/watchlist/'+ selectedWatchListId);
        const watchlistJson = await watchlist.json()
      
         const responsesClosePrice = await fetch(app.base_url + "/tickersearch/price/" + company.symbol)
         const responsesClosePriceJson = await responsesClosePrice.json()
         const previousPrices = responsesClosePriceJson.pc
         
     

 


        const closePrices = new Map();
        
        const socket = new WebSocket('wss://ws.finnhub.io?token=cgc550hr01qsquh3egv0cgc550hr01qsquh3egvg');

socket.addEventListener('open', function (event) {
  for (const company of watchlistJson.Companies) {
    socket.send(JSON.stringify({ type: 'subscribe', symbol: company.symbol }));

  }
});

for (const company of watchlistJson.Companies) {
  // Récupérer le prix de clôture pour l'entreprise
  const responseClosePrice = await fetch(app.base_url + "/tickersearch/price/" + company.symbol);
  const responseClosePriceJson = await responseClosePrice.json();
  const previousPrice = responseClosePriceJson.pc;
  // console.log(previousPrice)

  // Stocker le prix de clôture pour l'entreprise dans la map
  closePrices.set(company.symbol, previousPrice);

  
  

   
  
}

socket.addEventListener('message', function (event) {
  // console.log('Message from server ', event.data);
  const response = JSON.parse(event.data);
  data =response.data
  for (const item of data) {
    const price = item.p;
    const symbol = item.s;

    const company = watchlistJson.Companies.find(c => c.symbol === symbol);

  if (company) {
    // Récupérer le prix de clôture pour l'entreprise à partir de la map
    const previousPrice = closePrices.get(company.symbol);

    // Calculer le pourcentage de variation pour l'entreprise
    const percentageChange = calculatePercentageChange(previousPrice, price);
    const priceChange = calculatePriceChange(previousPrice, price);

    // Mettre à jour les cartes de l'entreprise avec le nouveau prix et le nouveau taux de variation
    const companyCards = document.querySelectorAll(`.watchlist-company__company-price[data-symbol-ticker="${company.symbol}"]`);
    if (companyCards.length > 0) {
      for (const companyCard of companyCards) {
        companyCard.innerHTML = price;
        const companyCardPercentageChange = companyCard.parentElement.querySelector('.watchlist-company__company-price-change-pourcent');

        if (percentageChange < '0' && priceChange < '0') {
          companyCard.parentElement.querySelector('.watchlist-company__company-price-change-pourcent').style.color = 'red'
          companyCard.parentElement.querySelector('.watchlist-company__company-price-change').style.color = 'red'
        } else {
          companyCard.parentElement.querySelector('.watchlist-company__company-price-change-pourcent').style.color = 'green'
          companyCard.parentElement.querySelector('.watchlist-company__company-price-change').style.color = 'green'
        }
        // TODO faire cligoter en fonction du changement de prix (rouge ou vert)
        companyCard.classList.add('price-change-blink');
        setTimeout(() => {
          companyCard.classList.remove('price-change-blink');
        }, 500); // durée de l'animation en millisecondes

        companyCardPercentageChange.innerHTML = `${percentageChange}%`;

        const companyCardPriceChange = companyCard.parentElement.querySelector('.watchlist-company__company-price-change');
        companyCardPriceChange.innerHTML = `${priceChange}`
      }
    }

      function calculatePercentageChange(previousPrice, price) {
        const percentageChange = ((price - previousPrice) / previousPrice) *100 
        // console.log(price,previousPrice)
        return percentageChange.toFixed(2);
      }

      function calculatePriceChange (previousPrice, price) {
        const priceChange = (price - previousPrice)
        // console.log(price,previousPrice)
        return priceChange.toFixed(2);
      }
  }

    }
})
// Unsubscribe
let unsubscribe = function (symbol) {
  socket.send(JSON.stringify({ type: 'unsubscribe', symbol: symbol }));
};

          const responsesCompanyLogo = await fetch(app.base_url + "/tickersearch/logo/" + company.symbol)
          const responsesCompanyLogoJson = await responsesCompanyLogo.json()
          console.log(responsesCompanyLogoJson.logo)

          const imgElement = newCompanyCard.querySelector('.watchlist-company__logo');
          if (imgElement) {
            console.log(imgElement)
            imgElement.setAttribute('src', `https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/${company.symbol}.svg`);
          }


          
//    document.addEventListener("DOMContentLoaded", () => { newCompanyCard
//   const imgElement = document.querySelector('.watchlist-company__logo');
  
//   // Attendre que l'image soit chargée
//   imgElement.addEventListener("load", () => {
//     // Modifier l'attribut src de l'élément img
//     console.log(company.symbol)
//     imgElement.setAttribute('src', `https://static2.finnhub.io/file/publicdatany/finnhubimage/stock_logo/${company.symbol}.svg`);
//   });
// });
       

        newCompanyCard.querySelector('.fa-pen').addEventListener('click',companyCards.showEntryPriceInput);
        newCompanyCard.querySelector('.delete').addEventListener('click',companyCards.deletCompanyFromWatchList);

        
        newCompanyCard.querySelector('.update-entrey-price-form').addEventListener('submit', companyCards.updateEntryPrice);
        newCompanyCard.querySelector('.entryprice-input').dataset.companyId = company.code_company;
        newCompanyCard.querySelector('.delete').dataset.deleteId = company.code_company;

        newCompanyCard.querySelector('.watchlist-company__company-price').dataset.symbolTicker = company.symbol;
        newCompanyCard.querySelector('.watchlist-company__logo').dataset.symbolTicker = company.symbol;


       

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
    
  
    

}