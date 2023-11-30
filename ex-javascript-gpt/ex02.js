// Faça um programa que calcule a média aritmética de um conjunto de números.

function mediaAritmética(divisor) {
  let numbers = [20, 5, 30, 40, 50]

  const resultado = numbers.reduce(
    (acumulador, valorAtual) => acumulador + valorAtual,
    0
  )
  return resultado / divisor
}

console.log(mediaAritmética(9))
