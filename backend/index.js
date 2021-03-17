const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());
const mongoose = require('mongoose');
const userModel = require('./models/user');
const bcryptjs = require('bcryptjs');

const port = 8000;
app.listen(port,()=>{
    console.log('Server started on port' + port);
});
mongoose.connect('mongodb://localhost:27017/express_login', () => {
    console.log('DB connected')
});
//Ma base de donné c'est créer automatiquement

app.post("/user", async(req,res)=>{
    
    if(req.body.password.length<8){
        res.send("Mot de passe trop court")
        return;
    }
    if(req.body.password!== req.body.confirmPassword){
        res.send('Mot de passe non identique')
        return;
    }
    await userModel.create({
        username:req.body.username,
        password : bcryptjs.hashSync(req.body.password),
        //Me permet de crypter le code
    });
    res.send('user created');
});

//Le backend doit etre capable de d'enregistrer un utilisateur, de le connecter, et de donner la liste des personnes inscrites uniquement si on est connecté.


