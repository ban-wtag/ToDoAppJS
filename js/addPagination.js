import { taskLIST } from "/js/addToTask.js";
import {
  CREATE_TASK_BUTTON,
  loadMoreBtn,
  showLessBtn,
  UL_LIST,
  CLICK_EVENT,
  EDIT,
  COMPLETE,
  DELET,
  PAGINATED_NO,
} from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import removeToDos from "/js/deleteTask.js";

//export default function addPagination() {
let currentItem = PAGINATED_NO;

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
  for (
    var i = currentItem;
    i < Math.min(currentItem + PAGINATED_NO, boxes.length);
    i++
  ) {
    boxes[i].style.display = "block";
  }
  currentItem += PAGINATED_NO;

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
    showLessBtn.style.display = "block";
  }
});

showLessBtn.addEventListener(CLICK_EVENT, function (e) {
  e.preventDefault();
  // hide three more items each time the button is clicked
  let visibleItems = PAGINATED_NO;
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
  currentItem = PAGINATED_NO;
});
//}
