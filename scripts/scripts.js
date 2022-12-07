const operations = {
    divide: '/',
    times: '*',
    minus: '-',
    plus: '+',
    equals: '=',
    mod: '%',
    power: '**',
    decimal: '.',
}

let currentInput = null;

let previousValue = null;

let operator = null;

console.log(Boolean(operator && (currentInput || currentInput == 0) && (previousValue || previousValue == 0)));



// elements

let displayInput = document.querySelector('.display-input');
console.log(displayInput);


let displayArray = [1, 2, 3, 4, 5];
console.log(displayArray.join(''));


let displayString = displayArray.join('');
console.log(displayString);


console.log(displayInput.textContent);

// displayInput.textContent = `${displayString}`;
displayInput.textContent = displayArray.join('');


// on operator click
// 1 - set operator

// operator = operations[button.id];

// 2 - set previousValue

// previousValue = currentInput;

// 3 - set currentInput

// currentInput = /* displayed number */ 5 ;

// 4 - check if it should operate
if  (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0)) {

    // run operation
    operate(operator, previousValue, currentInput);

}




console.log(operations.plus);


function add(num1, num2) {
    return num1 + num2;
}

console.log(add(3,4));



function equals() {

    if  (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0)) {

    // run operation
    operate(operator, previousValue, currentInput);

}

}


function operatorClicked() {

}


function reset() {
    currentInput = null;
    previousValue = null;
    operator = null;
}



function backspace() {
    // remove last number from display
    // convert string to array and remove last value
}

//?? can display show an array


/*  operate should be called when operator button 
    or equals button is clicked */

function operate(operator, num1, num2) {

    if(operator === operations.plus) {
        return add(num1, num2);
    }
}

console.log(operate(operations.plus, 6, 10));