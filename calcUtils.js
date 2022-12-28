// =================== Soma =============================== //
// ******************************************************** //
function sum(number1,number2){
    const soma = number1 + number2;
    return soma;
}

// =================== Multiplicação ====================== //
// ******************************************************** //
function multiplication(number1,number2){
    const multiplicacao = number1*number2;
    return multiplicacao;
}

// =================== Divisão ============================ //
// ******************************************************** //

function division(number1,number2){
    const divisao = number1/number2;
    return divisao;
}

// =================== Subtração ========================== //
// ******************************************************** //

function subtraction(number1,number2){
    const subtracao = number1 - number2;
    return subtracao;
}

module.exports = {
    sum,
    multiplication,
    division,
    subtraction
}