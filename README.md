[![GitHub commits](https://badgen.net/github/commits/etiamsani/Live-stock-tracker-backend)](https://GitHub.com/EtiamSani/Live-stock-tracker-backend/commit/)
[![GitHub latest commit](https://badgen.net/github/last-commit/EtiamSani/Live-stock-tracker-backend)](https://GitHub.com/EtiamSani/Live-stock-tracker-backend/commit/)

# Smart stocktracker API

## What is this app about ?

Smart StockTracker is an application designed to track the price of your preferred stocks. The unique feature of this app is that it allows you to enter the entry price for each stock. This enables you to quickly determine whether or not to add a particular stock to your portfolio at a glance

Front-end repository here : https://github.com/EtiamSani/Live-stock-tracker-frontend

## Language, framworks and tools used in this project

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white)
![Insomnia](https://img.shields.io/badge/Insomnia-black?style=for-the-badge&logo=insomnia&logoColor=5849BE)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![Mocha](https://img.shields.io/badge/-mocha-%238D6748?style=for-the-badge&logo=mocha&logoColor=white)

## How to install the project ?

1. Clone the repository in your terminal:

```
git@github.com:EtiamSani/Live-stock-tracker-backend.git
```

2. Install all the dependencies:

```
npm i
```

or

```
npm install
```

3. Environment setup:

To set up the environment, make sure to create a .env file at the root of the project. An example of the content to put in the .env file is available in .env.example.

4. Initialization of the database:

Go to the migrations directory:

```
cd migrations
```

Then execute the following command:

```
bash 1.init_db.sh
```

5. Create tables

In the migrations directory, run the following command in your terminal:

```
bash 3.deploy.sh
```

6. Seed the database through seeding script:

At the root of the project, execute the following command:

```
node script/marketData.js
```

7. Start the server

```
node server.js
```

or

```
nodemon server.js
```

## Routes

The routes are available here: ---

## Arborescence of the project

```
.
├── app
│   ├── controllers
│   ├── db
│   ├── log
│   ├── model
│   ├── modules
│   ├── routers
│   └── service
│       └── error
├── documents
│   └── Conception
├── migrations
│   ├── deploy
│   ├── revert
│   └── verify
├── public
│   └── images
│       └── profilePictures
├── script
└── test

```
