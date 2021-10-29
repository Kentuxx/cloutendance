const express = require('express');
const authController = require('../controllers/authentication_controller');

const router = express.Router();

/// CREATE ROUTE AND IMPORT CONTROLLER FUNCTION
router.get("/", authController.loginUser);

/// EXPORT THE ROUTER
module.exports = router;

