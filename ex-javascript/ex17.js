// Um funcionário irá receber um aumento de acordo com o seu plano de
// trabalho, de acordo com a tabela abaixo:
//
// Plano Aumento
//  ________
// | A |10% |
// | B |15% |   *tabela*
// | C |20% |
// ----------
// Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
// novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido.





function SalaryPlan(salary, plan) {
    switch(plan) {
        case 'A':
            return salary + (salary * (10 / salary));
            
        case 'B':
            return salary + (salary * (15 / salary));

        case 'C':
            return salary + (salary * (20 / salary));

        default:
            return 'Salário ou plano não encontrado'
    }
}
console.log(SalaryPlan(2000, 'C'))