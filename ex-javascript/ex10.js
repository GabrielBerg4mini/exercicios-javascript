// Crie uma função que verifica se um número inteiro passado como parâmetro é divisível por 3 e retorne true
// ou false.


function divisivelPor3(n1) {
    if (n1 % 3 == 0) {
        return true
    } else {
        return false
    }
}
divisivelPor3()
console.log(divisivelPor3(1))
console.log(divisivelPor3(3))
console.log(divisivelPor3(5))