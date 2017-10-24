const restful = require('node-restful');
const mongoose = restful.mongoose;

var estabelecimentoSchema = new mongoose.Schema({    
    codigoEstabelecimento: {type: String, required: true},
    nomeEstabelecimento:   {type: String, required: true},
    enderecoEstabelecimento: {type: String, required: false},    
    statusEstabelecimento: {type: String, required: true, uppercase: true,
        enum: ['ATIVO', 'INATIVO']}
});

module.exports = restful.model('estabelecimento', estabelecimentoSchema);