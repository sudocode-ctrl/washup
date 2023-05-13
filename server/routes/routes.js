const express = require('express');
const { getAllData } = require('../controllers/controller');

const router = express.Router();


router.get('/data/:type', getAllData);


module.exports = {
    routes: router
}