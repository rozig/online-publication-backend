const express = require('express');
const router = express.Router();

const authController = require('./../controllers/AuthController');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/check-auth', authController.checkAuth);

module.exports = router;
