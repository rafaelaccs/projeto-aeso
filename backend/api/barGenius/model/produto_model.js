const restful = require('node-restful');
const mongoose = restful.mongoose;

var produtoSchema = new mongoose.Schema({        
    codigoProduto: {type: String, required: true},
    nomeProduto:   {type: String, required: true},
    descricaoProduto: {type: String, required: false},
    valorProduto:  {type: Number, required: true},
    categoria: {type: String, required: false},
    itens: {type: Array, required: true},
    estabelecimento_id: {type: mongoose.Schema.Types.ObjectId, required: false}
});

module.exports = restful.model('Produto', produtoSchema);