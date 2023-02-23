const companyCards = { 
    companyCardDisplayed : false,
    showEntryPriceInput : function () {
        const showEnteryPriceInput = document.querySelector('.entryprice-input');
        showEnteryPriceInput.classList.remove('is-hidden')
    },
    hideEntryPriceInput : function () {
        const hideEnteryPriceInput = document.querySelector('.entryprice-input');

        console.log(hideEnteryPriceInput)
        hideEnteryPriceInput.classList.add('is-hidden');
    },
    makeCompanyCard : async function (company) {

        if (companyCards.companyCardDisplayed) {
            return;
          }

        const companyCardTemplate = document.querySelector('#CompanyCardColumn');
        const newCompanyCard = document.importNode(companyCardTemplate.content, true);
        newCompanyCard.querySelector('.watchlist-company__company-symbol').innerHTML = company.symbol
        newCompanyCard.querySelector('.watchlist-company__company-name').innerHTML = company.name
        newCompanyCard.querySelector('.entryprice').innerHTML = company.entry_price

        const response = await fetch(app.base_url +"/tickersearch/price/"+ company.symbol)
        const responseJson = await response.json()
        const companyPrice = responseJson["Global Quote"]['05. price']
        const companyChange = responseJson["Global Quote"]['09. change']
        const companyChangeInPercent = responseJson["Global Quote"]['10. change percent']
        newCompanyCard.querySelector('.watchlist-company__company-price').innerHTML = companyPrice
        newCompanyCard.querySelector('.watchlist-company__company-price-change').innerHTML = companyChange
        newCompanyCard.querySelector('.watchlist-company__company-price-change-pourcent').innerHTML = companyChangeInPercent
        

        const companyCard = document.querySelector('.company-cards');
        if (companyCard) {
            companyCard.appendChild(newCompanyCard);
            companyCards.watchListDisplayed = true;
          } 
        
        
        document.querySelector('.company-cards').append(newCompanyCard);
    }
}