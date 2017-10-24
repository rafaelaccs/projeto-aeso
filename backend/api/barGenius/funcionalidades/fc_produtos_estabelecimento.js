const ProdEstabelecimento = require('../model/produto_model');

ProdEstabelecimento.methods(['get', 'post', 'put', 'delete']);

ProdEstabelecimento.route('count', function(req, res, next){
    ProdEstabelecimento.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]});
        }else {
            res.json({value});
        }
    });
});

module.exports = ProdEstabelecimento;