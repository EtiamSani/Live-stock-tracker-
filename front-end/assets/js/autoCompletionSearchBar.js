
autoCompletionSearchBar = { 
    creatLiInSearchBar : function (text) { 
        const li = document.createElement("li");
        li.classList.add('search-li')
        li.innerText = text;
        return li
    },
    
    companySearchResults : async function (e) {
        try {
        const query = e.target.value;
        
        autoCompletionSearchBar.removeLiInSearchBar();
        const ul = document.getElementById("suggestions");
        autoCompletionSearchBar.displayLoader()
        if (query) {
            // autoCompletionSearchBar.displayLoader()
        const reponse = await fetch(app.base_url + "/tickersearch/" + query)
        reponseJson = await reponse.json();
            if (reponseJson) {
                for (const results of reponseJson.result) {
                    const div = document.createElement("div");
                    div.classList.add('search-result');

                    div.addEventListener('click', function() {
                        
                        autoCompletionSearchBar.removeLiInSearchBar();
                    });
                    
                    const divSymbol = document.createElement("div");
                    divSymbol.classList.add('search-result-symbol');
                    const newLiInSearchBarForSymbol = autoCompletionSearchBar.creatLiInSearchBar(results["symbol"] );
                    divSymbol.appendChild(newLiInSearchBarForSymbol);
                
                    const divName = document.createElement("div");
                    divName.classList.add('search-result-name');
                    const newLiInSearchBarForName = autoCompletionSearchBar.creatLiInSearchBar(results["description"] );
                    divName.appendChild(newLiInSearchBarForName);

                    const divType = document.createElement("div");
                    divType.classList.add('search-result-type');
                    const newLiInSearchBarForType = autoCompletionSearchBar.creatLiInSearchBar(results["type"] );
                    divType.appendChild(newLiInSearchBarForType);
                
                    div.append(divName, divSymbol,divType);
                    ul.appendChild(div);
                }
                autoCompletionSearchBar.hideLoader()

    } else {
        console.error('JSON data is empty');
      }
    
    } else {
        // e.target.value = '';
        autoCompletionSearchBar.removeLiInSearchBar();
        
    }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    },
    removeLiInSearchBar : function () {
        const ul = document.getElementById("suggestions");
        while (ul.firstChild) {
            ul.removeChild(ul.firstChild);
        }
    },

    displayLoader: function() {
        const div = document.createElement("div");
        div.classList.add('loader');
        const ul = document.getElementById("suggestions");
        ul.appendChild(div);
    },
    
    hideLoader: function() {
        const remove = document.querySelector('.loader');
        remove.classList.remove('loader')
    },
    
}