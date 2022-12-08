// VARIABLES

const operations = {
    divide: `${String.fromCodePoint(0xF7)}`,
    times: `${String.fromCodePoint(0xD7)}`,
    minus: '-',
    plus: '+',
    mod: '%',
    power: '^',
    decimal: '.',
    equals: '=',
}

let currentInput = null;

let previousValue = null;

let result = null;

let operator = null;

let previousOperator = null;

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

decimalButton.addEventListener('click', event => {
    if (displayArray.length < 22 && displayArray.indexOf('.') === -1) {
        displayArray.push('.');
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});


zeroButton.addEventListener('click', event => {
    if (displayArray.length < 22 && displayArray[0] !== 0) {
        displayArray.push(0);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

oneButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }

    if (displayArray.length < 22) {
        displayArray.push(1);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

twoButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }

    if (displayArray.length < 22) {
        displayArray.push(2);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

threeButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(3);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

fourButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(4);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

fiveButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(5);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

sixButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(6);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

sevenButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(7);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

eightButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(8);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});

nineButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(9);
        displayInput.textContent = displayArray.join('');
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }
});



// for operator buttons

divideButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    operatorButtonClick(event);
});

timesButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    operatorButtonClick(event);
});

minusButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    operatorButtonClick(event);
});

plusButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    operatorButtonClick(event);
});

powerButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    operatorButtonClick(event);
});

modButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    operatorButtonClick(event);
});



// for equals button

equalsButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    equals();
});


backspaceButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    backspace();
});

deleteButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    reset();
});







// KEYBOARD EVENTLISTENERS


window.addEventListener('keydown', event => {

    console.log(event);
    console.log(event.key);
    console.log(event.code);

    if (event.key === '.' || event.key === '\x00') {

        if (displayArray.length < 22 && displayArray.indexOf('.') === -1) {
            displayArray.push('.');
            displayInput.textContent = displayArray.join('');
            currentInput = Number(displayArray.join(''));
            console.log(`currentInput is: ${currentInput}`);
        }

    } else if (event.code === 'Space') {
        console.log('spacebar');
        event.preventDefault();

    } else if (event.key === 'Enter' || event.key === '=') {
        event.preventDefault();
        equals();

    } else if (event.key === '/') {
        event.preventDefault();

        operator = operations['divide'];
        // console.log(operator);
        // console.log(event.target);
        // console.log(event.target.id);
        operatorButtonClick(event);

    } else if (event.key === '*') {
        event.preventDefault();

        operator = operations['times'];
        operatorButtonClick(event);

    } else if (event.key === '+') {
        event.preventDefault();

        operator = operations['plus'];
        operatorButtonClick(event);

    } else if (event.key === '-') {
        event.preventDefault();

        operator = operations['minus'];
        operatorButtonClick(event);

    } else if (Number(event.key) === 0) {

        if (displayArray.length < 22 && displayArray[0] !== 0) {
            displayArray.push(0);
            displayInput.textContent = displayArray.join('');
            currentInput = Number(displayArray.join(''));
            console.log(`currentInput is: ${currentInput}`);
        }

    } else if (Number(event.key) > 0) {

        if(displayArray[0] === 0 && displayArray[1] !== '.') {
            displayArray.pop();
        }
        
        if (displayArray.length < 22) {
            displayArray.push(Number(event.key));
            displayInput.textContent = displayArray.join('');
            currentInput = Number(displayArray.join(''));
            console.log(`currentInput is: ${currentInput}`);
        }
    }
    
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
    if (num2 === 0 ) {
        return "undefined mate";
    } else {
        return num1 / num2;
    }
}

function power(num1, num2) {
    return num1 ** num2;
}

function mod(num1, num2) {
    return num1 % num2;
}


// equals

function equals() {

    console.log(`operator is: ${operator}`);
    console.log(`currentInput is: ${currentInput}`);
    console.log(`previousValue is: ${previousValue}`);

    // 1 - check if it should operate
    // operate if there is an operator and two stored values
    if  (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0)) {
        // run operation
        operate(operator, previousValue, currentInput);
    } else {
        // if there is only one stored value, display:
        // that value and operator, or just the previous result
        showDisplayCalculation();
        console.log(`showDisplayCalculation: ${displayCalculation.textContent}`);
    }

    // 2 - set previousValue
    // if there is current input move it to previousValue
    if (currentInput !== null) {
        previousValue = currentInput;
        console.log(`currentInput moved to previousValue`);
        console.log(`previousValue is now: ${previousValue}`);
    } else {
        console.log(`no currentInput value`);
        console.log(`previousValue is still: ${previousValue}`);
    }


    // 3 - set currentInput to null
    // reset current input so that new input can be taken
    currentInput = null;
    console.log(`currentInput reset to: ${currentInput}`);


    // 4 - reset display array
    // so that new input isn't added to end of old input
    displayArray = [];
    console.log(`displayArray reset to blank array:`);
    console.log(displayArray);

    // 5 - reset operator
    operator = null;
    console.log(`operator reset to: ${operator}`);


    if (previousValue === 'undefined mate') {
        reset();
        displayCalculation.textContent = `That's undefined mate`;
    }


    // showDisplayCalculation();
    // console.log(`showDisplayCalculation: ${displayCalculation.textContent}`);

}












function operatorButtonClick(event) {
    // 1 - set operator

    /* if the operator is set immediately then the following clicks will 
    result in a calculation which seems like it would be unwanted?:
    3 + 6 = 3 + => this will equal 12 */
    // this seems the better option
    /* looks like it's actually a big issue
    The following clicks will result in an unexpected calculation:
    3 + 3 * => this will equal 3 * 3 */

    // previousOperator = operator;
    // console.log(`previousOperator is: ${previousOperator}`);

    if(event.target.id !== '') {
        operator = operations[event.target.id];
    }

    

    console.log(`operator is: ${operator}`);

    console.log(`currentInput is: ${currentInput}`);
    console.log(`previousValue is: ${previousValue}`);

    // 3 - check if it should operate
    // operate if there is an operator and two stored values
    
    if  (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0)) {
        // run operation
        operate(operator, previousValue, currentInput);
    } else {
        // if there is only one stored value, display:
        // that value and operator, or just the previous result
        showDisplayCalculation();
    }
    

    // if  (previousOperator && (currentInput || currentInput == 0) && 
    // (previousValue || previousValue == 0)) {
    //     operate(previousOperator, previousValue, currentInput);
    // } else {
    //     showDisplayCalculation();
    // }


    /* if the operator here then the following clicks will 
    result in an incorrect calculation being displayed:
    3 + 6 = 3 + => this show 9 + 3 = 9 */
    // operator = operations[event.target.id];
    // console.log(`operator is: ${operator}`);
    // need to redisplay calculation
    // showDisplayCalculation();


    // if(event.target.id !== '') {
    //     operator = operations[event.target.id];
    // }
    // showDisplayCalculation();



    // 4 - set previousValue
    // if there is current input move it to previousValue
    if (currentInput !== null) {
        previousValue = currentInput;
        console.log(`currentInput moved to previousValue`);
        console.log(`previousValue is now: ${previousValue}`);
    } else {
        console.log(`no currentInput value`);
        console.log(`previousValue is still: ${previousValue}`);
    }


    // 5 - set currentInput to null
    // reset current input so that new input can be taken
    currentInput = null;
    console.log(`currentInput reset to: ${currentInput}`);


    // 6 - reset display array
    // so that new input isn't added to end of old input
    displayArray = [];
    console.log(`displayArray reset to blank array:`);
    console.log(displayArray);


    if (previousValue === 'undefined mate') {
        reset();
        displayCalculation.textContent = `That's undefined mate`;
    }
    
    // 2 - set currentInput - this is now done on number button click

    // currentInput = Number(displayArray.join(''));
    // currentInput = Number(displayInput.textContent);
    // console.log(`currentInput is: ${currentInput}`);
}




/*  operate should be called when operator button 
or equals button is clicked */

function operate(operator, num1, num2) {

    if (operator === operations.plus) {

        console.log(`calculate result:`);

        result = add(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

        currentInput = result;
        console.log(`currentInput set to result`);
        console.log(`currentInput is: ${currentInput}`);

        console.log(`displayArray is:`);
        console.log(displayArray);

    } else if (operator === operations.minus) {

        console.log(`calculate result:`);

        result = minus(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

        currentInput = result;
        console.log(`currentInput set to result`);
        console.log(`currentInput is: ${currentInput}`);

        console.log(`displayArray is:`);
        console.log(displayArray);

    } else if (operator === operations.times) {

        console.log(`calculate result:`);

        result = times(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

        currentInput = result;
        console.log(`currentInput set to result`);
        console.log(`currentInput is: ${currentInput}`);

        console.log(`displayArray is:`);
        console.log(displayArray);

    } else if (operator === operations.divide) {

        console.log(`calculate result:`);

        result = divide(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

        currentInput = result;
        console.log(`currentInput set to result`);
        console.log(`currentInput is: ${currentInput}`);

        console.log(`displayArray is:`);
        console.log(displayArray);

    } else if (operator === operations.mod) {

        console.log(`calculate result:`);

        result = mod(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

        currentInput = result;
        console.log(`currentInput set to result`);
        console.log(`currentInput is: ${currentInput}`);

        console.log(`displayArray is:`);
        console.log(displayArray);

    } else if (operator === operations.power) {

        console.log(`calculate result:`);

        result = power(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

        currentInput = result;
        console.log(`currentInput set to result`);
        console.log(`currentInput is: ${currentInput}`);

        console.log(`displayArray is:`);
        console.log(displayArray);

    }
}





// need to fix display logic based on value of previousValue and
// currentInput and maybe result?
function showDisplayCalculation() {



    if (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0) && (result || result == 0)) {
        
        displayCalculation.textContent = `${previousValue} ${operator} ${currentInput} = ${result}`;

    } else if (previousValue === null && currentInput !== null && operator !== null) {

        displayCalculation.textContent = `${currentInput} ${operator}`;

    } else if (previousValue !== null && currentInput === null && operator !== null) {

        displayCalculation.textContent = `${previousValue} ${operator}`;

    } else if (previousValue === null && currentInput !== null && operator === null) {

        displayCalculation.textContent = `${currentInput}`;

    } else if (previousValue !== null && currentInput !== null && operator === null) {

        displayCalculation.textContent = `${currentInput}`;

    } else if (previousValue === null && currentInput === null && operator !== null && result === null) {

        displayCalculation.textContent = ``;

    } else if (previousValue === null && currentInput === null && operator === null && result === null) {

        displayCalculation.textContent = ``;

    } else {

        displayCalculation.textContent = `${previousValue}`;

    }
}










function reset() {
    currentInput = null;
    previousValue = null;
    operator = null;
    previousOperator = null;
    result = null;
    displayArray = [];

    displayInput.textContent = '';
    displayCalculation.textContent = '';

    console.log('\n');
    console.log('CALCULATOR RESET');
    console.log('\n');
    console.log(`currentInput is: ${currentInput}`);
    console.log(`previousValue is: ${previousValue}`);
    console.log(`operator is: ${operator}`);
    console.log(`previoiusOperator is: ${operator}`);
    console.log(`result is: ${result}`);
    console.log(`displayArray is:`);
    console.log(displayArray);
    console.log('\n');
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