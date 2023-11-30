// Faça um programa que receba um número inteiro e verifique se ele é primo.

//correção do erro

function isPrime(number) {
  if (number <= 1) {
    return false
  } else if (number <= 3) {
    return true
  } else if (number % 2 === 0 || number % 3 === 0) {
    return false
  }

  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false
    }
  }
  return true
}

const number = 503
if (isPrime(number)) {
  console.log(`${number} é um número primo`)
} else {
  console.log(`${number} não é um número primo`)
}

//falha no meu código

// function compararNumber(number) {
//   if (number / number == number && number / 1 == number) {
//     return "esse número é primo"
//   } else {
//     return "esse número não é primo"
//   }
// }
// console.log(compararNumber(1))
