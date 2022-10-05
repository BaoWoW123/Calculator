
let buttons = document.querySelector('.buttons');
let btnDel = document.querySelector('#btnDel');
let btnClear = document.querySelector('#btnClear');
let input = document.querySelector('.input');
let output = document.querySelector('.output');

btnDel.addEventListener('click', (erase) => {
    input.textContent = 0;
});

btnClear.addEventListener('click', (erase) => {
    erase;
    output.textContent = undefined;
})
buttons.addEventListener('click', (b) => {
    if (!b.target.classList.contains('buttons')) 
    return input.textContent = b.target.textContent;
})