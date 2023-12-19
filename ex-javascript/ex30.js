// Escreva um algoritmo que percorre um vetor de inteiros e defina o maior e menor valor dentro do vetor

function maiorAndMenorVetor(arr) {
  const maiorValor = Math.max(...arr)
  const menorValor = Math.min(...arr)
  return [menorValor, maiorValor]
}
console.log(maiorAndMenorVetor([2, 1, 4, 2]))

// código do professor

function maiorMenor(vetor) {
  let maior
  let menor
  for (let i = 0; i < vetor.length; i++) {
    if (maior === undefined && menor === undefined) {
      maior = vetor[i]
      menor = vetor[i]
    } else {
      if (vetor[i] > maior) {
        maior = vetor[i]
      }
      if (vetor[i] < menor) {
        menor = vetor[i]
      }
    }
  }
  return [maior, menor]
}

vetor = [10, 5, 7, 3, 1, 3, 11, 20, 6, 9]

console.log(maiorMenor(vetor))

// outra ideia

Array.min = function (array) {
  return Math.min.apply(Math, array)
}
Array.max = function (array) {
  return Math.max.apply(Math, array)
}

var random = [2, 3, 1, 4, 6, 5]
console.log(Array.min(random), Array.max(random))
