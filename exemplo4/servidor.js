import http from 'http'; // importando um módulo nativo http sendo um módulo nativo, ainda assim precisamos do package.json

// criando uma função que vai monitorar as requisições e respostas do servidor, recebe dois parâmetros requisição(req) e resposta(res//)

const monitor_requisicao = (req, res) =>{
    // Configurando o cabeçaçho da resposta para trabalhar com arquivos HTML e charset-utf-8
    res.writeHead(200, {"Content-Type": "text/html; charset=utf8"});

    // Avaliando cada requisição (a partir do link)
    switch(req.url){
        case '/':
            // o carregamento e leitura do index.html
        break;

        case '/sobre':
            // o carregamento e leitura do sobre.html
        break;

        default:
            // o carregamento e leitura do 404.html
        break;
    }
}
