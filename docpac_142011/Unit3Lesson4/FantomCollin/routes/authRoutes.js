const express = require('express');
const userModel = require('../models/userModel');
const db = require('../models/database');

const auth = express.Router();

auth.get('/register', (req, res) => {
    res.render('register', {
        appName: process.env.APP_NAME, currentPage: 'register', foundDupe: ''
    })
});

auth.post('/register', (req, res) => {
    const username = req.body.userSignup
    const email = req.body.emailSignup
    const password = req.body.passwordSignup
    const repPassword = req.body.repasswordSignup
    console.log(username, email, password, repPassword);
    
    if (username.trim() === '' || email.trim() === '' || password !== repPassword) {
        return res.status(400).render('error', { appName: process.env.APP_NAME, status: res.statusCode, statusInstr: 'PLEASE ENTER A VALID USER/EMAIL OR PASSWORDS DO NOT MATCH, PLEASE TRY AGAIN', currentPage: 'register' })
    } else {
        const userCheck = userModel.findByUser(username)
        const emailCheck = userModel.findByEmail(email)

        console.log("uC", userCheck)
        console.log("eC", emailCheck)

        if (userModel.findByUser(username) === username || userModel.findByEmail(email) === email) {
            
            res.render('register', {
                appName: process.env.APP_NAME, currentPage: 'register', foundDupe: 'Username/Email already exists!' 
            })
        } else {
            console.log('swows', username)
            userModel.createUser(username, email, password)
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