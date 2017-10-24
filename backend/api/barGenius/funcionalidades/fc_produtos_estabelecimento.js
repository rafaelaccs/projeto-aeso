const ProdEstabelecimento = require('../model/produto_model');
const MongoClient = require('mongodb').MongoClient;
const url  = ('mongodb://pedro_gomes:Aeso_2203@ds147884.mlab.com:47884/db_projeto_aeso');
const ObjectId = require('mongodb').ObjectID;


ProdEstabelecimento.before('get', function(req, res, next){    

    const estab_id = req.params.id;
    console.log("Estabelecimento: ", estab_id);
        
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
    
        const estabecimento = db.collection("produtos")
                              .find({estabelecimento_id: ObjectId(estab_id)})
                              .toArray(function(err, result) {
    
        if (err) throw err;
           
        db.close();
        return (res.json(result));
        
    
        });
    });

    //next();
});

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