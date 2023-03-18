
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
        if (query) {
        const reponse = await fetch(app.base_url + "/tickersearch/" + query)
        reponseJson = await reponse.json();
            if (reponseJson) {
                for (const results of reponseJson) {
                    const div = document.createElement("div");
                    div.classList.add('search-result');

                    div.addEventListener('click', function() {
                        
                        autoCompletionSearchBar.removeLiInSearchBar();
                    });
                    
                    const divSymbol = document.createElement("div");
                    divSymbol.classList.add('search-result-symbol');
                    const newLiInSearchBarForSymbol = autoCompletionSearchBar.creatLiInSearchBar(results["1. symbol"] );
                    divSymbol.appendChild(newLiInSearchBarForSymbol);
                
                    const divName = document.createElement("div");
                    divName.classList.add('search-result-name');
                    const newLiInSearchBarForName = autoCompletionSearchBar.creatLiInSearchBar(results["2. name"] );
                    divName.appendChild(newLiInSearchBarForName);

                    const divType = document.createElement("div");
                    divType.classList.add('search-result-type');
                    const newLiInSearchBarForType = autoCompletionSearchBar.creatLiInSearchBar(results["3. type"] );
                    divType.appendChild(newLiInSearchBarForType);
                
                    div.append(divName, divSymbol,divType);
                    ul.appendChild(div);
                }
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
    
}