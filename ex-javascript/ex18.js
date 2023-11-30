// Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
// switch. Crie um case default que escreva ‘Número fora do intervalo.’

function contadorDeNumero(number) {
    switch(number) {
        case 0:
            return 'zero'
        case 1:
            return 'um'
        case 2:
            return 'dois'
        case 3:
            return 'três'
        case 4:
            return 'quatro'
        case 5:
            return 'cinco'
        case 6:
            return 'seis'
        case 7:
            return 'sete'
        case 8:
            return 'oito'
        case 9:
            return 'nove'
        case 10:
            return 'dez'
        default:
            return 'Número não identificado ou não é um número'
    }
}

console.log(contadorDeNumero(0))
console.log(contadorDeNumero(1))
console.log(contadorDeNumero(2))
console.log(contadorDeNumero(3))
console.log(contadorDeNumero(4))
console.log(contadorDeNumero(5))
console.log(contadorDeNumero(6))
console.log(contadorDeNumero(7))
console.log(contadorDeNumero(8))
console.log(contadorDeNumero(9))
console.log(contadorDeNumero(10))
console.log(contadorDeNumero(11))