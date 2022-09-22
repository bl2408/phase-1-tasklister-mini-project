const tasks = [];
const priorityStyles ={
  1: "red",
  2: "yellow",
  3: "green"
};

const form = document.querySelector("#create-task-form")
const todoEl = document.querySelector("#tasks");

form.addEventListener("submit", e=>{
  e.preventDefault();

  if(!newTaskDescription.value){ return; }

  const priority = !!newTaskPriority.value ? newTaskPriority.value : 1;

  tasks.push({
    value: newTaskDescription.value, 
    priority: parseInt(priority),
    date: newTaskDate.value,
  });

  form.reset();

  renderTasks();
});

function renderTasks(){
  const sortedTasks = [...tasks].sort((a,b)=> a.priority - b.priority);

  todoEl.innerHTML = "";

  sortedTasks.forEach(task=>{
    todoEl.innerHTML += `
      <li class="${priorityStyles[task.priority]} list-item">
        <div class="task">
          <div class="desc">${task.value}</div>
          <div class="date">${task.date}</div>
        </div>
        <div>
          <button class="btn-delete">x</button>
        </div>
      </li>`;
  });
  //update button events
  //delete
  document.querySelectorAll("li .btn-delete").forEach(btn =>{
    btn.addEventListener("click", e => {
      e.target.parentElement.parentElement.remove();
    });
  });
}


function todoRemove(e){
  const parent = e.target.parentElement;
  parent.remove();
}