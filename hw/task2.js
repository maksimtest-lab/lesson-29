// Создайте форму с полем ввода и кнопкой "Добавить". При вводе текста в поле и нажатии на кнопку "Добавить", новый элемент должен добавляться в список (ul)

const form = document.getElementById('form');
const textInput = document.getElementById('textInput');
const button = document.getElementById('button');
const items = document.getElementById('items');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newItem = document.createElement('li');
    newItem.textContent = textInput.value;
    items.appendChild(newItem);

    textInput.value = '';
});