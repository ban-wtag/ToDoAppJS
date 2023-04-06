import { taskLIST } from "/js/addToTask.js";
import { UL_LIST, CLICK_EVENT, DELET, COMPLETE, EDIT } from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import editTask from "/js/editTask.js";

export default function removeToDos(element) {
  let index = taskLIST.findIndex((item) => {
    return item.id == element.id;
  });
  taskLIST[index].trash = true;
  element.parentNode.parentNode.removeChild(element.parentNode);
  taskLIST.splice(index, 1);
}

UL_LIST.addEventListener(CLICK_EVENT, function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == DELET) {
    removeToDos(element);
  } else if (elementJob == COMPLETE) {
    completeToDo(element);
  } else if (elementJob == EDIT) {
    editTask(element);
  }
});
