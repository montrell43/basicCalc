let firstNumber = '';
let operation = '';
let operationDisplay = ''
let secondNumber = '';
let clear = false;

 const operatorButtons = document.querySelectorAll('.operator')
 const numberButtons = document.querySelectorAll('.btn')
 const equalButton = document.querySelector('.equal')
const acButton = document.querySelector('.ac')
const screen = document.querySelector('#screen')

 operatorButtons.forEach((button) => {
button.addEventListener('click', (event) => {
      // if not clicked op
      let op = event.target.innerText // give the number of what has been click to add the number to the first value
      operationPressed(op)
    //console.log(event.target.innerText)
})
})

 numberButtons.forEach((button) => {
button.addEventListener('click', (event) => {
    // if not clicked op
      let value = event.target.innerText // give the number of what has been click to add the number to the first value
      numberPressed(value)
    //console.log(event.target.innerText)
})
 })

 equalButton.addEventListener('click', () => {
    calcResult()
})


 acButton.addEventListener('click', (event) => {
    clearScreen()
})

 // Calculate the result of the current expression, if valid, and display it on the screen
function calcResult() {
  // TODO
  if(firstNumber && operation  &&secondNumber) {
    firstNumber = eval(firstNumber + operation + secondNumber).toString();
    operation = ''
    operationDisplay = ''
    secondNumber = ''
    clear = true;
    updateScreen()
  }
}

// Handle operations when operation buttons (+, -, /, *) are pressed
function operationPressed(op) {
  // TODO
  if(firstNumber === "") return //ignore if not num entered
  if (secondNumber !== "") {
    calcResult()
  }

  operationDisplay = op;
  operation = (op === '÷') ? '/' : (op === 'x' ? '*' : op);
  updateScreen()
}

// Handle numeric input
function numberPressed(number) {
  // TODO
  if(clear) {
    firstNumber = ''
    clear = false
  }
  if(operation === '') {
    if(number === '.' && firstNumber.indexOf(".") !== -1) return;
    firstNumber += number
  }else {
    if(number === "." && secondNumber.indexOf('.') !== -1) return;
    secondNumber += number
  }
  
  updateScreen()
}

// Clear the calculator screen
function clearScreen() {
  // TODO
  firstNumber = ''
  operation = ''
  operationDisplay = ''
  secondNumber = ''
  clear = false
  updateScreen()
}

// Update the screen based on `firstNumber`, `operation`, and `secondNumber`
function updateScreen() {
  // TODO
  let display = firstNumber

  if(operationDisplay !== '') {
    display += ' ' + operationDisplay
  }
  
  if(secondNumber !== '') {
    display += ' ' + secondNumber
  }
  screen.innerText = display || '0'
}

// TODO: Implement query selectors and add event listeners to the calculator buttons
