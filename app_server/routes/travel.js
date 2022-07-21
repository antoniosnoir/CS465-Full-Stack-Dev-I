const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/travel'); //controller

/* GET home page. */
router.get('/', ctrlMain.travel); //controller

module.exports = router;