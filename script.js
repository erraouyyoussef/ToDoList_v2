let container = document.querySelector('.container');
let inputFiled = document.getElementById('inputFiled');
let btn = document.getElementById('btn');
let ul = document.getElementById('ul');


function addTask() {
    let task = inputFiled.value
    if (task.trim() === '') {
        alert('ADD YOUR TASK FIRST');
    } else if (task.trim().length > 30) {
        alert('MAKE YOUR TASK A BIT BRIEF');
    } else {
        let li = document.createElement('li');
        //     li.innerHTML = `<p>✔</p> ${inputFiled.value}
        //  <span>⛔</span>`
        //     ul.appendChild(li);
        //     inputFiled.value = '';
        //     
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
btn.addEventListener('click', addTask)

inputFiled.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') {
        addTask()
    };

});


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



function saveData() {
    localStorage.setItem('tasks', ul.innerHTML)
}
function showData() {
    ul.innerHTML = localStorage.getItem('tasks')
}
showData()