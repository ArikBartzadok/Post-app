const db = require('./DB')

const Post = db.sequelize.define('postagens', {
    titulo: {
        type: db.Sequelize.STRING
    },
    conteudo: {
        type: db.Sequelize.STRING
    }
})

//post.sync({force: true})

module.exports = Post