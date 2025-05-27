// ========== GREETING ========== //
const name = localStorage.getItem('travelerName');
document.getElementById('welcomeText').textContent = `Hi ${name}, let's plan your trip!`;

// ========== TRAVEL PLAN SECTION ========== //
const planForm = document.getElementById('planForm');
const planList = document.getElementById('planList');

planForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const destination = document.getElementById('destination').value;
  const date = document.getElementById('travelDate').value;

  const li = document.createElement('li');
  li.innerHTML = `
    <strong>${destination}</strong><br>Travel in: ${date}
    <br>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  `;

  addPlanActions(li);
  planList.appendChild(li);
  planForm.reset();
});

function addPlanActions(item) {
  item.querySelector('.edit-btn').onclick = function () {
    const text = item.querySelector('strong').textContent;
    const dateText = item.innerText.match(/Travel in: (.+)/)[1];
    const newDestination = prompt("Update destination:", text);
    const newDate = prompt("Update date (YYYY-MM):", dateText);
    if (newDestination && newDate) {
      item.innerHTML = `
        <strong>${newDestination}</strong><br>Travel in: ${newDate}
        <br>
        <button class="edit-btn">Edit</button>
        <button class="delete-btn">Delete</button>
      `;
      addPlanActions(item);
    }
  };

  item.querySelector('.delete-btn').onclick = function () {
    item.remove();
  };
}

// ========== TO-DO SECTION ========== //
const todoForm = document.getElementById('todoForm');
const todoInput = document.getElementById('todoInput');
const todoList = document.getElementById('todoList');

todoForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const task = todoInput.value.trim();
  if (task) {
    const li = document.createElement('li');
    li.innerHTML = `
      <input type="checkbox">
      <span>${task}</span>
      <button class="delete-btn">Delete</button>
    `;

    const checkbox = li.querySelector('input[type="checkbox"]');
    checkbox.onchange = function () {
      li.classList.toggle('done');
    };

    li.querySelector('.delete-btn').onclick = function () {
      li.remove();
    };

    todoList.appendChild(li);
    todoForm.reset();
  }
});
