fetch("https://jsonplaceholder.typicode.com/todos")
  .then((response) => response.json())
  .then((json) => createTodos(json));

function createTodos(todos) {
  const container = document.getElementsByClassName("todos-container")[0];
  //   const t = container.querySelector(".todos-container template");
  const t = container.getElementsByTagName("template")[0];

  todos.forEach((todo) => {
    let content = t.content.cloneNode(true);
    let name = content.querySelector(".name_placeholder");
    let age = content.querySelector(".age_placeholder");
    name.innerText = todo.title;
    age.textContent = todo.completed;
    container.append(content);
  });
}
