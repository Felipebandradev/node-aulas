let aluno = "Akali";

let nota1 = 10;

let nota2 = 8;

let media = ( nota1 + nota2 ) / 2;

console.log(media);
console.log("---------------------------------------");

let dados = {
    nome: "Felipe Barbosa", 
    idade: 19,
    signo: "Câncer"
};

console.log(dados.signo);

console.table(dados);


console.log("---------------------------------------");

if (media >= 7) {
    console.log(`o aluno(a) está ${aluno} Aprovado :) `);
} else {
    console.log(`o aluno(a) está ${aluno} Reprovado :( `);
}

