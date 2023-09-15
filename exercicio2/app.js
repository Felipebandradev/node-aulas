import http from 'http';
import  express  from "express";

const  app = express();

app.set('view engine', 'ejs')

const monitor_requisicao = (req, res) => { // arrow funtion

    // Configurando o cabeçaçho da resposta para trabalhar com arquivos HTML e charset-utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});
switch (req.url){
case '/':
app.get('/', (req, res) =>{
    res.render('paginas/index');
});

break;

default:
app.get('/404', (req,res) =>{
    res.writeHead(404);
    res.render('paginas/404');
})
break;
}

}

app.listen(8080, ()=> {
    console.log('Servidor Funcionando com sucesso')
})