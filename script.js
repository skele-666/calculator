// Math Operator Functions
function add(...numbers) {
    return numbers.reduce((sum, num) => sum + num, 0);
}

function subtract(...numbers) {
    return numbers.reduce((sum, num) => sum - num);
}

function multiply(...numbers) {
    return numbers.reduce((sum, num) => sum * num);
}

function divide(...numbers) {
    return numbers.reduce((sum, num) => sum / num);
}

// Calc display variables
const sumDisplay = document.querySelector('.sum');
let currentInput = '';
let num1 = null;
let num2 = null;
let operator = null;  // The variable that will change based on what button is clicked and impact the operate() function
let displayNumbers = [];


// Event listeners
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        displayNumbers.push(e.target.id);
        console.log(displayNumbers);
        makeCalcWork(displayNumbers);
    });
});

/* Array.from(operators).forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.id === 'add') operator = 'add';
        if (e.target.id === 'sub') operator = 'subtract';
        if (e.target.id === 'mul') operator = 'multiply';
        if (e.target.id === 'div') operator = 'divide';

        operate(operator, num1, num2);
    });
}); */

const operators = document.querySelectorAll('.operator');
operators.forEach(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.id;
    });
});

function operate(op, ...numbers) {
    let result;
    if (op === 'add') {
        result = add(...numbers);
    } else if (op === 'subtract') {
        result = subtract(...numbers);
    } else if (op === 'multiply') {
        result = multiply(...numbers);
    } else if (op === 'divide') {
        divide(...numbers);
    }

    sumDisplay.textContent = result;
    return result;
}


// uhh make it work baby
let lastElement;
let secondLastElement
function makeCalcWork(arr) {
    // Access the last element
    lastElement = arr[arr.length - 1];
    // Access the second last element (if exists)
    secondLastElement = arr.length > 1 ? arr[arr.length - 2] : undefined;
    console.log(lastElement);
    console.log(secondLastElement);

    sumDisplay.textContent = lastElement;


    // Check if the last element is an operator

}


// makeCalcWork(displayNumbers);

// Clear button
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', (e) => {
    result = 0;
    displayNumbers = [];
    sumDisplay.textContent = result;
    return result;
});