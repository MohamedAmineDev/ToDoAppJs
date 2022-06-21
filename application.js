const STORAGENAME = "tasks";
var tasks = JSON.parse(localStorage.getItem(STORAGENAME));
if (tasks == null) {
    tasks = new Array();
}
const items = document.getElementById('items');
const btns = Array();
var deletable = 0;
function displayItem(text) {
    let fullContainer = document.createElement('div');
    fullContainer.className = "bg-light p-3 border border-dark mb-3";
    fullContainer.id = "h" + Math.random(0, 1000);
    let container = document.createElement('div');
    let colleft = document.createElement('div');
    let colright = document.createElement('div');
    let btn = document.createElement('button');
    btn.className = "btn btn-danger";
    //<i class="fa fa-trash-o" style="font-size:24px"></i>
    let icone = document.createElement('i');
    icone.className = "fa fa-trash-o";
    icone.style = "font-size:20px";
    btn.appendChild(icone);
    btns.push(btn);
    container.className = "row";
    colleft.className = "col-11";
    colright.className = "col-1";
    let t = document.createTextNode(text);
    let p = document.createElement('p');
    p.appendChild(t);
    colleft.appendChild(p);
    colright.appendChild(btn);
    container.appendChild(colleft);
    container.appendChild(colright);
    fullContainer.appendChild(container);
    items.appendChild(fullContainer);
    btn.addEventListener('click', () => {
        deleteTask(fullContainer, text);
    });
    document.forms.f.task.value = "";
    tasks.push(text);
}
function saveItem() {
    let input = document.forms.f.task.value;
    if (input != "" && input != null) {
        displayItem(input);
        putDataInLocalStorage();
    }
    else {
        alert("You must fill the field task first !!!!");
    }
}
function putDataInLocalStorage() {
    localStorage.removeItem(STORAGENAME);
    localStorage.setItem(STORAGENAME, JSON.stringify(tasks));
}
function loadTask(text) {
    let fullContainer = document.createElement('div');
    fullContainer.className = "bg-light p-3 border border-dark mb-3";
    fullContainer.id = "h" + Math.random(0, 1000);
    let container = document.createElement('div');
    let colleft = document.createElement('div');
    let colright = document.createElement('div');
    let btn = document.createElement('button');
    btn.className = "btn btn-danger";
    let icone = document.createElement('i');
    icone.className = "fa fa-trash-o";
    icone.style = "font-size:20px";
    btn.appendChild(icone);
    container.className = "row";
    colleft.className = "col-11";
    colright.className = "col-1";
    let t = document.createTextNode(text);
    let p = document.createElement('p');
    p.appendChild(t);
    colleft.appendChild(p);
    colright.appendChild(btn);
    container.appendChild(colleft);
    container.appendChild(colright);
    fullContainer.appendChild(container);
    items.appendChild(fullContainer);
    btn.addEventListener('click', () => {
        deleteTask(fullContainer, text);
    });
}
function deleteTask(fullContainer, text) {
    let test = confirm("Do you really want to delete this task ?");
    console.log(test);
    if (test) {
        items.removeChild(fullContainer);
        let index = tasks.find(element => element == text);
        tasks.splice(index, 1);
        putDataInLocalStorage();
    }
}
console.log(tasks);
var i = 0;
while (i < tasks.length) {
    loadTask(tasks[i]);
    i++;
}