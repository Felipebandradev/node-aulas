import fetch from "node-fetch";

let url = 'https://jsonplaceholder.typicode.com/posts/10';

// 1) Conectando com o endpoint da API(url)
fetch(url)
// 2) Retornando a resposta com JSON
    .then(resposta => resposta.json())
//3) Exibindo no consloe os dados obtidos na API
    .then(dados => console.log(dados));