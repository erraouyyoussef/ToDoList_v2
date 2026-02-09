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

//add date and time
function dateTime() {
    const displayTime = document.getElementById('Time');
    const displayDate = document.getElementById('Date');
    const date = new Date();

    hours = date.getHours()
    minutes = date.getMinutes()
    secondes = date.getSeconds()
    displayTime.textContent = `${String(hours).padStart(2, '0')} : ${String(minutes).padStart(2, '0')} : ${String(secondes).padStart(2, '0')}`;

    day = date.getDate();
    month = date.getMonth() + 1;
    year = date.getFullYear()
    displayDate.textContent = `${String(day).padStart(2, '0')} / ${String(month).padStart(2, '0')} / ${year}`

}
setInterval(dateTime, 1000);


//change container background every 1s
let i = 0;
function bgChanges() {
    ;
    const color1 = 'linear-gradient(to top, rgba(0, 0, 255,0.15), rgba(255, 18, 129,0.15))'
    const color2 = 'linear-gradient(to right, rgba(0, 0, 255,0.15), rgba(255, 18, 129,0.15))'
    const color3 = 'linear-gradient(to bottom, rgba(0, 0, 255,0.15), rgba(255, 18, 129,0.15))'
    const color4 = 'linear-gradient(to left, rgba(0, 0, 255,0.15), rgba(255, 18, 129,0.15))'
    const colors = [color1, color2, color3, color4];

    container.style.backgroundImage = colors[i];
    i++
    if (i === colors.length) {
        i = 0;
    }
}


setInterval(bgChanges, 800);

