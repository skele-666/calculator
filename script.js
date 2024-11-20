// Operator functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

// Calc display variables
const sumDisplay = document.querySelector('.sum');
let operator = null;  // The variable that will change based on what button is clicked and impact the operate() function
let currentNumber = '';
let numberArray = []; // What will store all the numbers for an equation
let result = '';


// Event listeners
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        currentNumber += e.target.id;
        sumDisplay.textContent = currentNumber;
    });
});

const operators = document.querySelectorAll('.operator');
operators.forEach(button => {
    button.addEventListener('click', (e) => {
        operator = e.target.id;
        operate(operator, numberArray);
    });
});

const equals = document.getElementById('equals');
equals.addEventListener('click', () => {
    if (currentNumber) {
        numberArray.push(Number(currentNumber)); // Push current number to array
        currentNumber = ''; // Clear current number
    }
    operate(operator, numberArray);
    
    // Reset for the next calculation
    operator = null;
    numberArray = [result];
});

// Functions
function clear() {
    result = '';
    currentNumber = '';
    numberArray = [];
    sumDisplay.textContent = result;
}

function operate(op, arr) {
    // If currentNumber is not empty, add it to the array
    if (currentNumber) {
        arr.push(Number(currentNumber));
        currentNumber = '';
    }

    // If there are fewer than 2 numbers, can't do anything
    if (arr.length < 2) {
        return;
    }

    // Initialize result with the first number
    result = numberArray[0];

    // Iterate through the array and apply the operation
    for (let i = 1; i < arr.length; i++) {
        if (op === 'add') {
            result = add(result, arr[i]);
        } else if (op === 'sub') {
            result = subtract(result, arr[i]);
        } else if (op === 'mul') {
            result = multiply(result, arr[i]);
        } else if (op === 'div') {
            if (arr[i] === 0) {
                alert('AAH AAH YOU BROKE MATHS AAAAAAAAAAAAAAH');
                clear();
                return;
            }
            result = divide(result, arr[i]);
        }
    }

    // Round decimals
    if (!Number.isInteger(result)) {
        result = parseFloat(result.toFixed(3));
    }

    sumDisplay.textContent = result;
}

// Clear calculator
const clearBtn = document.getElementById('clear');
clearBtn.addEventListener('click', clear);