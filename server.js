require("dotenv").config();
const express = require("express");
const path = require("path");
const PORT = process.env.PGPORT ?? 3000;
const cors = require("cors");
const multer = require("multer");
const bodyParser = multer();
const app = express();

/*********************************************/
/************* swagger-jsdoc *****************/
/*********************************************/
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Live stocktracker API",
      version: "1.0.0",
      description: "My Therapist API",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./app/routers/*.js"],
};

const openapiSpecification = swaggerJsdoc(options);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapiSpecification));

/*********************************************/
/************** Config Express ***************/
/*********************************************/

app.use(express.json());
app.use(cors());
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json({ limit: "200kb" }));
app.use(bodyParser.none());

const watchListRouter = require("./app/routers/watchListRouter");
const companyRouter = require("./app/routers/companyRouter");
const finnhubApiRouter = require("./app/routers/finnhubApiRouter");
const routerAuth = require("./app/routers/authRouter");
const investorRouter = require("./app/routers/investorRouter");

app.use("/auth", routerAuth);
app.use("/watchlist", watchListRouter);
app.use("/company", companyRouter);
app.use("/tickersearch", finnhubApiRouter);
app.use("/investor", investorRouter);

// middleware 404
app.use((req, res) => {
  res.status(404).json({
    statusCode: 404,
    message: "Not Found",
  });
});

app.listen(process.env.PORT || PORT, (err) => {
  if (!err) {
    console.log("http://localhost:" + PORT);
  }
});
