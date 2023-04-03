//create button
export const createTask = document.getElementById("createButton");

//content  task list
export const content = document.querySelector(".content");
export const list = document.getElementById("list");

//Input BOX: add to task input box, add task button, trash button
export const inputTask = document.getElementById("inputTask");
export const input = document.getElementById("input");
export const addTask = document.getElementById("addTaskButton");
export const trashInput = document.querySelector(".trashInput");

//required variabls
export let LIST = [];
export let id = 0;
export let today;
export let tarikh;

function addToDo(toDo, id, done, edit, trash) {
  if (trash) {
    return;
  }

  //Presenting Todays date in task list inside li tag
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  today = new Date();
  tarikh = today.toLocaleDateString("en-us", options);

  const item = `<li class="item">                  
                  <p class="text">${toDo}</p>
                  <!-- data presenter div tag with date class  -->
                  <div class = "date" id = "${id}"> Created At:  ${tarikh} </div>
                  <img src= "icons/done.svg" job = "complete" id ="${id}"/>
                  <img src = "icons/edit.svg" job = "edit" id = "${id}"/>
                  <img src = "icons/delete.svg" job="delete" id="${id}"/>
                  </li> `;

  const position = "beforeend";
  list.insertAdjacentHTML(position, item);
}

createTask.addEventListener("click", function (event) {
  if (inputTask.className == "hide") {
    inputTask.classList.remove("hide");
  }
  input.focus();
});

addTask.addEventListener("click", function (event) {
  const toDo = input.value;
  if (toDo) {
    addToDo(toDo, id, false, false, false);

    LIST.push({
      name: toDo,
      id: id,
      done: false,
      edit: false,
      trash: false,
    });
    localStorage.setItem("TODO", JSON.stringify(LIST)); //add item to localstorage
    id++;
  }
  inputTask.classList.add("hide");
  input.value = "";
});

// addTask er pashestrash button addTask interface hide kore dibe
trashInput.addEventListener("click", function (event) {
  inputTask.classList.add("hide");
  input.value = "";
});
