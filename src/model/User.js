const MongoDocument = require('./MongoDocument')

class User extends MongoDocument{

    constructor(data){
        super(data)
        this.idUser = data.idUser;
        this.nome = data.nome;
        this.senha = data.senha;
        //this.collection = 'users';
    }
}

module.exports = User;

