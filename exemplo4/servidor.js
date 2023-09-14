import http from 'http';  // importando um módulo nativo http sendo um módulo nativo, ainda assim precisamos do package.json

import fs from 'fs/promises'; // file system : permite ao servidor acesso ao sistema de arquivos(módlo nativo)

// criando uma função que vai monitorar as requisições e respostas do servidor, recebe dois parâmetros requisição(req) e resposta(res//)

const monitor_requisicao = (req, res) => { // arrow funtion

    // Configurando o cabeçaçho da resposta para trabalhar com arquivos HTML e charset-utf-8
    res.writeHead(200,{"Content-Type":"text/html;charset=utf8"});

    // Avaliando a requisição ( a partir do link)
    switch (req.url) {
        case '/':

            // fs faz ocarregamento e leitura do arquivo 
            fs.readFile('paginas/index.html')
            //depois de pronto, envia o conteúdo como resposta
            .then(conteudo => res.end(conteudo));

            //res.end('Servidor Node Rodando no navegardor. Eu posso provar');
            // exibir index.html
            break;
        case '/sobre':
            fs.readFile('paginas/sobre.html')
            .then(conteudo => res.end(conteudo));

            //exibir sobre.html
            break;
        default:
                res.writeHead(404);
                fs.readFile('paginas/404.html')
                .then(conteudo => res.end(conteudo))
                // exibir 404.html
            break;
    }


};

// criando o servidor http e indicando a função de requisições
const servidor = http.createServer(monitor_requisicao);

// iniciando a escuta do servidor local na porta 8080
//servidor.listen(8080); // só esse trecho seria o suficiente, mas é importante rodar a menssagem para ter certeza que tudo deu certo
// porta 8080 ou 3000 ou pesquisar lista de portas de disponivel caso nenhuma das outras funcione
servidor.listen(8080,() =>{
    console.log("servidor node rodando normalmente.");
});