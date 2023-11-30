// Faça um algoritmo que calcule o fatorial de um número.

function factorial(num) {
    if (num < 0){
       return -1; 
    }else if(num == 0) {
    return 1
} else {
    return(num * factorial(num-1));
}
}

console.log(factorial(10))


function factorial2(num) {
    let result = num;
    if (num === 0 || num === 1) {
        return 1
    }
    while (num > 1) {
        num--;
        result *= num;
    }
    return result
}

console.log(factorial2(5))


function factorial3(num) {
    if (num === 0 || num === 1) 
        return 1
    
    for(let i = num - 1; i >= 1; i--) {
        num  *= i
    }
    return num;
}

console.log(factorial3(4))