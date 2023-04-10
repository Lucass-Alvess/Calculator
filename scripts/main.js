
const screen = document.querySelector('.screen-result');
let numbern1 = '';
let numbern2 = '';
let total = ''
let operato = '';



function cleanAl() {
  numbern1 = '';
  numbern2 = '';
  operato = '';

  screen.innerHTML = '';
};

function numbercalculator(number) {
  if (operato === '') {
    numbern1 += number
    screen.innerHTML = numbern1;
  } else {
    numbern2 += number;
    screen.innerHTML = `${numbern1} ${operato} ${numbern2}`
  }

};

function operators(operator) {
  if (numbern1.endsWith('+') || numbern1.endsWith('-') || numbern1.endsWith('x') || numbern1.endsWith('/')) {
    return;
  };
  operato = operator;
  screen.innerHTML = `${numbern1} ${operato}`;
};

function result() {
  if (operato === '+') {
    total = +numbern1 + +numbern2;
    screen.innerHTML = total
  } else if (operato === '-') {
    total = +numbern1 - +numbern2;
    screen.innerHTML = total
  } else if (operato === 'x') {
    total = +numbern1 * +numbern2;
    screen.innerHTML = total
  } else if (operato === '/') {
    total = +numbern1 / +numbern2;
    screen.innerHTML = total
  }
  numbern1 = '';
  numbern2 = '';
  operato = '';
  total = total.toString()
  numbern1 = total
};

