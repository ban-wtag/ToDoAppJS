import {
  loadMoreBtn,
  showLessBtn,
  CLICK_EVENT,
  PAGINATED_NO,
} from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import removeToDos from "/js/deleteTask.js";

let currentItem = PAGINATED_NO;

loadMoreBtn.addEventListener(CLICK_EVENT, function (event) {
  event.preventDefault();
  let boxes = [...document.querySelectorAll(".container .content .item")];
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
  let visibleItems = PAGINATED_NO;
  let boxes = [...document.querySelectorAll(".container .content .item")];
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
