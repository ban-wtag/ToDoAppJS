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

export default function updateVisibility() {
  let boxes = [...document.querySelectorAll(".container .content .item")];

  console.log("boxes length", Object.keys(boxes).length);
  for (
    var i = 0;
    i < Math.min(PAGINATED_NO + 1, Object.keys(boxes).length);
    i++
  ) {
    if (i < visibleItems) {
      boxes[i].style.display = "block";
    } else {
      boxes[i].style.display = "none";
    }
  }

  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
    showLessBtn.style.display = "block";
  }
}
