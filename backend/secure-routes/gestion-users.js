onst express = require('express');
const users = require('../model/sequelize');
const passport = require("passport");
const router = express.Router();

module.exports = router; //pour pouvoir utiliser mes routes dans app.js