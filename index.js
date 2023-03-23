
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 1337;
const cors = require('cors');
const multer = require('multer');
const bodyParser = multer();
const app = express();


app.use(express.json());


app.use(cors());
app.use( bodyParser.none() );


require('./app/models/models')


const watchListRouter =require('./app/routers/watchListRouter')
const companyRouter = require('./app/routers/companyRouter')
const finnhubApiRouter = require('./app/routers/finnhubApiRouter')
const brandFetchApiRouter = require('./app/routers/brandFetchApiRouter')


app.use('/watchlist',watchListRouter);
app.use('/company',companyRouter);
app.use('/tickersearch',finnhubApiRouter)
app.use('/logo',brandFetchApiRouter)



// middleware 404
app.use((req, res) => {

    res.status(404).json({
        statusCode: 404,
        message: "Not Found"
    });
});

app.listen(PORT, (err) => {
    if (!err) {
        console.log('http://localhost:' + PORT);
    }
});