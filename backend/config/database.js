//Conexao com o banco de dados, não precisa informar usuario e senha

const mongoose = require('mongoose')
//module.exports = mongoose.connect('mongodb://localhost/db_projeto_aeso')


module.exports = mongoose.connect('mongodb://pedro_gomes:Aeso_2203@ds147884.mlab.com:47884/db_projeto_aeso');

/* mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório."
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo de '{MIN}'."
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite mínimo de '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' não é valido para o atributo '{PATH}'."
 */