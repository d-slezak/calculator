const inputDisplay = document.querySelector('#input');
const equationDisplay = document.querySelector('#equation');

let operator = "";
let firstNum = 0;

function add(x, y){
    return x + y;
}

function subtract(x, y){
    return x - y;
}

function multiply(x, y){
    return x * y;
}

function divide(x,y){
    return x / y;
}

function operate(x , y){
    switch (operator) {
        case '+':
            return add(x,y);
        case '-':
            return subtract(x,y);
        case 'x':
            return multiply(x,y);
        case '/':
            return divide(x,y);
        default:
            console.log(operator)
    }
}

function displayNum(x)
{
    if(inputDisplay.textContent == 0)
    {
        inputDisplay.textContent = "";
    }
    inputDisplay.textContent += x;
}

function chooseOperator(newOperator)
{

    if (equationDisplay.textContent == "") {
        firstNum = inputDisplay.textContent;
    }
    else {
        firstNum = operate(Number(firstNum), Number(inputDisplay.textContent));
    }

    operator = newOperator;

    equationDisplay.textContent = `${firstNum} ${operator}`;
    inputDisplay.textContent = 0;
}

const numButtons = document.querySelectorAll('.num');
numButtons.forEach(btn => btn.addEventListener('click' , () => {displayNum(btn.textContent)}));

const operatorButtons = document.querySelectorAll('.operator');
operatorButtons.forEach(btn => btn.addEventListener('click', () => chooseOperator(btn.textContent)));
