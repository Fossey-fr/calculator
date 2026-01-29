let firstNum;
let secondNum;
let operator;



function operate(firstNum, operator, secondNum) {
    switch (operator) {
        case "+":
            return add(firstNum, secondNum);
            break;
        case "-":
            return subtract(firstNum, secondNum);
            break;
        case "*":
            return multiply(firstNum, secondNum);
            break;
        case "/":
            return divide(firstNum, secondNum);
            break;
        default:
            console.log("An unexpected string was used as an operator in operate()");
    };
};

function add(a, b) {
    return a + b;
};

function subtract(a, b) {
    return a - b;
};

function multiply(a, b) {
    return a * b;
};

function divide(a, b) {
    return (a == 0 || b == 0) ? 0 : (a / b);
};