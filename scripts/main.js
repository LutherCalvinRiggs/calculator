let num = '', num1 = 0, num2 = 0, operand, operand1, result = 0; 

const output = document.getElementById('output');
const resultLED = document.getElementById('result-ind');
const moduloLED = document.getElementById('modulo-ind');
const divideLED = document.getElementById('division-ind');
const multiplyLED = document.getElementById('multiplication-ind');
const subtractLED = document.getElementById('subtraction-ind');
const addLED = document.getElementById('addition-ind');
const clearLED = document.getElementById('clear-ind');

function resetLED() {
    clearLED.style.color = 'black';
    resultLED.style.color = 'inherit';
    moduloLED.style.color = 'inherit';
    divideLED.style.color = 'inherit';
    multiplyLED.style.color = 'inherit';
    subtractLED.style.color = 'inherit';
    addLED.style.color = 'inherit';
}

function operatorLED() {
    if (operand === '+') {
        addLED.style.color = 'black';
    } else if (operand === '-') {
        subtractLED.style.color = 'black';
    } else if (operand === '*') {
        multiplyLED.style.color = 'black';
    } else if (operand === '/') {
        divideLED.style.color = 'black';
    } else if (operand === '%') {
        moduloLED.style.color = 'black';
    };
}

function inputLED() {
    clearLED.style.color = 'inherit';
    resultLED.style.color = 'inherit';
    moduloLED.style.color = 'inherit';
    divideLED.style.color = 'inherit';
    multiplyLED.style.color = 'inherit';
    subtractLED.style.color = 'inherit';
    addLED.style.color = 'inherit';
}

function calculate(num1, num2, operand) {
    resultLED.style.color = 'black';
    if (operand === '+') {
        result = num1 + num2;
        output.innerHTML = Math.round(result*100000000)/100000000;
    } else if (operand === '-') {
        result = num1 - num2;
        output.innerHTML = Math.round(result*100000000)/100000000;
    } else if (operand === '*') {
        result = num1 * num2;
        output.innerHTML = Math.round(result*100000000)/100000000;
    } else if (operand === '/') {
        if (num2 === 0){
            output.innerHTML = "Err: div/0";
        } else {
            result = num1 / num2;
            output.innerHTML = Math.round(result*100000000)/100000000;
        }
    } else if (operand === '%') {
        result = num1 % num2;
        output.innerHTML = Math.round(result*100000000)/100000000;
    }
    return result;
}

function resetVariables() {
    num = '';
    num1 = 0;
    num2 = 0;
}


document.addEventListener('click', (e) => {
    const input = document.querySelector(`.key[id='${e.target.id}']`);

    if (input.id === 'clear') {
        resetVariables();
        result = 0;
        output.innerHTML = 0;
        resetLED();
    }

    if (input.classList.contains('value') && num.length < 10) {
        inputLED();
        num += input.innerHTML;
        output.innerHTML = num;
        console.log(num);
    }

    if (input.classList.contains('decimal') && num.length < 10) {
        inputLED();
        if (num.includes('.') === false){
            num += input.innerHTML;
            output.innerHTML = num;
            console.log(num);
        }
    }

    if (input.classList.contains('backspace')) {
        inputLED();
        numBackspace = num.replace(num.length, '');
        num = numBackspace;
        output.innerHTML = num;
        numBackspace = '';
    }

    if (input.classList.contains('operator')) {
        operand = input.innerHTML;
        if (num1 === 0) {
            num1 = +num + result;
            num = '';
            operand1 = operand;
        } else {
            num2 = +num;
            calculate(num1, num2, operand1).toPrecision(8);
            operand1 = operand;
            num = '';
            num1 = result;
            num2 = 0;
        };
        operatorLED();
        return num1;
    };

    if (input.id === 'calculate') {
        num2 = +num;
        calculate(num1, num2, operand).toPrecision(8);
        resetVariables();
    }
    
});
