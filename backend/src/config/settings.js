require('dotenv').config();
module.exports = 
{
    path: process.env.PATH_API || '/api',
    system: process.env.NAME_SYSTEM,
    connectionDb: process.env.DB_HOST,
    secret: process.env.SECRET
}