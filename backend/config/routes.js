//Modulo responsável pelas rotas

const express = require('express');

module.exports = function(server){

  //API Routes
  const router = express.Router();

  server.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  server.use('/api', router);  

  //rotas da API
  const pedidoService = require('../api/barGenius/pedidoService');
  pedidoService.register(router, '/pedido');

  const produtoService = require('../api/barGenius/produtoService');
  produtoService.register(router, '/produto');

  const usuarioService = require('../api/barGenius/usuarioService');
  usuarioService.register(router, '/usuario');

}
