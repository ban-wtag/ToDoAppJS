import { taskLIST } from "/js/addToTask.js";
import {
  UL_LIST,
  CLICK_EVENT,
  DELET,
  COMPLETE,
  EDIT,
  PAGINATED_NO,
} from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import editTask from "/js/editTask.js";

export default function removeTodos(element, taskList) {
  let index = taskList.findIndex((item) => {
    return item.id == element.id;
  });
  taskList[index].trash = true;
  element.parentNode.parentNode.removeChild(element.parentNode);
  taskLIST.splice(index, 1);
  if (taskLIST.length < PAGINATED_NO + 1) {
    loadMoreBtn.style.display = "none";
  }
}
