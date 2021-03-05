const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastro', 'root', 'Dev123000', {
    host: 'localhost',
    dialect: 'mysql'
})

// Models
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
})
//Postagem.sync({force: true})

// Sequelize, MySQL, Handlebars, express, node, body-parser

const Usuarios = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
})
//Usuarios.sync({force: true})

// Inserindo dados
Postagem.create({
    titulo: "Teste 1",
    conteudo: "Teste de conteudo 1"
})

Usuarios.create({
    nome: 'Diogo Teste',
    sobrenome: 'Testado',
    idade: '22',
    email: 'teste@teste.com'
})