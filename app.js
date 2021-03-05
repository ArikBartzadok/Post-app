// https://www.youtube.com/watch?v=PiM-E4cDj0s&list=PLJ_KhUnlXUPtbtLwaxxUxHqvcNQndmI4B&index=26

// Dev123000 - MySQL Server password
const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')

const Post = require('./models/Postagem')

// Configurando o handlebars como o template engine
app.engine('handlebars', handlebars({
    defaultLayout: 'main',
    runtimeOptions: {
        allowProtoPropertiesByDefault: true,
        allowProtoMethodsByDefault: true,
    }
}))
app.set('view engine', 'handlebars')

//Configurando o body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// Rotas
app.get('/', function(req, res){
    Post.findAll().then(function(posts){
        res.render('home', {posts: posts})
    })
})

app.get('/cad', function(req, res){
    res.render('formulario')
})

app.post('/add', function(req, res){
    Post.create({
        titulo: req.body.titulo,
        conteudo: req.body.conteudo
    }).then(function(){
        res.redirect('/')
    }).catch(function(erro){
        res.send('Ocorreu algum erro na criação da postagem' + erro)
    })
})

app.get('/deletar/:id', function(req, res){
    Post.destroy({
        where: {
            'id': req.params.id
        }
    }).then(function(){
        res.send('Postagem deletada com sucesso!')
    }).catch(function(erro){
        res.send('Postagem não existe')
    })
})

app.listen(8080, function(){
    console.log('Hello, world!')
})