const express = require('express');
const userModel = require('../models/userModel');
const Database = require('better-sqlite3');

const auth = express.Router();

auth.get('/register', (req, res) => {
    res.render('register', {
        appName: process.env.APP_NAME, userInput: submission, currentPage: 'form', input: cleanSubmission, entries

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