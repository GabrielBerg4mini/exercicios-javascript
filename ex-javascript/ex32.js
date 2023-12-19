// Construir um algoritmo que calcule a média aritmética dos valores de um vetor de inteiros.
const array = [2, 8, 9, 10, 20]
const mediaAritmetica =
  array.reduce((result, value) => {
    return result + value
  }, 0) / array.length

console.log(mediaAritmetica)

//forma do professor

function mediaVetor(vetor) {
  let soma = 0
  for (let i = 0; i < vetor.length; i++) {
    soma += vetor[i]
  }

  return soma / vetor.length
}

vetor = [1, 2, 3, 4, 5]

console.log(mediaVetor(vetor))
