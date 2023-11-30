// Faça um programa que receba dois números e retorne o maior deles.

function compararNumeros(number1, number2) {
  if (number1 > number2) {
    return `O primeiro número passado ${number1} é o maior entre eles.`
  } else if (number2 > number1) {
    return `O segundo número passado ${number2} é o maior entre eles.`
  } else {
    return "Nenhum dos numeros digitados é maior que o outro."
  }
}
console.log(compararNumeros(30, 30))
