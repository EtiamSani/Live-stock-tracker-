app = {
    base_url : 'http://localhost:3000',
    
    init : function () {
        app.addListenerToActions()
        watchList.getWatchListFromApi()
    },
    addListenerToActions: function () {
        
        const addWatchListButton = document.querySelector('#addWatchListModal');
        addWatchListButton.addEventListener('click',watchList.showAddWatchListModal);

        const closeWatchListModalButton = document.querySelector('.watchlist-modal-close-button');
        closeWatchListModalButton.addEventListener('click',watchList.hideAddWatchListModal);
 
        const searchBarInputListener = document.querySelector('.search-bar');
        searchBarInputListener.addEventListener('input', autoCompletionSearchBar.companySearchResults)

        const addListForm = document.querySelector('#watchListModal form');
        addListForm.addEventListener('submit',watchList.handleAddListForm);

    }    
}

document.addEventListener('DOMContentLoaded', app.init );