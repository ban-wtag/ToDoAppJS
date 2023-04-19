import { PAGINATED_NO, loadMoreBtn } from "/js/constants.js";
import updateVisibileItems from "/js/addPagination.js";

export default function removeTodo(element, taskList, id) {
  const index = taskList.findIndex((item) => item.id === id);
  taskList[index].trash = true;
  element.remove();
  taskList.splice(index, 1);
  updateVisibileItems();
  if (taskList.length < PAGINATED_NO + 1) {
    loadMoreBtn.style.display = "none";
  }
}
