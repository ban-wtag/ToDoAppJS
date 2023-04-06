import {
<<<<<<< HEAD
  createTaskButton,
  content,
  list,
  inputTask,
  input,
  addTask,
  trashInput,
  loadMoreBtn,
  today,
=======
  CREATE_TASK_BUTTON,
  CONTENT,
  UL_LIST,
  INPUT_TASK,
  INPUT,
  ADD_TASK,
  TRASH_INPUT,
  TODAY,
>>>>>>> editTask
  COMPLETE,
  EDIT,
  DELET,
  CLICK_EVENT,
  HIDE,
} from "/js/constants.js"; //named import

export let taskLIST = [];
export let id = 0;
let dateString;
function addToDo(taskName, id, done, edit, trash) {
  // if (trash) {
  //   return;
  // }

  const options = {
    day: "numeric",
    month: "numeric",
    year: "numeric",
  };
  dateString = TODAY.toLocaleDateString("en-us", options);
  const item = `<li class="item">                  
                  <p class="text">${taskName}</p>
                  <div class = "date" id = "${id}"> Created At:  ${dateString} </div>
                  <img src= "icons/done.svg" job = "${COMPLETE}" id ="${id}"/>
                  <img src = "icons/edit.svg" job = "${EDIT}" id = "${id}"/>
                  <img src = "icons/delete.svg" job="${DELET}" id="${id}"/>
                  </li> `;

  const position = "afterbegin";
<<<<<<< HEAD
  list.insertAdjacentHTML(position, item);
  console.log("list element while adding", list);
=======
  UL_LIST.insertAdjacentHTML(position, item);
>>>>>>> editTask
}

CREATE_TASK_BUTTON.addEventListener(CLICK_EVENT, function (event) {
  if (INPUT_TASK.className === HIDE) {
    INPUT_TASK.classList.remove(HIDE);
  }
<<<<<<< HEAD
  input.focus();

  let myList = document.getElementById(list);
  console.log("LIST checking in paginaiton", LIST);
  if (myList != null) {
    console.log("myList", myList);
    for (let i = 0; i < 9; i++) {
      var nthChild = myList.children[i];
      nthChild.classList.add("active");
    }
  }
=======
  INPUT.focus();
>>>>>>> editTask
});

ADD_TASK.addEventListener(CLICK_EVENT, function (event) {
  const taskName = INPUT.value;
  if (taskName) {
    addToDo(taskName, id, false, false, false);

    taskLIST.push({
      name: taskName,
      id: id,
      done: false,
      edit: false,
      trash: false,
    });
    id += 1;
  }
<<<<<<< HEAD
  inputTask.classList.add(HIDE);
  input.value = null;
  if (LIST.length == 10) {
    loadMoreBtn.style.display = "block";
  }
=======
  INPUT_TASK.classList.add(HIDE);
  INPUT.value = null;
>>>>>>> editTask
});

TRASH_INPUT.addEventListener(CLICK_EVENT, function (event) {
  INPUT_TASK.classList.add(HIDE);
  INPUT.value = null;
});
