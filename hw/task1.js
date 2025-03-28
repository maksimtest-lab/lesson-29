const buttons = document.querySelectorAll('button');
const container = document.getElementById('container');

console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        container.textContent = button.textContent;
    });
})
