// click
// touch
// mousemove
// scroll
// keydown
// DOMContentLoaded
// submit
// focus
// blur

// const button = document.getElementById('button');
// // button.onclick = () => {
// //     console.log('click 2');
// //     foo();
// // }

// // function foo() {
// //     console.log('click 3');
// // }

// button.addEventListener('click', (event) => {
//     console.log('click 2');
// });

// button.addEventListener('click', (event) => {
//     console.log('click 1');
//     console.log(event);
// });

// const block = document.getElementById('block');

// function getColor() {
//     const colors = ['red', 'green', 'blue'];
//     return colors[Math.floor(Math.random() * colors.length)];
// }

// block.addEventListener('click', (event) => {
//     console.log('block');
//     event.stopImmediatePropagation();
//     block.style.color = getColor();
// });


// const container = document.getElementById('container');
// const wrapper = document.getElementById('wrapper');


// container.addEventListener('click', (event) => {
//     console.log('container');
//     container.style.color = getColor();
// });

// wrapper.addEventListener('click', (event) => {
//     console.log('wrapper');
//     event.stopPropagation();
//     block.style.color = getColor();
// });

// const link = document.querySelector('.link');

// link.addEventListener('click', (event) => {
//     event.preventDefault();
//     console.log('link');
// });

// // --------------- Products ---------------

// const productList = document.getElementById('product-list');

// productList.addEventListener('click', (event) => {
//     console.log(event.target);
//     if (event.target.classList.contains('product-item')) {
//         event.target.style.color = 'red';
//     }
// });

// // const products = document.querySelectorAll('.product-item');

// const list = document.getElementById('todo-list');
// const buttonAddTodo = document.getElementById('button-add-todo');
// const taskNameField = document.getElementById('task-name-field');

// buttonAddTodo.addEventListener('click', () => {
//     const newTaskName = taskNameField.value;

//     const newTask = document.createElement('li');
//     const text = document.createElement('span');
//     const deleteButton = document.createElement('button');

//     deleteButton.textContent = 'x';

//     text.textContent = newTaskName;
//     deleteButton.onclick = () => {
//         list.removeChild(this.parentElement);
//     }

//     newTask.appendChild(text);
//     newTask.appendChild(deleteButton);
//     list.appendChild(newTask);

//     taskNameField.value = '';
// });

const button = document.createElement('button');
const span = document.createElement('span');
button.textContent = 'click';
span.textContent = 0;
let count = 0;

setTimeout(() => {
    button.addEventListener('click', (event) => {
        // console.log(Number(span.textContent) + 1);
        count += 1;
        // span.textContent = count;
        span.textContent = +span.textContent + 1;
        console.log(span.textContent);
    })
}, 0);

document.body.appendChild(button);
document.body.appendChild(span);
