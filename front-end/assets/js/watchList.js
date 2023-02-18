const watchList = {
    showAddWatchListModal: function () {
        const addWatchListModal = document.querySelector("#watchListModal");
        addWatchListModal.classList.add('is-active');
    },
    hideAddWatchListModal: function () {
        const closeWatchListModal = document.querySelector("#watchListModal");
        closeWatchListModal.classList.remove('is-active');
        closeWatchListModal.classList.add('is-hidden');
    }
}