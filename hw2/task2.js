// Создайте HTML-страницу с элементом select и кнопкой "Показать выбранное". Напишите скрипт, который будет выводить выбранное значение из выпадающего списка при клике на кнопку "Показать выбранное"

const select = document.getElementById('select');
const button = document.getElementById('button');

button.addEventListener('click', () => {
    alert(select.value);
});