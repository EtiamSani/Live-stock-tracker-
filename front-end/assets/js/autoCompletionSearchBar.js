

autoCompletionSearchBar = { 
    creatLiInSearchBar : function (text) { 
        const li = document.createElement("li");
        li.innerText = text;
        return li
    },
    companySearchResults : async function (e) {
        const query = e.target.value;
        const ul = document.getElementById("suggestions");
        const reponse = await fetch(app.base_url + "/tickersearch/" + query)
        reponseJson = await reponse.json();
        console.log(reponseJson)
        for (const results of reponseJson) {
            const div = document.createElement("div")
           const newLiInSearchBarForSymbol = autoCompletionSearchBar.creatLiInSearchBar(results["1. symbol"])
           const newLiInSearchBarForName = autoCompletionSearchBar.creatLiInSearchBar(results["2. name"])
           div.innerText = ul.append(newLiInSearchBarForSymbol, newLiInSearchBarForName)
        }
    }
}