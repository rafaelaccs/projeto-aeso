//const _ = require('lodash');
const Pedido = require('./model/pedido_model');

//Utilização de todos os verbos http
Pedido.methods(['get', 'post', 'put', 'delete']); 

//Fala pros campos do Schema ser validado
Pedido.updateOptions({new: true, runValidators: true});

//Faz alguma coisa com a requisição antes de realizar o put no banco
Pedido.before('get', function(req, res, next){
    console.log("Request: ", req.body);
    next();
});


//Se houver erro, devolve um array de erros, senão devolve o objeto
Pedido.route('count', function(req, res, next){
    Pedido.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]});
        }else {
            res.json({value});
        }
    });
});

module.exports = Pedido;
