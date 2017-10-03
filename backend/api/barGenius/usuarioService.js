//const _ = require('lodash');
const Usuario = require('./model/usuario_model');

Usuario.methods(['get', 'post', 'put', 'delete']);
Usuario.updateOptions({new: true, runValidators: true});


Usuario.route('count', function(req, res, next){
    Usuario.count(function(error, value){
        if(error){
            res.status(500).json({errors: [error]});
        }else {
            res.json({value});
        }
    });
});

module.exports = Usuario;
