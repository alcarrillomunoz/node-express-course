const express = require('express');
const router = express.Router();

const { logon, greeting } = require('../controllers/main');
const authMiddleware = require('../middleware/authentication'); 

router.route('/logon').post(logon); 

router.route('/hello').get(authMiddleware, greeting); 

module.exports =  router; 