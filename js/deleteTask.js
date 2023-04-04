import { LIST } from "/js/addToTask.js";
import { list, CLICK_EVENT, DELET, COMPLETE, EDIT } from "/js/constants.js";
import completeToDo from "/js/markDone.js";
import editTask from "/js/editTask.js";

export default function removeToDos(element) {
  console.log("parentNode id", element.id);

  let idx = LIST.findIndex((item) => {
    return item.id == element.id;
  });
  console.log("index", idx);
  LIST[idx].trash = true;
  console.log("check on element er trash id", LIST);

  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST.splice(idx, 1);
  console.log("after splice list", LIST);
}

list.addEventListener(CLICK_EVENT, function (event) {
  event.preventDefault();
  const element = event.target;
  const elementJob = element.attributes.job.value;
  if (elementJob == DELET) {
    removeToDos(element);
  } else if (elementJob == COMPLETE) {
    completeToDo(element);
  }
  if (elementJob == EDIT) {
    editTask(element);
  }
});
