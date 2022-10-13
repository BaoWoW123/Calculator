
let buttons = document.querySelector('.buttons');
let btnDel = document.querySelector('#btnDel');
let btnClear = document.querySelector('#btnClear');
let input = document.querySelector('.input');
let output = document.querySelector('.output');
let equal = buttons.querySelector('#equal')
let a = null;
let b = null;
let operator = null;

function divideError() {
    if (operator == '÷' && b == 0){
        erase()
        output.textContent = ''
        alert("Can't do that bruv")
        return true
    }   
}
function erase() {
    input.textContent = null;
    b = null;
}
btnDel.addEventListener('click', (erase));
btnClear.addEventListener('click', () => {
    erase();    
    operator = null;
    output.textContent = null;
})
buttons.addEventListener('click', (btn) =>{
    console.log('top',a,operator, b)
    let noGrid = !btn.target.classList.contains('buttons')
    if (/[^\d.]/g.test(btn.target.textContent) && a == null && output.textContent == null && noGrid){
        return alert("Can't start with operator!");
    }
    //number button
    if (/[\d.]/g.test(btn.target.textContent) && noGrid) {
        if (output.textContent !== ''){
        //runs when '1 +' is in output, might run if only number is in output after solving
        if (operator == null) return;
        input.textContent += btn.target.textContent;
        b = +input.textContent
            if (isNaN(b)) {
                b = + input.textContent.toString().split('').slice(0,-1).join('')
                input.textContent = b;
            }
        return console.log('B',b)
        } 
        console.log()
        //first number
        input.textContent += btn.target.textContent;
        a = +input.textContent
            if (isNaN(a)) {
                a = + input.textContent.toString().split('').slice(0,-1).join('')
                input.textContent = a;
            }
    }
    
    //operator button
    else if (btn.target.textContent !== '=' && noGrid) {
        if(output.textContent !== '' && operator != null) {
            if (b == null) {
                console.log('topper')
                operator = btn.target.textContent
                return output.textContent = `${a} ${operator}`
            }
            a = operate(operator, a, b)
            output.textContent = `${a} ${btn.target.textContent}`;
            operator = btn.target.textContent
            b = null;
            console.log('part1')
            return input.textContent = null;
        }
        operator = btn.target.textContent
        output.textContent = `${a} ${operator}`;
        input.textContent = null;
    }
    //occurs when operator is clicked again
    else if (operator !== null & noGrid) {
        if (divideError()==true) return;
        //Solving when a and operator is defined but no var b 
        if (a != null && operator != null && b == null) return alert('No second number input');
            a = operate(operator, a, b)
            input.textContent = null;
            b = null;
            operator = null;
    }
    console.log('end',a,operator,b)
})

function operate (operator, a, b) {
        switch (operator) {
            case '+':
                return add(a,b);
            case '-':
                return subtract(a,b);
            case '*':
                return multiply(a,b);
            case '÷':
                return divide(a,b);
        }
}
function add (a, b) {
    return output.textContent = a + b
};

function subtract (a, b) {
    return output.textContent = a - b
};
function multiply (a, b) {
    return output.textContent = a * b
};
function divide (a, b) {
    return output.textContent = a / b;
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