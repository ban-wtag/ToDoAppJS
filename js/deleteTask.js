import { PAGINATED_NO, loadMoreBtn } from "/js/constants.js";
export default function removeTodo(element, taskList) {
  const index = taskList.findIndex((item) => item.id == element.id);
  taskList[index].trash = true;
  element.parentNode.remove();
  taskList.splice(index, 1);
  if (taskList.length < PAGINATED_NO + 1) {
    loadMoreBtn.style.display = "none";
  }
}
