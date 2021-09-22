const express =  require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors'); 

const app = express();
const corsOptions = {
    origin:"*",
    optionsSuccessStatus: 200,
    methods: ['GET', 'POST', 'PUT', 'DELETE']
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));  

require('./controllers/accountController')(app);
require('./controllers/authController')(app);
require('./controllers/dashboardController')(app);
require('./controllers/storesController')(app);
require('./controllers/walletController')(app);

app.listen(process.env.PORT||5000);

module.exports = app;