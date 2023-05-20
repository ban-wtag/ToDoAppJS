import { PAGINATED_NO, LOAD_MORE_BUTTON } from "/js/constants.js";
import updateVisibileItems from "/js/addPagination.js";

export default function removeTodo(element, taskList, id) {
  const index = taskList.findIndex((item) => item.id === id);
  taskList[index].trash = true;
  element.remove();
  taskList.splice(index, 1);
  updateVisibileItems();
  if (taskList.length < PAGINATED_NO + 1) {
    LOAD_MORE_BUTTON.style.display = "none";
  }
}
