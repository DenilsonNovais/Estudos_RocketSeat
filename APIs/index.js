// Chamando modulo express e guardando na cons express
const express = require('express');
const req = require('express/lib/request');
// Guardando o express inicializado na const app
const app = express(); 
/* 
    Chamando o metodo do express 'listen' que fica ouvindo o navegador, e quando for entrar na porta que foi passada por parametro ('3000'), ele ira jogar o que quisermos lá no navegador 
*/
app.listen('3000');

// Middleware
app.use(express.json());

// let autor = "Denilson";

// Passando rotas para a API, passando uma resposta ao navegador com get
// app.route('/').get( (req, res) => res.send(autor) );

// Passando uma requisição com Post e mostrando no console o corpo da requisição
// app.route('/').post( (req,res) => res.send( req.body ));

// Rota put
/* app.route('/').put( (req,res) => {
    autor = req.body.autor
    res.send(autor)
}); */

// verbo Delete
app.route('/:id').delete( (req, res) => {
    res.send(req.params.id);
} );



