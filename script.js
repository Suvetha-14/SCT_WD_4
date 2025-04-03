function proceedToPurpose() {
    document.getElementById('loginPage').classList.add('hidden');
    document.getElementById('purposePage').classList.remove('hidden');
}

function selectPurpose(purpose) {
    document.getElementById('purposePage').classList.add('hidden');
    document.getElementById('todoApp').classList.remove('hidden');
    document.getElementById('selectedPurpose').innerText = purpose;
}

function goBackToLogin() {
    document.getElementById('purposePage').classList.add('hidden');
    document.getElementById('loginPage').classList.remove('hidden');
}

function goBackToPurpose() {
    document.getElementById('todoApp').classList.add('hidden');
    document.getElementById('purposePage').classList.remove('hidden');
}

function addTask() {
    const taskInput = document.getElementById("taskInput").value;
    const taskTime = document.getElementById("taskTime").value;
    const taskPriority = document.getElementById("taskPriority").value;

    if (taskInput === '') {
        alert("Please enter a task");
        return;
    }

    const taskList = document.getElementById("taskList");
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    taskDiv.innerHTML = `
        <span>
            <b>${taskInput}</b> 
            <br> 
            <small>${taskTime ? taskTime : 'No Time Set'} | Priority: ${taskPriority}</small>
        </span>
        <div class="icons">
            <i class="fas fa-check" onclick="markComplete(this)"></i>
            <i class="fas fa-edit" onclick="editTask(this)"></i>
            <i class="fas fa-trash" onclick="deleteTask(this)"></i>
        </div>
    `;

    taskList.appendChild(taskDiv);

    document.getElementById("taskInput").value = '';
    document.getElementById("taskTime").value = '';
    document.getElementById("taskPriority").selectedIndex = 0;
}

function markComplete(element) {
    element.parentElement.parentElement.classList.toggle("completed");
}

function editTask(element) {
    const taskDiv = element.parentElement.parentElement;
    const taskText = taskDiv.querySelector("span").childNodes[0];
    const smallText = taskDiv.querySelector("small").innerHTML;

    const newTask = prompt("Edit your task:", taskText.textContent.trim());
    if (newTask) {
        taskText.innerHTML = `<b>${newTask}</b>`;
        taskDiv.querySelector("small").innerHTML = smallText;
    }
}

function deleteTask(element) {
    element.parentElement.parentElement.remove();
}