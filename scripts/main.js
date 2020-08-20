function add (a,b) {return a+b};

function subtract (a,b) {return a-b};

function multiply (a,b) {return a*b};

function divide (a,b) {return a/b};

function modulo (a,b) {return a%b};

function calculate (a, op, b) { return a + op + b};

document.addEventListener('click', (e) => {
    const input = document.querySelector(`.value[id='${e.target.id}']`).innerHTML;
    console.log(input);

    // take in multiple button clicks as array elements, then join to a string, then convert to an integer

    // the following variable assignment doesn't register because it follows the `input` variable
    // try setting these as `function input1()`, `function operand()`, and `function input2()'
    const operand = document.querySelector(`.operator[id='${e.target.id}']`).innerHTML;
    console.log(operand);

    // tain in multiple button clicks as array elements, thenn join to a string, then conver to an integer

    // create a `calculate()` function so that `input`, `operand` and `input2` are put into the calculuation
});

button[class='value'].addEventListener('click', (e) => {
    // input .innerHTML to an array and conver to a string, then convert to a number (`return +input1`)
});button[class='operator'].addEventListener('click', (e) => {
    // input .innerHTML to `const operand`
});
button[class='value'].addEventListener('click', (e) => {
    // input .innerHTML to an array and conver to a string, then convert to a number (`return +input2`)
});
button[id='calculate'].addEventListener('click', calculate(input1, operand, input2));