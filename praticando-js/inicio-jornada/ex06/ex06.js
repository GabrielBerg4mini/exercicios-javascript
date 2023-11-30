//forma do professor

function transformDeGree(degree) {
  const celsiusExists = degree.toUpperCase().includes("C");
  const fahrenheitExists = degree.toUpperCase().includes("F");

  //fluxo de erro
  if (!celsiusExists && !fahrenheitExists) {
    throw new Error("Grau não identificado");
  }

  //flux ideal, F -> C
  let updatedDegree = Number(degree.toUpperCase().replace("F", ""));
  let formula = fahrenheit => (fahrenheit - 32) * 5/9 // se tem apenas um argumento(parâmetro), pode tirar () na arrow function
  let degreeSign = 'C'

  //flux alternativo C -> F
  if(celsiusExists) {
    updatedDegree = Number(degree.toUpperCase().replace("C", ""));
    formula = celsius => celsius * 9/5 + 32
    degreeSign = 'F' 
  }


  return formula(updatedDegree) + degreeSign

}
  try {
    console.log(transformDeGree("10C"));
    console.log(transformDeGree("50F"))
    console.log(transformDeGree('52z'))

  } catch (error) {
    console.log(error.message);
  }


// Minha forma de resolver //
const celsius = "38.5";

function converterCelsius(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

converterCelsius();
console.log(`O valor em Fahrenheit é ${converterCelsius(celsius)}`);

const fahrenheit = "38.5";

function converterFahrenheit(fahrenheit) {
  let celsius = ((fahrenheit - 32) * 5) / 9;
  return celsius;
}

converterFahrenheit();
console.log(`o valor em Celsius é ${converterFahrenheit(fahrenheit)}`);
