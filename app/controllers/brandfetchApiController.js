API_KEY_BRANDFETCH = process.env.API_KEY_BRANDFETCH
URL_BRANDFETCH = process.env.URL_BRANDFETCH
const axios = require("axios");
const headers = {"Authorization": `Bearer ${API_KEY_BRANDFETCH}`};

const brandFetchApiController = { 
    getCompanyLogo : async (req,res) => {
        const companyName = req.params.companyname +'.com'
        console.log(companyName)
        try {
            let logoSrc = 0
            const reponse = await axios.get(`${URL_BRANDFETCH}${companyName}`,{ headers })
            const reponseLogo = reponse.data["logos"]
            for (const logo of reponseLogo) {
                
                for (const format of logo.formats) {
                    console.log(format["src"])
                    logoSrc = format["src"] 
                    break;    
                } if (logoSrc) {
                    break
                }
            }
            res.json(logoSrc)

        } catch (error) {
            console.error(error);
            res.status(500).render('error', error);
          }
    },
}

module.exports = brandFetchApiController