const btnSelect = document.getElementById('btnSelect');
const btnExcluir = document.getElementById('btnExcluir');
const classMaking = document.querySelector('.making');

let trilho = document.getElementById('trilho');
let body = document.querySelector('body');
let btnExistent = true;

trilho.addEventListener('click', function() {

trilho.classList.toggle('dark');

body.classList.toggle('dark');

})

btnSelect.addEventListener('click', function() {

const valueOfInput = parseInt(document.getElementById('input').value);
const oldInputs = document.querySelectorAll('.dinamic-input-name, .br-container');

    oldInputs.forEach(element => element.remove());

    if (isNaN(valueOfInput) || valueOfInput <= 0) {

    alert("Por favor, insira um número válido");

    } else if (valueOfInput == 1) {

    alert("Por favor, insira um número maior do que 1");

    }else {

    for (let i = 1; i <= valueOfInput; i++) {

    const createInput = document.createElement('input');
    createInput.type = 'text';
    createInput.placeholder = 'Digite aqui o nome';
    createInput.className = 'dinamic-input-name';

    const br = document.createElement('br');
    br.className = 'br-container';
    classMaking.appendChild(createInput);
    classMaking.appendChild(br);
}

    if (btnExistent == true) {
    const btnContinue = document.createElement('button');
    btnContinue.innerText = 'Sortear';
    btnContinue.id = 'btn-continue';
    btnContinue.className = 'btnContinue';
    classMaking.appendChild(btnContinue);
    btnExistent = false;

    btnContinue.addEventListener('click', () => {
                const allNameInputs = document.querySelectorAll('.dinamic-input-name');
                let allFilled = true;
                let missingCount = 0;

                allNameInputs.forEach(inputField => {
                    if (inputField.value.trim() === '') { 
                        allFilled = false;
                        missingCount++;
                    }
                });

                if (!allFilled) {
                    if (missingCount > 0) { 
                         alert('Preencha todos os campos vazios!');
                    }
                } else {
                
                let arrayNames = [];
                allNameInputs.forEach(inputField => {
                    arrayNames.push(inputField.value.trim())
                });

                const arraySize = arrayNames.length;

                const result = Math.floor(Math.random() * arraySize);

                    alert("O vencedor é " + arrayNames[result]);
                }
            });

}}});

btnExcluir.addEventListener('click', function() {

    const oldInputs = document.querySelectorAll('.dinamic-input-name, .br-container, .btnContinue');
    oldInputs.forEach(element => element.remove());
    
    btnExistent = true;
})