const Sequelize = require('sequelize')

// Conexão com o BD
const sequelize = new Sequelize('postapp', 'root', 'Dev123000', {
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}