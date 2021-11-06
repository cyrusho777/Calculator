//Display values
updateScreen();

let currentDisplay = [];
let storedDisplay = 0;


function updateScreen () {
    const display = document.querySelector('.screen');
    buttons = document.querySelectorAll('button')
    buttons.forEach(button => {
        console.log(button);
    })
}

function onEnter (currentDisplay) {
    equal = document.querySelector('#equal');
    equal.addEventListener('click', () => {
        storedDisplay = currentDisplay;
    })
}

const add = function(a,b) {
    let sum = 0;
    sum = a + b;
    return sum;
  };
  
const subtract = (a,b) => {return a - b};
      

const multiply = function(a,b) {
    const product = a * b
    return product;
  };

const divide = (a,b) => {return a / b};

window.addEventListener('keydown', keyLog);
    
function keyLog (e)  {
    const key = document.querySelector(`[data-key="${e.keyCode}"]`);
    console.log(key);
    console.log(e.keyCode)

}