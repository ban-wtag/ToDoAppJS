export default function removeTodo(element, taskList, id) {
  console.log("type of element id", typeof(id));
  const index = taskList.findIndex((item) => item.id.toString() ===id);
  taskList[index].trash = true;
  element.remove();
  taskList.splice(index, 1);
}
