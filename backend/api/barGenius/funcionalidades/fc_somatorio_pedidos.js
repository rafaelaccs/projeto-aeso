const _ = require('lodash');
const Pedido = require('../model/pedido_model');

function sumPedido(req, res) {
    Pedido.aggregate({
        $project: {total: {$sum: "$itensPedido.valorProduto"}}
    }, {
        $group: {_id: null, total: {$sum: "$total"}}   
    }, {
        $project: {_id: 0, total: 1}
    }, function(error, result){
        if(error){
            res.status(500).json({errors: [error]});
        } else {
            res.json(_.defaults(result[0], {total: 0}));
        }
    });
}


module.exports = { sumPedido }