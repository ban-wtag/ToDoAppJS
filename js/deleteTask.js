//import { taskList } from "/js/addToTask.js";
import { CLICK_EVENT, DELETE, UL_LIST } from "/js/constants.js";

export default function removeTodos(element, taskList) {
  let index = taskList.findIndex((item) => {
    return item.id == element.id;
  });
  taskList[index].trash = true;
  element.parentNode.parentNode.removeChild(element.parentNode);
  taskList.splice(index, 1);
}
