const express = require('express');
const userModel = require('../models/userModel');
const db = require('../models/database');

const auth = express.Router();

auth.get('/register', (req, res) => {
    res.render('register', {
        appName: process.env.APP_NAME, currentPage: 'register'
    })
});

auth.post('/register', (req, res) => {
    const username = req.body.userSignup
    const email = req.body.emailSignup
    const password = req.body.passwordSignup
    const repPassword = req.body.repasswordSignup

    if (username.trim() === '' || email.trim() === '' || password !== repPassword || username.trim()) {
        return res.status(400).render('error', { appName: process.env.APP_NAME, status: res.statusCode, statusInstr: 'PLEASE ENTER A VALID USER/EMAIL OR PASSWORDS DO NOT MATCH, PLEASE TRY AGAIN', currentPage: 'register' })
    } else {
        const userCheck = userModel.findByUser(username).trim()
        const emailCheck = userModel.findByEmail(email).trim()

        if (userCheck === username.trim() || emailCheck === email.trim()) {
            
            res.render('register', {
                appName: process.env.APP_NAME, currentPage: 'register', foundDupe: 'Username/Email already exists!' 
            })
        }
    }

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