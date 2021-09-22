const express = require('express');
const authMiddleware = require('../middleware/auth');
const Store = require('../models/store');
const GenerateWallet = require('../core/generateWallet');
const Settings = require('../config/settings');
const router = express.Router();

router.use(authMiddleware);

router.post('/', async (req,res)=>{
    try {
        const store = await Store.create({name: req.name, category: req.category, address: req.address});
        return res.send({store});
    } catch (error) {
        return res.status(400).send({error:'Não foi possivel processar a requisição'});
    }
});

router.get('/',async (req,res)=>{
    try {
        const stores = await Store.find();
        return res.send(stores);
    } catch (error) {
        return res.status(400).send({error:'Não foi possivel processar a requisição'});
    }

});


module.exports = app => app.use(`${Settings.path}/stores`, router);
