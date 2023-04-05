import {
  createTask,
  content,
  list,
  inputTask,
  input,
  addTask,
  trashInput,
  loadMoreBtn,
  today,
  COMPLETE,
  EDIT,
  DELET,
  CLICK_EVENT,
} from "/js/constants.js"; //named import

export let LIST = [];
export let id = 0;
let tarikh;
function addToDo(toDo, id, done, edit, trash) {
  // if (trash) {
  //   return;
  // }

  //Presenting Todays date in task list inside li tag
  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };

  tarikh = today.toLocaleDateString("en-us", options);
  const item = `<li class="item">                  
                  <p class="text">${toDo}</p>
                  <!-- data presenter div tag with date class  -->
                  <div class = "date" id = "${id}"> Created At:  ${tarikh} </div>
                  <img src= "icons/done.svg" job = "${COMPLETE}" id ="${id}"/>
                  <img src = "icons/edit.svg" job = "${EDIT}" id = "${id}"/>
                  <img src = "icons/delete.svg" job="${DELET}" id="${id}"/>
                  </li> `;

  const position = "afterbegin";
  list.insertAdjacentHTML(position, item);
}

createTask.addEventListener(CLICK_EVENT, function (event) {
  if (inputTask.className == "hide") {
    inputTask.classList.remove("hide");
  }
  input.focus();
});

addTask.addEventListener(CLICK_EVENT, function (event) {
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
    id++;
  }
  inputTask.classList.add("hide");
  input.value = null;
  if (LIST.length == 4) {
    loadMoreBtn.style.display = "block";
  }
});

trashInput.addEventListener(CLICK_EVENT, function (event) {
  inputTask.classList.add("hide");
  input.value = null;
});
