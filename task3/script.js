document.getElementById('todo-form').addEventListener('submit', function(e) {
  e.preventDefault();

  const titleInput = document.getElementById('title');
  const descriptionInput = document.getElementById('description');
  const todoList = document.getElementById('todo-list');

  const title = titleInput.value.trim();
  const description = descriptionInput.value.trim();

  if (!title || !description) {
    // HTML5 'required' handles validation automatically
    return;
  }

  const row = document.createElement('tr');

  row.innerHTML = `
    <td>${title}</td>
    <td>${description}</td>
    <td><button class="delete-btn">X</button></td>
  `;

  row.querySelector('.delete-btn').addEventListener('click', function() {
    row.remove();
  });

  todoList.appendChild(row);

  // Clear inputs
  titleInput.value = '';
  descriptionInput.value = '';
});
