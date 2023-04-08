//import { taskList } from "/js/addToTask.js";
import { CLICK_EVENT, DELET, UL_LIST } from "/js/constants.js";
taskList;
function removeTodos(element) {
  let index = taskList.findIndex((item) => {
    return item.id == element.id;
  });
  taskList[index].trash = true;
  element.parentNode.parentNode.removeChild(element.parentNode);

const afterRemovalList = taskList.filter(item => item.id !== element.id);
taskList = afterRemovalList;
}

UL_LIST.addEventListener(CLICK_EVENT, function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == DELET) {
    removeTodos(element);
  }
});
