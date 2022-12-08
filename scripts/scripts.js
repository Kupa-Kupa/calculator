// VARIABLES

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

let displayArray = [];



// ELEMENTS

// display

let displayInput = document.querySelector('.display-input');

let displayCalculation = document.querySelector('.display-calculation');

// buttons

let divideButton = document.querySelector('button#divide');
let timesButton = document.querySelector('button#times');
let minusButton = document.querySelector('button#minus');
let plusButton = document.querySelector('button#plus');

let modButton = document.querySelector('button#mod');
let powerButton = document.querySelector('button#power');

let equalsButton = document.querySelector('button#equals');

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



// EVENT LISTENERS

// for number buttons

zeroButton.addEventListener('click', event => {
    if (displayArray.length < 22 && displayArray.length !== 0) {
        displayArray.push(0);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

oneButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(1);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

twoButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(2);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

threeButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(3);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

fourButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(4);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

fiveButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(5);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

sixButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(6);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

sevenButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(7);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

eightButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(8);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

nineButton.addEventListener('click', event => {
    if (displayArray.length < 22) {
        displayArray.push(9);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});



// for operator buttons

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



// for equals button

equalsButton.addEventListener('click', event => {
    equals();
});


backspaceButton.addEventListener('click', event => {
    backspace();
});

deleteButton.addEventListener('click', event => {
    reset();
});



// FUNCTIONS

// operators

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


// equals

function equals() {

    previousValue = currentInput;
    console.log(`previousValue is: ${previousValue}`);

    // currentInput = null;

    // this makes currentInput  = 0 when equals in pressed twice in a row
    currentInput = Number(displayArray.join(''));

    // makes currentInput  = previous result 
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





/*  operate should be called when operator button 
    or equals button is clicked */

function operate(operator, num1, num2) {

    if (operator === operations.plus) {

        result = add(num1, num2);
        displayInput.textContent = result;

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


    // this is now done on number button click
    // 2 - set currentInput

    // currentInput = Number(displayArray.join(''));
    // currentInput = Number(displayInput.textContent);
    // console.log(`currentInput is: ${currentInput}`);



    // 3 - check if it should operate

    //@@@@@@this needs updating @@@@@@@@@

    if  (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0)) {

        // run operation
        operate(operator, previousValue, currentInput);
    } else {
        showDisplayCalculation();
    }

    // 4 - set previousValue

    if (currentInput !== null) {
        previousValue = currentInput;
    }
    
    console.log(`previousValue is: ${previousValue}`);


    // 4.1 - set currentInput to null

    currentInput = null;
    console.log(`currentInput is: ${currentInput}`);

    // 5 - reset display array
    displayArray = [];
    console.log(displayArray);
}




// need to fix display logic based on value of previousValue and
// currentInput and maybe result?
function showDisplayCalculation() {
    if (displayCalculation.textContent === '' && previousValue === null && currentInput !== null) {

        displayCalculation.textContent = `${currentInput} ${operator}`;

    } else if (result && currentInput === null) {

        displayCalculation.textContent = `${result}`;

    } else {

        displayCalculation.textContent = `${previousValue} ${operator} ${currentInput} = ${result}`;

    }
}










function reset() {
    currentInput = null;
    previousValue = null;
    operator = null;
    result = null;
    displayArray = [];

    displayInput.textContent = '';
    displayCalculation.textContent = '';
}


function backspace() {

    displayArray.pop();
    displayInput.textContent = displayArray.join('');

    if (displayArray.length === 0) {
        currentInput = null;
    } else {
        currentInput = Number(displayArray.join(''));
    }

    console.log(`currentInput is: ${currentInput}`);
}