/*
  Crie um objeto que possuirá 2 propriedades, ambas do tipo array
            * receitas:[]
            * despesas:[]
Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma msg se a família está com saldo positivo ou negativo, seguido o valor do saldo

*/

let despesasDaFamilia = {
    receitas: [1200,103, 20.70, 928.25],
    despesas: [120.64, 100, 80.74, 560.25, 2000.32, 4000.23]
 }

 function sum(array) {
    let total = 0;

    for(let value of array) {      //função muito interessante de dar uma relembrada, para calcular o array.
        total += value
    }

    return total
 }

 function calculoDoSaldo() {
    const calculoReceitas = sum(despesasDaFamilia.receitas)
    const calculoDespesas = sum(despesasDaFamilia.despesas)

    const total = calculoReceitas - calculoDespesas
    const itsOk = total >= 0;
    let textoDoTotal = 'Negativo'

    if (itsOk) {
        textoDoTotal = 'Positivo'
    }

    console.log(`Seu saldo é ${textoDoTotal}: R$${total.toFixed(2)}`)
 }

 calculoDoSaldo()
