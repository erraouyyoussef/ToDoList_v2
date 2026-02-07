//calling all tagNames i'll need
let container = document.querySelector('.container');
let inputFiled = document.getElementById('inputFiled');
let ul = document.getElementById('ul');
let form = document.getElementById('form');



//it's helps to use add button and key 'Enter' to do the action
form.addEventListener('submit', function (e) {
    e.preventDefault();
    addTask();
})


//this function for creating a list and it's chilldern 'P' and 'SPAN'
function addTask() {
    let task = inputFiled.value
    if (task.trim() === '') {
        alert('ADD YOUR TASK FIRST');
    } else if (task.trim().length > 40) {
        alert('MAKE YOUR TASK A BIT BRIEF');
    } else {
        let li = document.createElement('li');
        let p = document.createElement('p');
        p.textContent = '✖'

        let text = document.createTextNode(task);
        let span = document.createElement('span');
        span.textContent = '⛔'
        li.append(p, text, span);
        ul.appendChild(li);
        inputFiled.value = ''
        saveData()
    }
};


//here i target the ul tag for applying my functions to it's chilldern
ul.addEventListener('click', function (e) {

    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove()
        saveData()
    };
    if (e.target.tagName === 'P') {
        let li = e.target.parentElement;

        li.classList.toggle('checked');

        if (li.classList.contains('checked')) {
            e.target.textContent = '✔';

        } else {
            e.target.textContent = '✖';


        }
        saveData();
    }

});




//those functions for storing tasks and thier mood if cheaked or not
function saveData() {
    localStorage.setItem('tasks', ul.innerHTML)
}
function showData() {
    ul.innerHTML = localStorage.getItem('tasks')
}
showData()