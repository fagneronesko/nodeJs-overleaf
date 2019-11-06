const User = require('../model/User')

function create(req, res){
    let user = new User({});
    user.email = req.body.email;
    user.senha = req.body.senha;
    user.cep = req.body.cep;
    user.rua = req.body.rua;
    user.bairro = req.body.bairro;
    user.numero = req.body.numero;
    user.complemento = req.body.complemento;
    user.save();

    res.status(201).send({user:user})
}



module.exports = create;