const User = require('../model/User')
const bd = require('../model/MongoDocument')

function create(req, res){
    let user = new User({});
    let erro = "";

    res.status(201).send(user.find(req.body.email));


    req.body.nome.match("[A-Za-z]{3,50}")? user.nome = req.body.nome : erro = "Nome inválido";
    req.body.email.match("^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?") ? user.email = req.body.email :  erro = "Email inválido";  
    req.body.senha.length >= 5 ? user.senha = req.body.senha : erro = "Senha inválida";
    req.body.cep.match("[0-9]{5}-[0-9]{3}") ? user.cep =  req.body.cep : erro = "CEP inválido";
    req.body.rua.match("[A-Za-z]{3,15}") ? user.rua =  req.body.rua : erro = "Rua inválida";
    req.body.bairro.match("[A-Za-z]{3,15}") ? user.bairro =  req.body.bairro : erro = "Bairro inválido";
    req.body.numero.match("[0-9]*") ? user.numero =  req.body.numero : erro = "Número inválido";
    req.body.complemento.match("[A-Za-z0-9]{3,15}") ? user.complemento =  req.body.complemento : erro = "Complemento inválido";

    if(!erro){
        user.save();
        res.status(201).send({user:user})
    }

    else{
        res.status(500).send(erro);
    }
        
    
    

    // user.email = req.body.email;
    // user.senha = req.body.senha;
    // user.cep = req.body.cep;
    // user.rua = req.body.rua;
    // user.bairro = req.body.bairro;
    // user.numero = req.body.numero;
    // user.complemento = req.body.complemento;
    // user.save();

    // res.status(201).send({user:user})

    // req.assert(user.email, 'Email está vazio').isEmpty();
    // // Preparando mensagem de sucesso e erro.
    // if (errors.length) {
    //     res.send('Erros: ' + errors.join(', '), 500);
    // }else{
    //     user.save();

    //     res.status(201).send({user:user})
    // }

   
}



module.exports = create;