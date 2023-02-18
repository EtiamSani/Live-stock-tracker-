app = {
    base_url : 'http://localhost:3000',
    
    init : function () {
        
        app.price()
        app.addListenerToActions()
    },
    price : async function () {
        const response = await fetch(app.base_url +"/price/dim")
        const responseJson = await response.json()
        const afficherprix = document.querySelector('h1')
        afficherprix.innerText = responseJson
        console.log(responseJson)
    },
    addListenerToActions: function () {
        //Bouton ajouter une liste
        const addWatchListButton = document.querySelector('#addWatchListModal');
        addWatchListButton.addEventListener('click',watchList.showAddWatchListModal);

        const closeWatchListModalButton = document.querySelector('.watchlist-modal-close-button');
        closeWatchListModalButton.addEventListener('click',watchList.hideAddWatchListModal);

        const updatePensilIcon = document.querySelector('.fa-pen');
        updatePensilIcon.addEventListener('click',companyCards.showEntryPriceInput)

        const submitEntryPriceInput = document.querySelector('.entryprice-input');
        submitEntryPriceInput.addEventListener('submit', companyCards.hideEntryPriceInput);
    }    
}

document.addEventListener('DOMContentLoaded', app.init );