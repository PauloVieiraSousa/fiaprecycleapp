const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const crypto = require('crypto');

const settings = require('../config/settings.js');
const Settings = require('../config/settings');
const User = require('../models/user');

const router = express.Router();

router.post('/signin', async(req,res)=>{
    const email = req.body.email;
    const password = req.body.password;

    const user = await User.findOne({email:email, status:true}).select('password');
    if(!user){
        return res.status(400).send({error:'Usuario não encontrado'});
    }

    if(!await bcrypt.compare(password,user.password)){
        return res.status(400).send({error:'Senha invalida'});
    }

    user.password = undefined;

    const token = jwt.sign({id:user.id}, settings.secret,{expiresIn:86400});

    res.send({token});
});

router.post('/signup', async (req,res)=>{
    const email = req.body.email;
    try {

        if(await User.findOne({email})){
            return res.status(400).send({error:'usuario já existente'})
        }

        const user = await User.create(req.body);
    
        return res.send({
            message:'Registrado com sucesso'
        });            
    } catch (error) {
        return res.status(400).send({error:'Não foi possivel processar a requisição'});
    }
});



module.exports = app => app.use(`${Settings.path}/auth`, router);
