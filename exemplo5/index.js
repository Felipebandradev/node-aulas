import chalk from "chalk"; // inpotação do módulo/pacote intalado

console.log("Gerenciamento de pacotes");
let aluno = "Moura cartas";
let idade = 8 ;

if (idade >= 18 && idade < 60) {
    console.log(`${chalk.bgMagenta(aluno)} é ${chalk.bgBlueBright("Maior de idade")}`);
} else if ( idade >= 60) {
    console.log(`${chalk.bgMagenta(aluno)} é ${chalk.bgGreenBright("Idoso")}`);
} else {
    console.log(`${chalk.bgMagenta(aluno)} é ${chalk.red.bgRedBright("Menor de idade")}`);
}
