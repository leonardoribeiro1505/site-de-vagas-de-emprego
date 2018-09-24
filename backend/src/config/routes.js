const express = require('express')
const auth = require('./auth')

module.exports = function(server) {

    /*
    * Rotas protegidas por Token JWT
    */
    const protectedApi = express.Router()
    server.use('/api', protectedApi)

    protectedApi.use(auth)
    
    
    /*
    * Rotas abertas
    */
    const openApi = express.Router()
    server.use('/oapi', openApi)
    
    //VAGAS Routes
    const vagasService = require('../api/vagas/vagasService')
    vagasService.register(openApi, '/vagas')

    const AuthService = require('../api/user/authService')
    openApi.post('/login', AuthService.login)
    openApi.post('/signup', AuthService.signup)
    openApi.post('/validateToken', AuthService.validateToken)

    // //USUARIOS Routes
    // const usuariosService = require('../api/login/usuariosService')
    // usuariosService.register(router, '/usuarios')
}