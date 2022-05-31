const inputDisplay = document.querySelector('#input');

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

function operate(operator, x , y){
    switch (operator) {
        case '+':
            add(x,y);
            break;
        case '-':
            subtract(x,y);
            break;
        case '*':
            multiply(x,y);
            break;
        case '/':
            divide(x,y);
            break;
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

const numButtons = document.querySelectorAll('.num');
numButtons.forEach(btn => btn.addEventListener('click' , () => {displayNum(btn.textContent)}))
