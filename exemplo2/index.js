// importando um unico recurso
//import soma from './modulos/funcoes.mjs';
// ----------------------------------------------------
// importando varios recursos
import { soma, multiplica, subtrai, divide } from "./modulos/funcoes.mjs";

let resultadosoma = soma(10,50);

 let resultadomultiplica = multiplica(2,10);

let resultadodivide = divide(6,2);

let resultadosubtrai = subtrai( 25, 5);

console.log(`Soma: `,resultadosoma);

console.log(`Subtração: `,resultadosubtrai);

console.log(`Divisão: `,resultadodivide);

console.log(`Multiplicação: `,resultadomultiplica);

