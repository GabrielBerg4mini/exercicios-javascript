// Faça um programa que receba três números e retorne o maior deles.

let verificarNumbers = (number1, number2, number3) => {
  if (number1 > number2 && number1 > number3) {
    return `O número digitado ${number1} é o maior entre eles.`
  } else if (number2 > number1 && number2 > number3) {
    return `O número digitado ${number2} é o maior entre eles.`
  } else if (number3 > number1) {
    return `O número digitado ${number3} é o maior entre eles.`
  } else {
    return "Todo os números digitados são iguais."
  }
}

console.log(verificarNumbers(50, 50, 50))
