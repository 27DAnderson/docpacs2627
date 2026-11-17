const express = require('express');
const router = express.Router();
const path = require('path');
const { createUser, findUserByUsername, findUserByEmail, findUserById } = require('../models/userModel.js');
const port = process.env.PORT;
const appName = process.env.APP_NAME;

router.get('/register', (req, res) => {
    res.render('register.ejs', {
        pageTitle: "Registration Form"
    })
})

router.post('/register', (req, res) => {
    const username = req.body.username?.trim();
    const email = req.body.email?.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const password = req.body.password?.trim();
    const confirmPassword = req.body.confirmPassword?.trim();

    if (!username || !email || !password) {
        res.render('error.ejs', {
            pageTitle: "An Error Has Occurred!",
            statusCode: 422,
            errorHeading: "Error 422: Unprocessable Content",
            message: "At least one input was blank or invalid! Please enter valid user information or ",
            linkText: "return to the homepage",
            linkURL: "/"
        });
        return;
    }

    if (password !== confirmPassword) {
        res.render('error.ejs', {
            pageTitle: "An Error Has Occurred!",
            statusCode: 422,
            errorHeading: "Error 422: Unprocessable Content",
            message: "Your passwords did not match! Please ensure the \"Password\" and \"Confirm Password\" fields are the same, or ",
            linkText: "return to the homepage",
            linkURL: "/"
        })
        return;

    }

    if (username.length >= 20 || username.length < 3) {
        res.render('error.ejs', {
            pageTitle: "An Error Has Occurred!",
            statusCode: 422,
            errorHeading: "Error 422: Unprocessable Content",
            message: "Your username didn't meet the length requirements! Either provide a valid username or ",
            linkText: "return to the homepage",
            linkURL: "/"
        })
        return;
        
    }
    if (!emailPattern.test(email)) {
        res.render('error.ejs', {
            pageTitle: "An Error Has Occurred!",
            statusCode: 422,
            errorHeading: "Error 422: Unprocessable Content",
            message: "Your email was invalid (most likely formatted incorrectly)! Either provide a properly-formatted email or ",
            linkText: "return to the homepage",
            linkURL: "/"
        })
        return;
    }
})

router.get('/login', (req, res) => {

})

router.post('/login', (req, res) => {

})

router.post('/logout', (req, res) => {

})

router.get('/account', (req, res) => {

})

module.exports = router;