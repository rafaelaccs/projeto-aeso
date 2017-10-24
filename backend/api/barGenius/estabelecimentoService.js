const Estabelecimento = require('./model/estabelecimento_model');

Estabelecimento.methods(['get', 'post', 'put', 'delete']);

Estabelecimento.updateOptions({new: true, runValidators: true});

Estabelecimento.route('count', function(req, res, next){
    Estabelecimento.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]});
        }else {
            res.json({value});
        }
    });
});

module.exports = Estabelecimento;