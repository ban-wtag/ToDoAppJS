import { loadMoreBtn, PAGINATED_NO } from "/js/constants.js";

const itemsToShow = PAGINATED_NO;
let visibleItems = itemsToShow;

export default function updateVisibility() {
  let boxes = [...document.querySelectorAll(".container .content .item")];
  let noOfTaskPresent = Object.keys(boxes).length;

  boxes.forEach((item, index) => {
    if (index >= visibleItems) {
      item.style.display = "none";
    } else {
      item.style.display = "block";
    }
  });
  if (visibleItems >= noOfTaskPresent) {
    loadMoreBtn.style.display = "none";
  } else {
    loadMoreBtn.style.display = "block";
  }
}

updateVisibility();
