
require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 1337;
const cors = require('cors');
const app = express();


app.use(express.json());


app.use(cors());




const priceRouter = require('./app/routers/priceRouter');


app.use('/price', priceRouter);


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