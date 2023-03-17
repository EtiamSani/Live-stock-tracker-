
let selectedWatchListId;
const watchList = {
    watchListDisplayed : false,

    showAddWatchListModal: function () {
        const addWatchListModal = document.querySelector("#watchListModal");
        addWatchListModal.classList.add('is-active');

    },
    hideAddWatchListModal: function () {
        const closeWatchListModal = document.querySelector("#watchListModal");
        closeWatchListModal.classList.remove('is-active');
        closeWatchListModal.classList.add('is-hidden');
    },
    makeWatchList : function (watchListObject) {

        if (watchList.watchListDisplayed) {
            return;
          }

        const watchListTemplate = document.querySelector('#watchListColumn');
        const newWatchList = document.importNode(watchListTemplate.content, true);
        const watchLists = document.querySelector('.watch-lists');
        if (watchLists) {
            watchLists.appendChild(newWatchList);
            watchList.watchListDisplayed = true;
          } 
        
        document.querySelector('.watch-lists').append(newWatchList);
        
        
    },
    handleAddListForm : async function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
       
        await fetch(app.base_url + "/watchlist", {
            method: 'POST',
            body: formData
        })
        watchList.getWatchListFromApi()
    },
    getWatchListFromApi : async function () {
        const watchListButtonContainer = document.querySelector('.button-container')
        const response = await fetch(app.base_url + "/watchlist");
        const reponseJson = await response.json()
        watchListButtonContainer.innerHTML =""
        for (const watchlist of reponseJson) {
            
            watchList.watchListNameButtons(watchlist)
            
        }
    },
    watchListNameButtons : function (watchListName) {
    
        const watchListNamebuttonTemplate = document.querySelector('.template-watchlist-name-button');
        const newWatchListNameButton = document.importNode(watchListNamebuttonTemplate.content,true);
        newWatchListNameButton.querySelector('.watchlist-name-button').innerHTML =  `${watchListName.name} <i class="fa-solid fa-pen pen-for-update"></i> <i class="fa-solid fa-delete-left"></i> `;
        
        newWatchListNameButton.querySelector('.fa-delete-left').addEventListener('click', watchList.deleteWatchList);
        newWatchListNameButton.querySelector('.watchlist-name-button').dataset.listId = watchListName.code_list;

        newWatchListNameButton.querySelector('.watchlist-name-button').addEventListener('click', watchList.clickedWatchListId)
        // newWatchListNameButton.querySelector('.watchlist-name-button').addEventListener('click', watchList.watchListId(watchListName))

       newWatchListNameButton.querySelector('.fa-pen').addEventListener('click', watchList.showInputUpdateWatchListName);
       newWatchListNameButton.querySelector('.update-watchlist-form').addEventListener('submit', watchList.updateWatchListName);

       newWatchListNameButton.querySelector('.watchlist-item').addEventListener('click', watchList.findAwatchListWithCompanies);
       


       
        
        document.querySelector('.button-container').append(newWatchListNameButton);

       
    },
    deleteWatchList : async function (event) {
        
        const watchlist = event.target.closest('.watchlist-name-button')
        const idWatchList = watchlist.dataset.listId
        await fetch(app.base_url + "/watchlist/" + idWatchList, {
            method: 'DELETE',
           
        })
        watchList.getWatchListFromApi()
    },
    updateWatchListName : async function (event) {
        
        event.preventDefault()
    
        
        const formData = new FormData(event.target)
        const idWatchList = event.target.closest('.watchlist-item').querySelector('.watchlist-name-button').dataset.listId;
        
        await fetch(app.base_url + "/watchlist/" + idWatchList, {
            method: 'PUT',
            body: formData
        })
        watchList.getWatchListFromApi()

    
        const inputElement = event.target[0];
        inputElement.value = "";
        inputElement.focus();
    },
    showInputUpdateWatchListName : function (event) {

        const button = event.target; 
        const input = button.parentElement.nextElementSibling.querySelector('.update-input'); 
        input.classList.remove('is-hidden'); 
    },
    findAwatchListWithCompanies : async function (event) {
        companyCards.companyCardDisplayed = false;
        const idWatchList = event.target.closest('.watchlist-item').querySelector('.watchlist-name-button').dataset.listId;

        watchList.clearWatchListContainer()
        
        const response = await fetch(app.base_url + "/watchlist/" + idWatchList);
        const reponseJson = await response.json()
        watchList.makeWatchList(reponseJson)
        for (const companies of reponseJson.Companies) {
            companyCards.makeCompanyCard(companies)  
        }
        
    },

    
    addSelectedCompanyInSelectedWatchList : async function (symbol,SelectedWatchListButton) {
        if (selectedWatchListId) {
    const selectedWatchListId = localStorage.getItem('selectedWatchListId');
    let gettedIdWatchList = selectedWatchListId;
    const url = `${app.base_url}/watchlist/${gettedIdWatchList}/company`;

    if(symbol) {
    
    const findCompanyBySymbolRespone = await fetch(app.base_url + "/company/symbol/" + symbol );
    
        const findCompanyBySymbolResponeJson = await findCompanyBySymbolRespone.json();
        //une fois code_company recupérer on le met dans une varable 
        const companyId = findCompanyBySymbolResponeJson.code_company
        console.log('companycode :' + companyId)
        const formData = new FormData();
    formData.append('code_company', companyId);
    console.log('code_company:', formData.get('code_company'));

    const response = await fetch(url, {
      method: 'POST',
      body:  formData
    });
    const result = await response.json();
    console.log(result);
   
    }
}
},

clickedWatchListId : async function (event) {
    const button = event.target;
  const SelectedWatchListButton = button.dataset.listId;

  let idWatchList = SelectedWatchListButton;


  localStorage.setItem('selectedWatchListId', idWatchList); // stocker la valeur de l'ID de la liste de surveillance sélectionnée dans le localStorage
  // Vérifier si idWatchList est déjà stocké dans le localStorage
  const selectedWatchListId = localStorage.getItem('selectedWatchListId');
  if (selectedWatchListId) {
    idWatchList = selectedWatchListId;
  }
  
  // Vérifier si idWatchList est défini
  if (idWatchList) {
    console.log(idWatchList);
    watchList.addSelectedCompanyInSelectedWatchList('SYMBOL', idWatchList);
    
    // Stocker la valeur de l'ID de la liste de surveillance sélectionnée dans le localStorage
    localStorage.setItem('selectedWatchListId', idWatchList);
  }
},
clearWatchListContainer : async function () {
    const watchListContainer = document.querySelector('.company-cards');
    watchListContainer.innerHTML = '';
}
}

