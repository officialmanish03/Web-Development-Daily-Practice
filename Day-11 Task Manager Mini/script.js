const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

let tasks = [];

// Add Task
addTaskBtn.addEventListener("click", () => {
  const task = taskInput.value.trim();
  if (task) {
    tasks.push(task);
    renderTasks();
    taskInput.value = "";
  }
});

// Render Task List
function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      ${task}
      <div>
        <button class="edit" onclick="editTask(${index})">Edit</button>
        <button onclick="deleteTask(${index})">Delete</button>
      </div>
    `;
    taskList.appendChild(li);
  });
}

// Edit Task
function editTask(index) {
  const newTask = prompt("Edit your task:", tasks[index]);
  if (newTask !== null && newTask.trim() !== "") {
    tasks.splice(index, 1, newTask); // Replace the task at the index
    renderTasks();
  }
}

// Delete Task
function deleteTask(index) {
  tasks.splice(index, 1); // Remove the task at the index
  renderTasks();
}
