const btn = document.getElementById('add');
const table = document.getElementById('table');

btn.addEventListener('click', function () { // assim que clicar no botão de adicionar
    const taskContainer = document.createElement('div'); 
    taskContainer.className = 'task'; // cria uma div com a classe task

    const divBox = document.createElement('div');
    divBox.className = 'box'; // cria uma div com a classe box

    const placeHolder = document.createElement('input'); 
    placeHolder.type = 'text';
    placeHolder.placeholder = 'Digite aqui sua tarefa...'; // cria um input do tipo texto e com um placeholder

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '🗑️'; // cria um botão com a classe delte-btn 

    deleteBtn.addEventListener('click', function () {
        taskContainer.remove();
    }) // se o botão de deletar for acionado, será removido o taskContainer(no caso a tarefa)

    // coloca-os em grupos odernados
    taskContainer.appendChild(divBox);
    taskContainer.appendChild(placeHolder);
    taskContainer.appendChild(deleteBtn);
    table.appendChild(taskContainer);

    // alterna entre tarefa feita e não feita
    divBox.addEventListener('click', function () {
        divBox.classList.toggle('active');

        const input = divBox.nextElementSibling;

    // Alterna o símbolo de ✓
    if (divBox.classList.contains('active')) {
        divBox.textContent = '✓';
        input.style.textDecoration = 'line-through';

    } else {
        divBox.textContent = '';
        input.style.textDecoration = 'none';
        input.readOnly = false;
    }
    })
})