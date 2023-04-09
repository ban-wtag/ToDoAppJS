import { UL_LIST, CLICK_EVENT, DELET, COMPLETE, EDIT } from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import editTask from "/js/editTask.js";

export default function removeTodos(element, taskList) {
  let index = taskList.findIndex((item) => {
    return item.id == element.id;
  });
  taskList[index].trash = true;
  element.parentNode.parentNode.removeChild(element.parentNode);
  taskList.splice(index, 1);
}
