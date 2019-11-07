const MongoDocument = require('./MongoDocument')

class User extends MongoDocument{

    constructor(data){
        super(data)
        this.nome = data.nome;
        this.email = data.email;
        this.senha = data.senha;
        this.cep = data.cep;
        this.rua = data.rua;
        this.bairro = data.bairro;
        this.numero = data.numero;
        this.complemento = data.complemento;
        this.collection = 'users';
    }
}

module.exports = User;

