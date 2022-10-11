
let buttons = document.querySelector('.buttons');
let btnDel = document.querySelector('#btnDel');
let btnClear = document.querySelector('#btnClear');
let input = document.querySelector('.input');
let output = document.querySelector('.output');
let equal = buttons.querySelector('#equal')
let a = 0;
let b = 0;
let c = 0;
let operator = null;


function erase() {
    input.textContent = null;
    a = null;

}

btnDel.addEventListener('click', (erase));

btnClear.addEventListener('click', () => {
    erase();    
    b= null;
    c = null;
    operator = null;
    output.textContent = null;
})

buttons.addEventListener('click', (btn) =>{
    let noGrid = !btn.target.classList.contains('buttons')

    if (/[\d.]/g.test(btn.target.textContent) && noGrid) {
        input.textContent += btn.target.textContent;
        a = +input.textContent
        if (isNaN(a)) {
            a = + input.textContent.toString().split('').slice(0,-1).join('')
            input.textContent = a;
        }
    }
    else if (btn.target.textContent !== '=' && noGrid) {
        operator = btn.target.textContent
        console.log(operator)
        c = a;
        output.textContent = `${c} ${operator}`;
        input.textContent = null;
    }
    else if (operator !== null & noGrid) {
        //occurs when operator is clicked again
        b = +input.textContent
        if (c !== null) {
            b = a;
            operate(operator, a, b)
            c = null;
            input.textContent = null;
        }
    }
})

function operate (operator, a, b) {
    console.log(a, b, c)
    a = c;
        switch (operator) {
            case '+':
                return add(a,b);
            case '-':
                return subtract(a,b);
            case '*':
                return multiply(a,b);
            case '÷':
                return divide(a,b);
            default:
                console.log('solved')
                return `${a+operator+b}`;
        }
}
function add (a, b) {
    output.textContent = a + b
};

function subtract (a, b) {
    output.textContent = a - b
};
function multiply (a, b) {
    output.textContent = a * b
};
function divide (a, b) {
    output.textContent = a / b;
};
/*
type in a number
when click on an operator, store current number into var a
store operator and clear screen input
type in next number
when click on operator, solve pair

how to solve a, operator, & this.value 
    may need to store last number into var b 
how to switch event function to var b 
    onchange event for variable?

if operator is present 
if this.value is there, this = b
    a = b
    c = a
    solve 
    store current number in output
    take out operator
    */