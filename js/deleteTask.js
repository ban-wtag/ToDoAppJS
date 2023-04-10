export default function removeTodo(element, taskList) {
  const index = taskList.findIndex((item) => item.id == element.id);
  taskList[index].trash = true;
  element.parentNode.remove();
  taskList.splice(index, 1);
}
