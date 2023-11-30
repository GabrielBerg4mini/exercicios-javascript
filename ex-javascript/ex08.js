// Pedro joga N jogos de basquete por temporada. Para saber como ele está progredindo, ele mantém
// registro de todas as pontuações feitas por jogo. Após cada jogo ele anota no novo valor e confere se o
// mesmo é maior ou menor que seu melhor e pior desempenho. Dada uma lista string = “pontuação1 pontuação2
// pontuação3 etc..”, escreva uma função que ao recebê-la irá comparar os valores um a um e irá retornar um
// vetor com o número de vezes que ele bateu seu recorde de maior número de pontos e quando fez seu pior
// jogo. (Número do pior jogo).
// Obs.: O primeiro jogo não conta como novo recorde do melhor.
// Exemplo:
// String: “10 20 20 8 25 3 0 30 1”
// Retorno: [3, 7] (Significa que ele bateu três vezes seu recorde de melhor pontuação e a pior pontuação
// aconteceu no sétimo jogo.)

const totalPontuacoes = "10, 20, 40, 20, 4, 50, 20, 2, 10, 5, 50";

function comparacaoPontuacao (totalPontuacoes) {
    let pontuacao = totalPontuacoes.split(", ");
    let qtdQuebraDeRecords = 0;
    let piorGame = 0;
    let maiorPontuacao = pontuacao[0];
    let menorPontuacao = pontuacao[0];

    for(let i = 1; i < pontuacao.length; i++) {
        if (pontuacao[i] > maiorPontuacao) {
            maiorPontuacao = pontuacao[i];
            qtdQuebraDeRecords++
        } else if (pontuacao[i] < menorPontuacao) {
            menorPontuacao = pontuacao[i];
            piorGame = i+1;
        }
    }
    return [qtdQuebraDeRecords, piorGame];
}

console.log(comparacaoPontuacao(totalPontuacoes));






// minha tentativa.
// const pontucao = "10, 20, 40, 20, 4, 50, 20, 2"; 

// function comparacaoPontuacao(pontuacao) {
//     for(let i = pontuacao; i < pontuacao.length; i++) {
//         return i;
//     }

// }

//reposta do professor 

// let stringPontuacoes = "30, 40, 20, 4, 51, 25, 42, 38, 56, 0"
 
 
// function avaliaPontuacoes (stringPontuacoes) {
//     let pontuacoes = stringPontuacoes.split(", ")
//     let qtdQuebraDeRecords = 0
//     let piorJogo = 1
//     let maiorPontuacao = pontuacoes[0]
//     let menorPontuacao = pontuacoes[0]

//     for (let i = 1; i < pontuacoes.length; i++) {
//         if(pontuacoes[i] > maiorPontuacao) {
//             maiorPontuacao = pontuacoes[i]
//             qtdQuebraDeRecords++
//         }else if (pontuacoes[i] < menorPontuacao) {
//             menorPontuacao = pontuacoes[i]
//             piorJogo = i+1;
//         }
//     }
//     return [qtdQuebraDeRecords, piorJogo]
// }
 
// console.log(avaliaPontuacoes(stringPontuacoes))

// ## verbos 

// * recebe-la 
// * comparar 
// * retornar 

// ## Substantivos 

// * pontuações listadas
// * valor dos pontos
// * lista de jogos/pontuações
// * número dos pontos
// * vezes de jogos
// * recorde de pontuações 

// ## Pseudocódigo 

//     recebe o valor da string 

// pontuaçãoJosgos = input()

//     processo 

// pontuaçãoJogos > pontuaçãoJogos 
// guarda o valor de vezes 
// pontuaçãoJogs < pontuaçãoJogos 
// guarda o valor 

//     Retorna 

// maiorPontuação = pontuaçãoJogos > pontuaçãoJogos
// menorPontuação = pontuaçãoJogos < pontuaçãoJogos

