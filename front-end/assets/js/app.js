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

            const selectedCompanyInSearchBar = document.querySelector('ul');
            selectedCompanyInSearchBar.addEventListener('click', function(event) {
              const clickedElement = event.target.closest('.search-result')
            //   console.log(clickedElement)
              if (clickedElement) {
                const symbolLi = clickedElement.querySelector('.search-result-symbol');
                const symbol = symbolLi.textContent.trim();

                const nameLi = clickedElement.querySelector('.search-result-name');
                const name = nameLi.textContent.trim();
                // console.log(symbol + name)
                companyCards.sendSelectedCompanyInDataBase(symbol,name);
                
                
              }
            });     

    }    
}

document.addEventListener('DOMContentLoaded', app.init );