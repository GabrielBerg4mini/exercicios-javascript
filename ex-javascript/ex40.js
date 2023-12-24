// Faça uma função que receba como parâmetro um vetor de notas e mostre os conceitos de cada uma de
// modo que de 0,0 a 4,9 seja atribuído o conceito D, de 5,0 a 6,9 seja atribuído o conceito C, de 7,0 a 8,9 o
// conceito B e de 9,0 a 10,0 o conceito A.

const conceitosNotas = (notas) => {
  if (notas.length === 0) {
    console.log("O vetor de notas está vazio.")
    return
  }

  for (let i = 0; i < notas.length; i++) {
    const nota = notas[i]

    if (nota >= 0 && nota <= 4.9) console.log(`Nota ${nota}: Conceito D`)
    else if (nota >= 5.0 && nota <= 6.9) console.log(`Nota ${nota}: Conceito C`)
    else if (nota >= 7.0 && nota <= 8.9) console.log(`Nota ${nota}: Conceito B`)
    else if (nota >= 9.0 && nota <= 10.0)
      console.log(`Nota ${nota}: Conceito A`)
    else console.log(`Nota ${nota}: Fora da faixa válida`)
  }
}

conceitosNotas([0.0, 2.2, 4.9, 5.0, 6.9, 7.0, 8.9, 9.0, 10.0])
