// Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
// e o resto da divisão destes dois valores.

function divisaoDosValores(n1, n2 ) {

    console.log ("resultado: " + n1 / n2);
    console.log("resto: " + n1 % n2); 

}
divisaoDosValores(30, 5);

function divisao (dividendo, divisor) {
    console.log("Resultado: " + Math.floor(dividendo/divisor));
    console.log(`Resto: ${dividendo % divisor}`)
}

divisao(11, 4)