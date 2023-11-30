/* Crie um algoritmo que transforme as notas do sistema numérico para sistemas de notas em caracteres tipo A B C */


let aluno = 'Gabriel';
let nota = 100;
let notaA =  nota >= 90 && nota <= 100;
let notaB =  nota >= 80 && nota <= 89;
let notaC =  nota >= 70 && nota <= 79;
let notaD =  nota >= 60 && nota <= 69;
let notaF =  nota < 60 && nota > 0;
let notaFinal;

if (notaA) {
     notaFinal = 'A'
} else if(notaB){
     notaFinal = 'B'
} else if(notaC){
     notaFinal = 'C'
}else if(notaD) {
     notaFinal = 'D'
} else if(notaF){
     notaFinal = 'F'
} else {
    notaFinal = 'Nota invalida'
}

console.log(notaFinal)