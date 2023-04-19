import {
  loadMoreBtn,
  showLessBtn,
  CLICK_EVENT,
  PAGINATED_NO,
} from "/js/constants.js";

let currentItem = PAGINATED_NO;
const container = document.getElementById("container");
const itemsToShow = PAGINATED_NO;
let visibleItems = itemsToShow;

loadMoreBtn.addEventListener(CLICK_EVENT, function (event) {
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

visibleItems = currentItem;

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
    loadMoreBtn.style.display = "block";
    showLessBtn.style.display = "none";
  } else if (visibleItems > itemsToShow) {
    loadMoreBtn.style.display = "none";
    showLessBtn.style.display = "block";
  } else {
    loadMoreBtn.style.display = "none";
    showLessBtn.style.display = "none";
  }
}
