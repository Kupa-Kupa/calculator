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
    }
});


zeroButton.addEventListener('click', event => {
    if (displayArray.join('').startsWith('0.') || displayArray.join('').startsWith('-0.')) {

        displayArray.push(0);
        displayInput.textContent = displayArray.join('');

    } else if (displayArray.length < 22 && (displayArray[0] !== 0) && !displayArray.join('').startsWith('-0')) {
        displayArray.push(0);
        displayInput.textContent = displayArray.join('');
    }
});

oneButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }

    if (displayArray.length < 22) {
        displayArray.push(1);
        displayInput.textContent = displayArray.join('');
    }
});

twoButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }

    if (displayArray.length < 22) {
        displayArray.push(2);
        displayInput.textContent = displayArray.join('');
    }
});

threeButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(3);
        displayInput.textContent = displayArray.join('');
    }
});

fourButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(4);
        displayInput.textContent = displayArray.join('');
    }
});

fiveButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(5);
        displayInput.textContent = displayArray.join('');
    }
});

sixButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(6);
        displayInput.textContent = displayArray.join('');
    }
});

sevenButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(7);
        displayInput.textContent = displayArray.join('');
    }
});

eightButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(8);
        displayInput.textContent = displayArray.join('');
    }
});

nineButton.addEventListener('click', event => {
    if(displayArray[0] === 0 && displayArray[1] !== '.') {
        displayArray.pop();
    } else if (displayArray[0] === '-' && displayArray[1] === 0 && displayArray[2] !== '.') {
        displayArray.pop();
    }
    
    if (displayArray.length < 22) {
        displayArray.push(9);
        displayInput.textContent = displayArray.join('');
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
    if (displayArray.length === 0 && operator !== '=') {
        displayArray.push('-');
        displayInput.textContent = displayArray.join('');
    } else {
        operatorButtonClick(event);
    }
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
    equals(event);
});


backspaceButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    backspace();
});

deleteButton.addEventListener('click', event => {
    console.log(`${event.target.id} button clicked`);
    reset();
});



// FUNCTIONS

// operators

function add(num1, num2) {
    return Number(num1) + Number(num2);
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



// on equals button click

function equals(event) {

    console.log(`displayArray is:`);
    console.log(displayArray);

    // 1 - Set current input

    if (displayArray.join('') === '') {
        currentInput = null;
        console.log(`currentInput is: ${currentInput}`);
    } else {
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }


    // 2 - check if it should operate
    // operate if there is an operator and two stored values

    if  (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0)) {
        // run operation
        console.log(`run operate on: ${previousValue} ${operator} ${currentInput}`);
        operate(operator, previousValue, currentInput);
    }

    showDisplayCalculation();
    console.log(`operator is: ${operator}`);
    console.log(`currentInput is: ${currentInput}`);
    console.log(`previousValue is: ${previousValue}`);


    // 3 - set operator

    operator = operations[event.target.id];
    console.log(`operator is set to last operator clicked: ${operator}`);


    // 4 - Move currentInput to previousValue

    if (currentInput !== null) {
        previousValue = currentInput;
        console.log(`currentInput value moved to previousValue. previousValue is: ${previousValue}`);
    }
    

    // 5 - If result not null then move result to previousValue

    if (result === 'undefined mate') {
        reset();
        displayCalculation.textContent = `That was undefined mate`;
    } else if (result !== null) {
        previousValue = result;
        console.log(`result value moved to previousValue. previousValue is: ${previousValue}`);
        result = null;
        console.log(`reset result to null. result = ${result}`);
    }


    // 6 - reset display array
    // so that new input isn't added to end of old input

    displayArray = [];
    console.log(`displayArray reset to blank array:`);
    console.log(displayArray);


    console.log(`displayArray is:`);
    console.log(displayArray);
}




// on operator button click

function operatorButtonClick(event) {

    console.log(`displayArray is:`);
    console.log(displayArray);

    // 1 - Set current input i.e. num 1 = 

    if (displayArray.join('') === '') {
        currentInput = null;
        console.log(`currentInput is: ${currentInput}`);
    } else {
        currentInput = Number(displayArray.join(''));
        console.log(`currentInput is: ${currentInput}`);
    }


    // 2 - check if it should operate
    // operate if there is an operator and two stored values

    if  (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0)) {
        // run operation
        console.log(`run operate on: ${previousValue} ${operator} ${currentInput}`);
        operate(operator, previousValue, currentInput);
    }

    showDisplayCalculation();
    console.log(`operator is: ${operator}`);
    console.log(`currentInput is: ${currentInput}`);
    console.log(`previousValue is: ${previousValue}`);


    // 3 - set operator

    operator = operations[event.target.id];
    console.log(`operator is set to last operator clicked: ${operator}`);

    
    if (previousValue === null && currentInput === null) {
        displayCalculation.textContent = ``;
        console.log(`displaycalculation is: ${displayCalculation.textContent}`);
    } else if (currentInput === null && previousValue !== null) {
        displayCalculation.textContent = `${previousValue} ${operator}`;
        console.log(`displaycalculation is: ${displayCalculation.textContent}`);
    } else if (previousValue === null) {
        displayCalculation.textContent = `${currentInput} ${operator}`;
        console.log(`displaycalculation is: ${displayCalculation.textContent}`);
    }



    // 4 - Move currentInput to previousValue

    if (currentInput !== null) {
        previousValue = currentInput;
        console.log(`currentInput value moved to previousValue. previousValue is: ${previousValue}`);
    }
    

    // 5 - If result not null then move result to previousValue

    if (result === 'undefined mate') {
        reset();
        displayCalculation.textContent = `That was undefined mate`;
    } else if (result !== null) {
        previousValue = result;
        console.log(`result value moved to previousValue. previousValue is: ${previousValue}`);
        result = null;
        console.log(`reset result to null. result = ${result}`);
    }


    // 6 - reset display array
    // so that new input isn't added to end of old input

    displayArray = [];
    console.log(`displayArray reset to blank array:`);
    console.log(displayArray);


    console.log(`displayArray is:`);
    console.log(displayArray);

}




/*  operate is called when the equals button or an operator button 
    is clicked there is a value for: 
    operator, previousValue and currentInput
*/

function operate(operator, num1, num2) {

    if (operator === operations.plus) {

        console.log(`calculate result:`);

        result = add(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

    } else if (operator === operations.minus) {

        console.log(`calculate result:`);

        result = minus(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

    } else if (operator === operations.times) {

        console.log(`calculate result:`);

        result = times(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

    } else if (operator === operations.divide) {

        console.log(`calculate result:`);

        result = divide(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

    } else if (operator === operations.mod) {

        console.log(`calculate result:`);

        result = mod(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

    } else if (operator === operations.power) {

        console.log(`calculate result:`);

        result = power(num1, num2);
        console.log(`result is: ${result}`);

        displayInput.textContent = result;

        showDisplayCalculation();

    }
}



// Display the last calculation

function showDisplayCalculation() {

    if (operator && (currentInput || currentInput == 0) && 
    (previousValue || previousValue == 0) && (result || result == 0)) {
        
        displayCalculation.textContent = `${previousValue} ${operator} ${currentInput} = ${result}`;
        console.log(`displaycalculation is: ${displayCalculation.textContent}`);

    } 

}



// reset calculator

function reset() {
    currentInput = null;
    previousValue = null;
    operator = null;
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



// remove last input value

function backspace() {

    displayArray.pop();
    displayInput.textContent = displayArray.join('');

}











// KEYBOARD EVENTLISTENER


// window.addEventListener('keydown', event => {

//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);

//     if (event.key === '.' || event.key === '\x00') {

//         if (displayArray.length < 22 && displayArray.indexOf('.') === -1) {
//             displayArray.push('.');
//             displayInput.textContent = displayArray.join('');
//             currentInput = Number(displayArray.join(''));
//             console.log(`currentInput is: ${currentInput}`);
//         }

//     } else if (event.code === 'Space') {
//         console.log('spacebar');
//         event.preventDefault();

//     } else if (event.key === 'Enter' || event.key === '=') {
//         event.preventDefault();
//         equals();

//     } else if (event.key === '/') {
//         event.preventDefault();

//         operator = operations['divide'];
//         // console.log(operator);
//         // console.log(event.target);
//         // console.log(event.target.id);
//         operatorButtonClick(event);

//     } else if (event.key === '*') {
//         event.preventDefault();

//         operator = operations['times'];
//         operatorButtonClick(event);

//     } else if (event.key === '+') {
//         event.preventDefault();

//         operator = operations['plus'];
//         operatorButtonClick(event);

//     } else if (event.key === '-') {
//         event.preventDefault();

//         operator = operations['minus'];
//         operatorButtonClick(event);

//     } else if (Number(event.key) === 0) {

//         if (displayArray.length < 22 && displayArray[0] !== 0) {
//             displayArray.push(0);
//             displayInput.textContent = displayArray.join('');
//             currentInput = Number(displayArray.join(''));
//             console.log(`currentInput is: ${currentInput}`);
//         }

//     } else if (Number(event.key) > 0) {

//         if(displayArray[0] === 0 && displayArray[1] !== '.') {
//             displayArray.pop();
//         }
        
//         if (displayArray.length < 22) {
//             displayArray.push(Number(event.key));
//             displayInput.textContent = displayArray.join('');
//             currentInput = Number(displayArray.join(''));
//             console.log(`currentInput is: ${currentInput}`);
//         }
//     }
    
// });