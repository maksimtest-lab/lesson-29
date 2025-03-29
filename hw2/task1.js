// Создайте HTML-форму с полем ввода текста и кнопкой "Отправить". Напишите скрипт, который будет выводить алерт с текстом, который пользователь ввел в поле ввода, при нажатии на кнопку "Отправить".

const form = document.getElementById('form');
const textInput = document.getElementById('textInput');
const button = document.getElementById('button');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    alert(textInput.value);
});