//modelagem do banco de dados

const restful = require('node-restful');
const mongoose = restful.mongoose;

var produtoPedido = new mongoose.Schema({
    codigoProduto: {type: String, required: true},
    nomeProduto:   {type: String, required: true},
    descricaoProduto: {type: String, required: true},
    valorProduto:  {type: Number, required: true},
    categoria: {type: String, required: false},
    itens: {type: Array, required: true}
});

const usuarioPedido = new mongoose.Schema({
    codigoUsuario: {type: String, required: true},
    nomeUsuario:   {type: String, required: true},
    loginUsuario:  {type: String, required: true},
    senhaUsuario:  {type: String, required: true},
    tipoUsuario:   {type: String, required: true, uppercase: true, 
                    enum: ['USER', 'ADMIN', 'CONVIDADO']},
    statusUsuario: {type: String, required: true, uppercase: true,
        enum: ['ATIVO', 'INATIVO']}
});

var pedidoSchema = new mongoose.Schema({
    codigoPedido: {type: String, required: true},
    itensPedido: [{type: produtoPedido, required: true}],
    usuarioPedido: [usuarioPedido],
    statusPedido: {type: String, required: true, uppercase: true,
        enum: ['SOLICITADO', 'EM ANDAMENTO', 'SAIU PARA ENTREGA A MESA', 'ENTREGUE']},
    mesaPedido:   {type: String, required: true},
    totalPedido: {type: Number, required: true}   
});

module.exports = restful.model('Pedido', pedidoSchema);
