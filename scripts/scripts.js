const operations = {
    divide: '/',
    times: '*',
    minus: '-',
    plus: '+',
    mod: '%',
    power: '**',
    decimal: '.',
    equals: '=',
}

let currentInput = null;

let previousValue = null;

let result = null;

let operator = null;

// console.log(Boolean(operator && (currentInput || currentInput == 0) && (previousValue || previousValue == 0)));

let displayArray = [];
// console.log(displayArray.join(''));



// display

let displayInput = document.querySelector('.display-input');

let displayCalculation = document.querySelector('.display-calculation');


// buttons

let divideButton = document.querySelector('button#divide');
let timesButton = document.querySelector('button#times');
let minusButton = document.querySelector('button#minus');
let plusButton = document.querySelector('button#plus');
let equalsButton = document.querySelector('button#equals');
let modButton = document.querySelector('button#mod');
let powerButton = document.querySelector('button#power');

let deleteButton = document.querySelector('button#delete');
let backspaceButton = document.querySelector('button#backspace');


let zeroButton = document.querySelector('button#zero');
let oneButton = document.querySelector('button#one');
let twoButton = document.querySelector('button#two');
let threeButton = document.querySelector('button#three');
let fourButton = document.querySelector('button#four');
let fiveButton = document.querySelector('button#five');
let sixButton = document.querySelector('button#six');
let sevenButton = document.querySelector('button#seven');
let eightButton = document.querySelector('button#eight');
let nineButton = document.querySelector('button#nine');

let decimalButton = document.querySelector('button#decimal');

zeroButton.addEventListener('click', event => {
    displayArray.push(0);
    displayInput.textContent = displayArray.join('');
    // currentInput = Number(displayArray.join(''));
});

oneButton.addEventListener('click', event => {
    displayArray.push(1);
    displayInput.textContent = displayArray.join('');
});

twoButton.addEventListener('click', event => {
    displayArray.push(2);
    displayInput.textContent = displayArray.join('');
});

threeButton.addEventListener('click', event => {
    displayArray.push(3);
    displayInput.textContent = displayArray.join('');
});

fourButton.addEventListener('click', event => {
    displayArray.push(4);
    displayInput.textContent = displayArray.join('');
});

fiveButton.addEventListener('click', event => {
    displayArray.push(5);
    displayInput.textContent = displayArray.join('');
});

sixButton.addEventListener('click', event => {
    displayArray.push(6);
    displayInput.textContent = displayArray.join('');
});

sevenButton.addEventListener('click', event => {
    displayArray.push(7);
    displayInput.textContent = displayArray.join('');
});

eightButton.addEventListener('click', event => {
    displayArray.push(8);
    displayInput.textContent = displayArray.join('');
});

nineButton.addEventListener('click', event => {
    displayArray.push(9);
    displayInput.textContent = displayArray.join('');
});




divideButton.addEventListener('click', event => {
    operatorButtonClick(event) 
});

timesButton.addEventListener('click', event => {
    operatorButtonClick(event) 
});

minusButton.addEventListener('click', event => {
    operatorButtonClick(event) 
});

plusButton.addEventListener('click', event => {
    operatorButtonClick(event) 
});

powerButton.addEventListener('click', event => {
    operatorButtonClick(event) 
});

modButton.addEventListener('click', event => {
    operatorButtonClick(event);
});


// Equals button
equalsButton.addEventListener('click', event => {
    equals();
});


backspaceButton.addEventListener('click', event => {
    backspace();
});



// console.log(displayInput.textContent);

// displayInput.textContent = `${displayString}`;
// displayInput.textContent = displayArray.join('');


// on operator click
// 1 - set operator

// operator = operations[button.id];

// 2 - set previousValue

// previousValue = currentInput;

// 3 - set currentInput

// currentInput = /* displayed number */ 5 ;

// 4 - check if it should operate
// if  (operator && (currentInput || currentInput == 0) && 
//     (previousValue || previousValue == 0)) {

//     // run operation
//     operate(operator, previousValue, currentInput);

// }


// console.log(operations.plus);


function add(num1, num2) {
    return num1 + num2;
}

function minus(num1, num2) {
    return num1 - num2;
}

function times(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function power(num1, num2) {
    return num1 ** num2;
}

function mod(num1, num2) {
    return num1 % num2;
}


function equals() {

    previousValue = currentInput;
    console.log(`previousValue is: ${previousValue}`);

    // currentInput = null;
    currentInput = Number(displayArray.join(''));
    // currentInput = Number(displayInput.textContent);
    console.log(`currentInput is: ${currentInput}`);

    displayArray = [];
    console.log(displayArray);

    operate(operator, previousValue, currentInput);

    // showDisplayCalculation();


    // if  (operator && (currentInput || currentInput == 0) && 
    // (previousValue || previousValue == 0)) {

    //     // run operation
    //     operate(operator, previousValue, currentInput);

    // }

    // if (previousValue === null) {
    //     previousValue = currentInput;
    // }
}


function operatorClicked() {

}


function reset() {
    currentInput = null;
    previousValue = null;
    operator = null;
}



function backspace() {
    displayArray.pop();
    displayInput.textContent = displayArray.join('');

    // remove last number from display
    // convert string to array and remove last value
}

//?? can display show an array


/*  operate should be called when operator button 
    or equals button is clicked */

function operate(operator, num1, num2) {

    if (operator === operations.plus) {

        // showDisplayCalculation();
        // currentInput = add(num1, num2);
        // displayInput.textContent = currentInput;

        
        result = add(num1, num2);
        displayInput.textContent = result;

        // if (currentInput !== null) {
        //     showDisplayCalculation();
        // }
        showDisplayCalculation();
        previousValue = null;
        currentInput = result;
        console.log(displayArray);

    } else if (operator === operations.minus) {



    } else if (operator === operations.times) {


        
    } else if (operator === operations.divide) {


        
    } else if (operator === operations.mod) {


        
    } else if (operator === operations.power) {


        
    }

}



function operatorButtonClick(event) {
    // on operator click
    // 1 - set operator

    // if (operations[event.target.id] !== '=') {
    //     operator = operations[event.target.id];
    // }

    operator = operations[event.target.id];
    
    console.log(`operator is: ${operator}`);

    // 2 - set previousValue

    previousValue = currentInput;
    console.log(`previousValue is: ${previousValue}`);

    // 3 - set currentInput

    currentInput = Number(displayArray.join(''));
    // currentInput = Number(displayInput.textContent);
    console.log(`currentInput is: ${currentInput}`);

    // 4 - check if it should operate

    //@@@@@@this needs updating @@@@@@@@@

    if  (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0)) {

        // run operation
        operate(operator, previousValue, currentInput);
    } else {
        showDisplayCalculation();
    }

    // 5 - reset display array
    displayArray = [];
    console.log(displayArray);
}




function showDisplayCalculation() {
    if (displayCalculation.textContent === '' && previousValue === null) {

        displayCalculation.textContent = `${currentInput} ${operator}`;

    } else {

        displayCalculation.textContent = `${previousValue} ${operator} ${currentInput} = ${result}`;

    }
}




