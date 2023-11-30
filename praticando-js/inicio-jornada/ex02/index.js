
// const sum = function(n1, n2) {
//     let total = n1 + n2;
//     return total
// };

// let n1 = 34;
// let n2 = 25;

// console.log(`n1 é ${n1}`);
// console.log(`n2 é ${n2}`);
// console.log(`A soma é  ${sum(n1, n2)}`);

// function fazerSuco(fruta1, fruta2) {
//     return fruta1 + fruta2;
// };

// const copo = fazerSuco("banana", "maça");
// console.log(copo);

// let subject = 'create video'
// function createThink(subject) {
//     subject = 'study'
//     return subject
// }

// console.log(subject);
// console.log(createThink(subject));

// function sayMyName(name) {
//     console.log('antes da callback')
//     name()
//     console.log('dps da callback')
// }

// sayMyName(
//     ()=>{
//         console.log('estou em uma callback')
//     }
// )

// function Person(name) {
//     this.name = name
//     this.walk = function() {
//         return this.name + ' está andando'
//     }
// }

// const mayk = new Person("mayk")
// const joao = new Person("joão")
// console.log(mayk.walk())
// console.log(joao.walk())

// let techs = ["html", "css", "js"]

// techs.push('React') // adiciona um novo item ao array no final
// techs.unshift('sql') // adiciona no inicio
// // techs.pop() // elimina o do final, se colocar mais de 1 cez, irá remover o outro q está no final
// // techs.shift() // tira o do começo
// // console.log(techs.slice(1, 3)) // para pegar algum item do array, ou seja, vamos pecar 'css' e 'js' (vai começar de qual, conto as casas pra escolher o ultimo para pegar)
// // techs.splice(1, 1)  //tira 1 ou mais elementos de qualquer lugar do array
// let index = techs.indexOf('sql') //encontrar a posição de um elemento do array
// techs.splice(index, 2) // usa com o de cima quando achar o elemento, para remove-lo
// console.log(techs)

//  name = new String('Mayk')  // como usar o New, e pra q serve, ele serve para criar um novo objeto.
// name.surName = 'Brito'
// let age = new Number(23)
// console.log(name.surName, age)
// let date = new Date('2020-12-01')   //.__proto__, para acessar o prototype de qualquer array,variável.
// console.log(date.__proto__)

// const person = { 
//     name: 'mayk',
//     age: '23',
// }                       // usar o delete para tirar alguma propriedade de person
// delete person.age
// console.log(person)  

// condição 1 ou se n o 2  condition ? value1 : value2
let pao = true;
let queijo = false;

const niceBreakFast = pao && queijo? 'Café top' : 'Café ruim';
                       // ||                          
console.log(niceBreakFast)