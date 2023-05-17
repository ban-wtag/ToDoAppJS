export default function removeTodo(element, taskList, id) {
  const index = taskList.findIndex((item) => item.id === id);
  taskList[index].trash = true;
  element.remove();
  taskList.splice(index, 1);
}
