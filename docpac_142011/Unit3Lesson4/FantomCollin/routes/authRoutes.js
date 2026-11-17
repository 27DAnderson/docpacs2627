const express = require('express');
const userModel = require('../models/userModel');
const db = require('../models/database');

const auth = express.Router();

auth.get('/register', (req, res) => {
    res.render('register', {
        appName: process.env.APP_NAME, currentPage: 'form'

    })
});

auth.post('/register', (req, res) => {
    
});

auth.get('/login', (req, res) => {
    
});

auth.post('/login', (req, res) => {
    
});


auth.post('/logout', (req, res) => {

});

auth.get('/account', (req, res) => {
    
});

module.exports = auth;