import { LIST } from "/js/addToTask.js";
import {
  createTask,
  loadMoreBtn,
  showLessBtn,
  list,
  CLICK_EVENT,
  EDIT,
  COMPLETE,
  DELET,
} from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import removeToDos from "/js/deleteTask.js";

// console.log("LIST length", LIST.length);
// if (LIST.length >= 3) {
//   loadMoreBtn.style.display = "block";
// }

let currentItem = 9;

loadMoreBtn.addEventListener(CLICK_EVENT, function (event) {
  event.preventDefault();

  //   createTask.addEventListener(CLICK_EVENT, function (event) {
  //     const inputBox = event.target;
  //     const inputBoxId = inputBox.attributes.id.value;
  //     if (inputBoxId == "input") {
  //       console.log("miracle happened target caught");
  //       currentItem += 1;
  //       console.log("will happen disaster");
  //     }
  //   });

  let boxes = [...document.querySelectorAll(".container .content .item")];
  console.log("List length", boxes.length);
  for (var i = currentItem; i < Math.min(currentItem + 3, boxes.length); i++) {
    boxes[i].style.display = "block";
  }
  currentItem += 9;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
    showLessBtn.style.display = "block";
  }
});

showLessBtn.addEventListener(CLICK_EVENT, function () {
  // hide three more items each time the button is clicked
  let visibleItems = 9;
  let boxes = [...document.querySelectorAll(".container .content .item")];
  console.log("length", boxes.length);

  // hide list items that are not in the visible range
  boxes.forEach(function (item, index) {
    if (index < visibleItems) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  showLessBtn.style.display = "none";
  loadMoreBtn.style.display = "block";
});
