import {
  CREATE_TASK_BUTTON,
  CONTENT,
  UL_LIST,
  INPUT_TASK,
  INPUT,
  ADD_TASK,
  TRASH_INPUT,
  TODAY,
  COMPLETE,
  EDIT,
  DELET,
  CLICK_EVENT,
  HIDE,
  loadMoreBtn,
  showLessBtn,
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
  UL_LIST.insertAdjacentHTML(position, item);
}

CREATE_TASK_BUTTON.addEventListener(CLICK_EVENT, function (event) {
  if (INPUT_TASK.className === HIDE) {
    INPUT_TASK.classList.remove(HIDE);
  }
  INPUT.focus();

  let myList = document.getElementById(UL_LIST);
  console.log("LIST checking in paginaiton", taskLIST);
  if (myList != null) {
    console.log("myList", myList);
    for (let i = 0; i < 9; i++) {
      var nthChild = myList.children[i];
      nthChild.classList.add("active");
    }
  }
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
  INPUT_TASK.classList.add(HIDE);
  INPUT.value = null;
  if (taskLIST.length == 10) {
    loadMoreBtn.style.display = "block";
  }
});

TRASH_INPUT.addEventListener(CLICK_EVENT, function (event) {
  INPUT_TASK.classList.add(HIDE);
  INPUT.value = null;
});
