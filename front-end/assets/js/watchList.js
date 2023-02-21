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

    }
}