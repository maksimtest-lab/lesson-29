// Создайте HTML-страницу с изображением. Напишите скрипт, который будет увеличивать изображение при наведении курсора на него и возвращать его в исходный размер при убирании курсора.

const image = document.getElementById('image');

image.style.transition = 'transform 0.5s ease-in-out';
image.style.maxWidth = '300px';

image.addEventListener('mouseover', () => {
    image.style.transform = 'scale(2)';
});

image.addEventListener('mouseout', () => {
    image.style.transform = 'scale(1)';
});
