const toDoForm = document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";
const toDos = [];
function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text) {
    const ul = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document.createElement("span");
    const newid = toDos.length + 1;
    delBtn.innerText = "X";
    span.innerText = text;
    ul.appendChild(delBtn);
    ul.appendChild(span);
    toDoList.appendChild(ul);
    ul.id = newid;
    const toDooObj = {
        text: text,
        id: newid,
    };
    toDos.push(toDooObj);
    saveToDos();
}
function handleSubmit(event) {
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value = "";
}

function loadToDos() {
    const loadToDos = localStorage.getItem(TODOS_LS);
    if (loadToDos !== null) {
        const parsedToDos = JSON.parse(loadToDos);
        parsedToDos.forEach(function (toDo) {
            paintToDo(toDo.text);
        });
    }
}

function init() {
    loadToDos();
    toDoForm.addEventListener("submit", handleSubmit);
}
init();
