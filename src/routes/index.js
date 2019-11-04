const express = require('express');
const routes = express.Router();
const createUser = require('../controller/user/create')

routes.get('/', function(req,res){
    res.render('index');
})

routes.get('/login', function(req, res){
    res.render('users/login')
})

routes.get('/register', function(req, res){
    res.render('users/register')
})

routes.post('/register', function(req, res){
    createUser(req,res);
})

module.exports = routes;