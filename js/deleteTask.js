import { taskLIST } from "/js/addToTask.js";
import { CLICK_EVENT, DELET } from "/js/constants.js";

function removeToDos(element) {
  let index = taskLIST.findIndex((item) => {
    return item.id == element.id;
  });
  taskLIST[index].trash = true;
  element.parentNode.parentNode.removeChild(element.parentNode);
  taskLIST.splice(index, 1);
}

list.addEventListener(CLICK_EVENT, function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == DELET) {
    removeToDos(element);
  }
});
