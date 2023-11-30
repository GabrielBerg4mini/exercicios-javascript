//ajustando meu conhecimento em condicionais
// if...else
// let temperature = 30.5;
// let highTemperature = temperature >= 37.5;
// let mediumTemperature = temperature <= 38.5 && temperature >= 36.5;

// if (highTemperature) {
//     console.log('essa pessoa está com febre alta');
// }else if(mediumTemperature) {
//     console.log('febre moderada');
// }
//  else {
//     console.log('essa pessoa está com temperatura normal');
// };

//switch

// let expression = ''

// switch(expression) {
//     case 'a':
//         // código aqui
//         console.log('a')
//         break
//     case 'b': 
//         //código para expression b  
//         console.log('b')  
//         break
//     default:
//         //vai parar a condicional
//         console.log('default')
//         break
// }

// function calculate(number1, operator, number2) {
//     let result = 0;

//     switch(operator) {
//         case '+':
//             result = number1 + number2;
//             break
//         case '-':
//             result = number1 - number2;
//             break
//         case '*':
//             result = number1 * number2;
//             break
//         case '/':
//             result = number1 / number2;
//             break
//         default:
//             console.log('Não é um número');
//             break
//     }
//     return result
// }

// console.log(calculate(4, '%', 8))


// throw = significa disparar-lançar

// function sayMyName(name = '') {
//     if (name === '') {
//         // throw new Error('nome é necessário')  , outra forma de fazer o disparo 
//         throw 'Nome é obrigatório'
//     }
     

//     console.log(name)
// }

// // try = tentar/testar...catch = pegar
// try {
//     sayMyName('Mayk')
// } catch(e) {
//     console.log(e)
// }

// console.log('Após o try/catch')

//for 
// break para a exç do loop
// continue - pula a exç do momento

// for(let i = 10; i > 0; i--) {
//     if(i === 5) {
//         continue;
//     }
//     console.log(i)
// }

//while
// let i = 0;
// while (i < 10) {
//     console.log(i)

//     i++
// }

//for...of

// let name = 'mayk'
// let names = [ 'joão', 'marco', 'pedro']

// for(let name of names) {
//     console.log(name )
// }

//for..in

// let person = { 
//     name:'Joao',
//     age: 30,
//     weight: 68.6
// }

// for(let property in person) {
//     console.log(property)
//     console.log(person[property])
// }