const express = require('express');
const router = express.Router();

const defaultController = require('./../controllers/DefaultController');

router.get('*', defaultController.home);

module.exports = router;
