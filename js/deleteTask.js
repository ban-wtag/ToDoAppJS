import {
  UL_LIST,
  CLICK_EVENT,
  DELETE,
  COMPLETE,
  EDIT,
  PAGINATED_NO,
  loadMoreBtn,
} from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import editTask from "/js/editTask.js";

export default function removeTodos(element, taskList) {
  let index = taskList.findIndex((item) => {
    return item.id == element.id;
  });
  taskList[index].trash = true;
  element.parentNode.parentNode.removeChild(element.parentNode);
  taskList.splice(index, 1);
  if (taskList.length < PAGINATED_NO + 1) {
    loadMoreBtn.style.display = "none";
  }
}
