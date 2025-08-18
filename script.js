const input = document.getElementById("task_input");
const add_btn = document.getElementById("add_btn");
const task_lists = document.getElementById("task_list");

add_btn.addEventListener("click", function () {
  if (input.value === "") return alert("type something");
  const li = document.createElement("li");
  const del_btn = document.createElement("button");
  const update_btn = document.createElement("button");
  li.innerHTML = `${input.value.trim()} <button class='delete'>delete</button>+
  <button class='update'>update</button>`;
  task_lists.appendChild(li);
  input.value = "";
});

input.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    if (input.value === "") return alert("type something");
    const li = document.createElement("li");
    const del_btn = document.createElement("button");
    li.innerHTML = `${input.value.trim()}  <button class='delete'>delete</button>
  <button class='update'>update</button>`;

    task_lists.appendChild(li);
    input.value = "";
  }
});
task_lists.addEventListener("click", function (event) {
  if (event.target.classList.contains("delete")) {
    if (event.target.parentElement.tagName === "LI") {
      event.target.parentElement.remove();
    }
  } else if (event.target.classList.contains("update")) {
    let li = event.target.parentElement;
    let currentText = li.firstChild.textContent.trim();

    const editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentText;

    li.firstChild.replaceWith(editInput);
    event.target.textContent = "save";
    event.target.classList.remove("update");
    event.target.classList.add("save");
  } else if (event.target.classList.contains("save")) {
    const parent = event.target.parentElement;
    const value = event.target.parentElement.firstChild.value;
    parent.firstChild.replaceWith(value);
    event.target.textContent = "update";
    event.target.classList.remove("save");
    event.target.classList.add("update");
  }
});
