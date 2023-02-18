const companyCards = { 
    showEntryPriceInput : function () {
        const showEnteryPriceInput = document.querySelector('.entryprice-input');
        showEnteryPriceInput.classList.remove('is-hidden')
    },
    hideEntryPriceInput : function () {
        const hideEnteryPriceInput = document.querySelector('.entryprice-input');

        console.log(hideEnteryPriceInput)
        hideEnteryPriceInput.classList.add('is-hidden');
    }
}