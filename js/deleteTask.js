import { LIST } from "/js/addToTask.js";
import { list, CLICK_EVENT, DELET } from "/js/constants.js";

function removeToDos(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
  LIST.splice(element.id, 1);
}

list.addEventListener(CLICK_EVENT, function (event) {
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == DELET) {
    removeToDos(element);
  }
});
