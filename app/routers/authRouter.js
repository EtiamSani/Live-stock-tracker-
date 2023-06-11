const express = require("express");
const authController = require("../controllers/authController");
const router = express.Router();

router.post("/register-investor", authController.registerInvestor);
router.post("/login", authController.login);

module.exports = router;
