const express = require('express');
const authMiddleware = require('../middleware/auth');
const User = require('../models/user');
const Balance = require('../models/balance');
const Wallet = require('../models/wallet');
const Settings = require('../config/settings');
const router = express.Router();

router.use(authMiddleware);

router.get('/', async (req, res) =>{
    try {
        const userId = req.userId;
        const user = await User.findOne({_id:userId});
        const balance = await Balance.find({_id:id, userId:userId});
      
        return res.json({
            user: {
                name: user.name,
                email: user.email
            },
            wallet: {
                balance: balance.value
            }
        });
        
    } catch (error) {
        return res.status(500).send({error:'Não foi possivel processar a requisição'});
    }
   
});

 module.exports = app => app.use(`${Settings.path}/dashboard`, router);
