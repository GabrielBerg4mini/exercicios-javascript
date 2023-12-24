// Crie uma função que receba dois vetores de igual tamanho e troque seus elementos de modo que o
// primeiro elemento do vetorA passe a ser o primeiro elemento do vetorB e vice versa e assim sucessivamente.
// Faça a troca sem utilizar uma variável auxiliar.

const trocarVetores = (vetor1, vetor2) => {
  if (vetor1.length !== vetor2.length) {
    console.log("Os vetores não tem o mesmo tamanho")
    return
  }

  for (let i = 0; i < vetor1.length; i++) {
    ;[vetor1[i], vetor2[i]] = [vetor2[i], vetor1[i]]
  }

  console.log("Novo vetorA: " + vetor1)
  console.log("Novo VetorB: " + vetor2)
}

let vetorA = [1, 2, 3, 4]
let vetorB = [5, 6, 7, 8]

console.log("Antigo vetorA: " + vetorA)
console.log("Antigo vetorB: " + vetorB)

trocarVetores(vetorA, vetorB)
