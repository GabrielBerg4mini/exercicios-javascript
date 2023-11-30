// Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
// primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
// retornará o valor da aplicação sob o regime de juros compostos.


function jurosSimples(ini, taxa, temp) {
    const valorFinal =  ini + (ini * taxa * temp);
    return valorFinal
}

const valorPagar = jurosSimples(1200, 0.02, 4);
console.log(valorPagar)

function jurosComposto(ini, taxa, temp) {
    const valorComposto = ini * (1 + taxa) ** temp;
    return valorComposto
}

const valorCompostoPagar = jurosComposto(1200, 0.02, 4);
console.log(valorCompostoPagar);


// Resposta do professor

function jurosSimples (capitalInicial, taxa, tempo) {
    return capitalInicial + (capitalInicial * taxa * tempo)
}

function jurosCompostos (capitalInicial, taxa, tempo) {
    return capitalInicial * (1 + taxa) ** tempo
}

console.log(jurosSimples(100, 10/100, 2));
console.log(jurosCompostos(100, 10/100, 2));