
let buttons = document.querySelector('.buttons');
let btnDel = document.querySelector('#btnDel');
let btnClear = document.querySelector('#btnClear');
let input = document.querySelector('.input');
let output = document.querySelector('.output');
let equal = buttons.querySelector('#equal')
let a = 0;

function erase() {
    input.textContent = '';
}

btnDel.addEventListener('click', (erase));

btnClear.addEventListener('click', () => {
    erase();
    output.textContent = '';
    a = 0;
})

equal.addEventListener('click', operate)

buttons.addEventListener('click', (b) => {

    if (!b.target.classList.contains('buttons') && /[\d.]/.test(b.target.textContent) == true) {        
        input.textContent += b.target.textContent;
        a = +(input.textContent);
        if (isNaN(a)) {
            a = input.textContent.toString()
            a = a.split('').slice(0,-1).join('')
            input.textContent = a
            a = Number(input.textContent)
        }
    }
    else if (!b.target.classList.contains('buttons')) {
        operator = b.target.textContent;
        console.log('operator', operator)
    }
})

function add (a, b) { a + b};

function subtract (a, b) { a - b};

function multiply (a, b) { a * b};

function divide (a, b) { a / b};

function operate (operator, a, b) {
    input.textContent = '';
    console.log(a)
}

buttons.addEventListener('click', (b) => {
    if (typeof (b.target.textContent) == Number) {
        operate()
        prompt('afs')
    }
})