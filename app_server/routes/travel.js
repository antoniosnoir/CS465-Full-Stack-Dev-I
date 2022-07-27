const express = require('express');
const router = express.Router();
const ctrlMain = require('../controllers/travel'); //controller

/* GET home page. */
router.get('/', ctrlMain.travelList); //controller

module.exports = router;