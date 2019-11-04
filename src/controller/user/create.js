const User = require('../../model/User')
const Adress = require('../../model/Adress')

function create(req, res){
    let user = new User({});
    user.idUser = req.body.idUser;
    user.nome = req.body.nome;
    user.senha = req.body.senha;
    user.save();

    let adress = new Adress({});
    adress.idAdress = req.body.idAdress;
    adress.cep = req.body.cep;
    adress.rua = req.body.rua;
    adress.bairro = req.body.bairro;
    adress.numero = req.body.numero;
    adress.compl = req.body.compl;
    adress.idUser = req.body.idUser;
    adress.save();

    res.status(201).send({user:user})
}



module.exports = create;