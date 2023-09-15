import express from 'express';

// armazenando o expresse em uma variavel. Ao invés de chamar express().get,usaremos app.get
const app = express();

// Configurar a view engine com EJS
app.set('view engine', 'ejs');

// configurar as rotas de acesso

// raiz

app.get('/',(req,res) => {
   
    // res.send('Bem-vindo ao servidor ExpressJs.'); 
    const bandas = ['Justin Bieber','Ozzy','Bea Duarte','Lourandes','Calypso','Marina Sena','Lou Garcia'];
    res.render('paginas/index', {bandas});

});
app.get('/sobre',(req,res) => {
   
    // res.send('Bem-vindo ao servidor ExpressJs.'); 
    
    res.render('paginas/sobre');

});
app.get('/contato',(req,res) => {
   
    // res.send('Bem-vindo ao servidor ExpressJs.'); 
    
    res.render('paginas/contato');

});



// Iniciar o Servidor e escolher a porta 
app.listen(3000, ()=>{
    console.log('Servidor ExpressJs rodando Normalmente :)');
});