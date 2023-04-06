import { taskLIST } from "/js/addToTask.js";
import { UL_LIST, CLICK_EVENT, DELET } from "/js/constants.js";

function removeToDos(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  taskLIST[element.id].trash = true;
  taskLIST.splice(element.id, 1);
}

list.addEventListener(CLICK_EVENT, function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == DELET) {
    removeToDos(element);
  }
});
