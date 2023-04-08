import { UL_LIST, CLICK_EVENT, DELET, COMPLETE, EDIT } from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import editTask from "/js/editTask.js";

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
  } else if (elementJob == COMPLETE) {
    completeToDo(element);
  } else if (elementJob == EDIT) {
    editTask(element);
  }
});
