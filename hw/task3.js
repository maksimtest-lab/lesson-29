// Создайте HTML-страницу с несколькими кнопками и абзацами. Напишите скрипт, который будет удалять абзац при клике на кнопку "Удалить".

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        button.parentElement.remove();
    });
});