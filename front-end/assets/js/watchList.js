

const watchList = {
    showAddWatchListModal: function () {
        const addWatchListModal = document.querySelector("#watchListModal");
        addWatchListModal.classList.add('is-active');
    },
    hideAddWatchListModal: function () {
        const closeWatchListModal = document.querySelector("#watchListModal");
        closeWatchListModal.classList.remove('is-active');
        closeWatchListModal.classList.add('is-hidden');
    },
    makeList : function (watchListObject) {
        const template = document.querySelector('#watchListColumn');
        const copieWatchList = document.importNode(template.textContent, true);
        
    },
    handleAddListForm : async function (event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        console.log(formData.get("name"))
        console.log(formData.get('code_list'))
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
        newWatchListNameButton.querySelector('.watchlist-name-button').innerHTML =  `${watchListName.name} <i class="fa-solid fa-delete-left"></i> `;
        
        newWatchListNameButton.querySelector('.fa-delete-left').addEventListener('click', watchList.deleteWatchList);
        newWatchListNameButton.querySelector('.watchlist-name-button').dataset.listId = watchListName.code_list
        
        document.querySelector('.button-container').append(newWatchListNameButton);

       
    },
    deleteWatchList : async function (event) {
        console.log('BOUU')
        const watchlist = event.target.closest('.watchlist-name-button')
        console.log(watchlist)
        const idWatchList = watchlist.dataset.listId
        console.log(idWatchList)
        await fetch(app.base_url + "/watchlist/" + idWatchList, {
            method: 'DELETE',
           
        })
        watchList.getWatchListFromApi()
    }
}