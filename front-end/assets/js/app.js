app = {
    base_url : 'http://localhost:3000',
    
    init : function () {
        console.log('affaafa')
        app.price()
    },
    price : async function () {
        const response = await fetch(app.base_url +"/price/dim")
        const responseJson = await response.json()
        const afficherprix = document.querySelector('h1')
        afficherprix.innerText = responseJson
        console.log(responseJson)
    }
}

document.addEventListener('DOMContentLoaded', app.init );