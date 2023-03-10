

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
        
        const response = await fetch(app.base_url + "/watchlist/" + idWatchList);
        const reponseJson = await response.json()
        watchList.makeWatchList(reponseJson)
        for (const companies of reponseJson.Companies) {
            companyCards.makeCompanyCard(companies)  
        }
        
    },

    // TODO 
    addSelectedCompanyInSelectedWatchList : async function (event, symbol,selectedWatchListId) {
        console.log(event.target)
        const idWatchList = event.target.closest('.watchlist-item').querySelector('.watchlist-name-button').dataset.listId;  //erreur une fois qu'on clique sur resultat liste la event de seachbar ecrase l'event présent
       const watchListIdArray = [idWatchList]
       const selectedId = watchListIdArray.shift();
    console.log(selectedId);
        
        


        

        //on recoit name de la fonction sendSelectedCompanyInDataBase ok
        //methode recuperer code_company du symbole envoyé par sendSelectedCompanyInDataBase
        const findCompanyBySymbolRespone = await fetch(app.base_url + "/company/symbol/" + symbol );
        const findCompanyBySymbolResponeJson = await findCompanyBySymbolRespone.json();
        //une fois code_company recupérer on le met dans une varable 
        const companyId = findCompanyBySymbolResponeJson.code_company
        // l'envoyer dans la body du fetch permettant d'ajouer une entreprise a une liste 
        const response = await fetch(app.base_url + "/watchlist/" + selectedId + "/company", {
            method: 'POST',
            body: companyId
        });
    },
    clickedWatchListId : async function (event) {
        const button = event.target; 
        const SelectedWatchListButton = button.parentElement.nextElementSibling.querySelector('.watchlist-name-button').dataset.listId
        // const addActiveClass = document.querySelector('.watchlist-name-button').dataset.listId
        // console.log(SelectedWatchListButton)
        watchList.addSelectedCompanyInSelectedWatchList(event, 'SYMBOL', SelectedWatchListButton);
    }
}