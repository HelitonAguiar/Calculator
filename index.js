// ==================== Calculadora ======================= //

"use strict"

const calc = require('./calcUtils');

const number1 = -10;
const number2 = 5;

const resultSum = calc.sum(number1,number2);
console.log({resultSum});

const resultMultiplicacao = calc.multiplication(number1,number2);
console.log({resultMultiplicacao});

const resultDivisao = calc.division(number1,number2);
console.log({resultDivisao});

const resultSubtracao = calc.subtraction(number1,number2);
console.log({resultSubtracao});

// ******************************************************* //