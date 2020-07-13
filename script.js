// NUMBER
const number = document.querySelectorAll(".number");
number.forEach((number) => {
  number.addEventListener("click", (event) => {
    inputNumber(event.target.value);
    updateScreen(currentNumber);
  })
});

// update screen function
const calculatorScreen = document.querySelector('.calculator-screen');
const updateScreen = number => calculatorScreen.value = number;

// Operating
let prevNumber = '';
let calculatorOperator = '';
let currentNumber = '0';

// Activate input more than 2x
const inputNumber = (number) => {
  if (currentNumber === '0') {
    currentNumber = number;
  } else {
    currentNumber += number;
  }
}


// OPERATOR
const operators = document.querySelectorAll(".operator");
operators.forEach((operator) => {
  operator.addEventListener('click', (event) => {
    inputOperator(event.target.value);
  })
});

const inputOperator = (operator) => {
  if (calculatorOperator === '') {
    prevNumber = currentNumber;
  }
  calculatorOperator = operator;
  currentNumber = '';
};

const calculate = () => {
  let result = '';
  switch (calculatorOperator) {
    case "+":
      result = parseFloat(prevNumber) + parseFloat(currentNumber)
      break;
    case "-":
      result = prevNumber - currentNumber
      break;
    case "*":
      result = prevNumber * currentNumber
      break;
    case "/":
      result = prevNumber / currentNumber
      break;
  
    default:
      break;
  }
  currentNumber = result;
  calculatorOperator = '';
}

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', (event) => {
  calculate();
  updateScreen(currentNumber);
})


// CLEAR SCREEN
const clearBtn = document.querySelector('.all-clear')
clearBtn.addEventListener('click', () => {
  clearAll()
  updateScreen(currentNumber)
})

const clearAll = () => {
  prevNumber = ''
  calculatorOperator = ''
  currentNumber = '0'
}

// Decimal
const decimal = document.querySelector('.decimal')
decimal.addEventListener('click', (event) => {
  inputDecimal(event.target.value)
  updateScreen(currentNumber)
})

inputDecimal = (dot) => {
  currentNumber += dot
}