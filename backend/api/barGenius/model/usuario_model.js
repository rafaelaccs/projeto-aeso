const restful = require('node-restful');
const mongoose = restful.mongoose;

const usuarioSchema = new mongoose.Schema({
    codigoUsuario: {type: String, required: true},
    nomeUsuario:   {type: String, required: true},
    loginUsuario:  {type: String, required: true},
    senhaUsuario:  {type: String, required: true},
    tipoUsuario:   {type: String, required: true, uppercase: true, 
                    enum: ['USER', 'ADMIN', 'CONVIDADO']},
    statusUsuario: {type: String, required: true, uppercase: true,
        enum: ['ATIVO', 'INATIVO']}
});

module.exports = restful.model('Usuario', usuarioSchema);