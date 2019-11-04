const MongoDocument = require('./MongoDocument')

class Adress extends MongoDocument{
    
    constructor(data){
        super(data)
        this.idAdress = data.idAdress;
        this.cep = data.cep;
        this.rua  = data.rua;
        this.bairro = data.bairro;
        this.numero = data.numero;
        this.compl = data.compl;
        this.idUser = data.idUser;
        //this.collection = 'users';
    }
}

module.exports = Adress