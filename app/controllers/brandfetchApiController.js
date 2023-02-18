API_KEY_BRANDFETCH = process.env.API_KEY_BRANDFETCH
URL_BRANDFETCH = process.env.URL_BRANDFETCH
const axios = require("axios");
const headers = {"Authorization": `Bearer ${API_KEY_BRANDFETCH}`};

const brandFetchApiController = { 
    getCompanyLogo : async (req,res) => {
        const companyName = req.params.companyname +'.com'
        console.log(companyName)
        try {
            const reponse = await axios.get(`${URL_BRANDFETCH}${companyName}`,{ headers })
            res.json(reponse.data)

        } catch (error) {
            console.error(error);
            res.status(500).render('error', error);
          }
    },
}

module.exports = brandFetchApiController