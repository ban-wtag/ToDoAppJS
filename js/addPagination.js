import {
  LOAD_MORE_BUTTON,
  SHOW_LESS_BUTTON,
  CLICK_EVENT,
  PAGINATED_NO,
} from "/js/constants.js";

let currentItem = PAGINATED_NO;
const container = document.getElementById("container");
const itemsToShow = PAGINATED_NO;
let visibleItems = itemsToShow;

LOAD_MORE_BUTTON.addEventListener(CLICK_EVENT, function (event) {
  event.preventDefault();
  let boxes = [...document.querySelectorAll(".container .content .item")];
  let noOfTaskPresent = Object.keys(boxes).length;
  for (
    var i = currentItem;
    i < Math.min(currentItem + PAGINATED_NO, noOfTaskPresent);
    i++
  ) {
    boxes[i].style.display = "block";
  }
  currentItem += PAGINATED_NO;

  if (currentItem >= noOfTaskPresent) {
    LOAD_MORE_BUTTON.style.display = "none";
    SHOW_LESS_BUTTON.style.display = "block";
  }
});

SHOW_LESS_BUTTON.addEventListener(CLICK_EVENT, function (e) {
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

  SHOW_LESS_BUTTON.style.display = "none";
  LOAD_MORE_BUTTON.style.display = "block";
  currentItem = PAGINATED_NO;
});

export default function updateVisibleItems() {
  let boxes = [...document.querySelectorAll(".container .content .item")];
  let noOfTaskPresent = Object.keys(boxes).length;
  visibleItems = Math.min(currentItem, noOfTaskPresent);

  boxes.forEach((item, index) => {
    if (index < visibleItems) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });

  if (visibleItems < noOfTaskPresent) {
    LOAD_MORE_BUTTON.style.display = "block";
    SHOW_LESS_BUTTON.style.display = "none";
  } else if (visibleItems > itemsToShow) {
    LOAD_MORE_BUTTON.style.display = "none";
    SHOW_LESS_BUTTON.style.display = "block";
  } else {
    LOAD_MORE_BUTTON.style.display = "none";
    SHOW_LESS_BUTTON.style.display = "none";
  }
}
