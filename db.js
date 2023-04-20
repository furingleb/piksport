const {Sequelize} = require('sequelize');

module.exports = new Sequelize(
    'piksport_tgbot',
    'mariam',
    'bykXhNtj5eSF',
    {
        host: '85.119.146.37',
        port: '6432',
        dialect: 'postgres'
    }
)
