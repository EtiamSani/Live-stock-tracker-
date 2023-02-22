

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

    },
    getWatchListFromApi : async function () {
        const response = await fetch(app.base_url + "/watchlist");
        const reponseJson = await response.json()
        for (const watchlist of reponseJson) {
            
            watchList.watchListNameButtons(watchlist)

        }
    },
    watchListNameButtons : function (watchListName) {
    
        const watchListNamebuttonTemplate = document.querySelector('.template-watchlist-name-button');
        const newWatchListNameButton = document.importNode(watchListNamebuttonTemplate.content,true);
        newWatchListNameButton.querySelector('.watchlist-name-button').innerHTML =  `${watchListName.name} <i class="fa-solid fa-delete-left"></i> `;
        
        newWatchListNameButton.querySelector('.fa-delete-left').addEventListener('click', watchList.deleteWatchList);
        console.log(newWatchListNameButton)
        // console.log(deleteButtons)
        document.querySelector('.button-container').append(newWatchListNameButton);

        // for (const oneWatchListdeleteButton of deleteButtons) {
        //     console.log(deleteButtons)
        //     oneWatchListdeleteButton.addEventListener('click', watchList.deleteWatchList);
        // }
    },
    deleteWatchList : async function (event) {
        console.log('BOUU')
        // const watchlist = event.target.closest('.')
        // const idWatchList = 
        // await fetch(app.base_url + "/watchlist", {
        //     method: 'DELETE',
           
        // })

    }
}