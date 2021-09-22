const bitcoin = require('bitcoinjs-lib');

class GenerateWallet {

    static generate(){
        try {
            const keyPair = bitcoin.ECPair.makeRandom();
            const privateKey = keyPair.toWIF();
            const publicKey = keyPair.publicKey.toString('hex');

            return {
                publicKey:publicKey,
                privateKey:privateKey
            }
        } catch (error) {
            console.error('erro: erro em gerar a chave publica e privada na classe GenerateWallet no metodo generate');
        }
    }

    
      
};

module.exports = GenerateWallet;
