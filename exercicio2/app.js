import  express  from "express";

const  app = express();

app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('paginas/index');
});


app.use((req,res) =>{
    // res.writeHead(404);
    res.render('paginas/404');
})




app.listen(8080, ()=> {
    console.log('Servidor Funcionando com sucesso')
})