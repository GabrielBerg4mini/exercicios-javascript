// Crie duas funções que recebem dois parâmetros, um vetor com apenas valores numéricos e um número
// inteiro. Faça com que a primeira função retorne outro vetor que será resultado da multiplicação de cada
// elemento pelo número passado como parâmetro. A segunda função fará o mesmo da primeira se e somente se
// o valor do elemento for maior que 5.

const multiplicacaoDosValoresDoArray = (array, multiplicador) => {
  let dobro = []
  for (let i = 0; i < array.length; i++) {
    dobro.push(array[i] * multiplicador)
  }
  return dobro
}
console.log(multiplicacaoDosValoresDoArray([1, 2, 3, 4], 2))

//outra forma, mais legível
let numeros = [1, 2, 3, 4]
let multiplicador = 2
let dobro = numeros.map((number) => {
  return number * multiplicador
})
console.log(dobro)

const multiplicarApenasMaiorQue5 = (array, multiplicador) => {
  let resultado = []
  if (multiplicador >= 5) {
    for (let i = 0; i < array.length; i++) {
      resultado.push(array[i] * multiplicador)
    }
    return resultado
  } else {
    return "Para multiplicar o array, precisa ser maior que 5 o multiplicador"
  }
}
console.log(multiplicarApenasMaiorQue5([1, 2, 3, 4], 5))

//outra forma
let numeros2 = [1, 2, 3, 4]
let multiplicador2 = 5

let multiplicadorTeste = numeros2.map((number) => {
  if (multiplicador2 >= 5) {
    return number * multiplicador2
  }
})
console.log(multiplicadorTeste)

// forma professor
let vetor = [1, 2, 3, 4, 5]

function multiplicaVetor(vetor, multiplicador) {
  let vetorResultado = []
  vetor.forEach((elemento) => {
    vetorResultado.push(elemento * multiplicador)
  })

  return vetorResultado
}

console.log(multiplicaVetor(vetor, 3))
