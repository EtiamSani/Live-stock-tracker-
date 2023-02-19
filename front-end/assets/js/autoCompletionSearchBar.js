

autoCompletionSearchBar = { 
    creatLiInSearchBar : function (text) { 
        const li = document.createElement("li");
        li.classList.add('search-li')
        li.innerText = text;
        return li
    },
    // TODO resolve Fetching data error : unexpected end of json input 
    companySearchResults : async function (e) {
        try {
        const query = e.target.value;
        console.log(query)
        autoCompletionSearchBar.removeLiInSearchBar();
        const ul = document.getElementById("suggestions");
        if (query) {
        const reponse = await fetch(app.base_url + "/tickersearch/" + query)
        reponseJson = await reponse.json();
            if (reponseJson) {
        
        for (const results of reponseJson) {
            const div = document.createElement("div")
            div.classList.add('search-result')
            
            const newLiInSearchBarForSymbol = autoCompletionSearchBar.creatLiInSearchBar(results["1. symbol"])
            const newLiInSearchBarForName = autoCompletionSearchBar.creatLiInSearchBar(results["2. name"])
            div.append(newLiInSearchBarForSymbol, newLiInSearchBarForName)
            ul.appendChild(div)
        }
    }
    } else {
        e.target.value = '';
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
    }
}