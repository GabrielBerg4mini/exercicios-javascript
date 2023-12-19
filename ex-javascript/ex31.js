// Escrever um algoritmo que percorre um vetor de inteiros, conta quantos números negativos há nesse vetor
// e imprime a quantidade no console.

function quantosNegativos(arr) {
  let numerosNegativos = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      numerosNegativos++
    }
  }
  return numerosNegativos
}
console.log(quantosNegativos([1, -2, 4, -5, 20, -23, 10, -9, -8]))
