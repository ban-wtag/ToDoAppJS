import { CLICK_EVENT, DELET, UL_LIST } from "/js/constants.js";

function removeTodos(element) {
  let index = taskList.findIndex((item) => {
    return item.id == element.id;
  });

  const afterRemovalList = taskList.filter((item) => {
    if (item.id == element.id) {
      item.trash = true;
      element.parentNode.parentNode.removeChild(element.parentNode);
      return false;
    }
    return true;
  });
  taskList = afterRemovalList;
}

UL_LIST.addEventListener(CLICK_EVENT, function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == DELET) {
    removeTodos(element);
  }
});
