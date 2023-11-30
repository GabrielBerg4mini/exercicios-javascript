// Ler um vetor de números inteiros e imprimir quantos são pares e quantos são ímpares.

function paresImpares(vetorNumeros) {
  let quantidadePares = 0
  let quantidadeImpares = 0

  for (let i = 0; i < vetorNumeros.length; i++) {
    if (vetorNumeros[i] % 2 === 0) {
      quantidadePares++
    } else {
      quantidadeImpares++
    }
  }
  console.log(`São ${quantidadePares} pares e ${quantidadeImpares} impares.`)
}

vetor = [1, 2, 3, 4, 5, 6, 7, 8, 13, 9, 10]
paresImpares(vetor)
