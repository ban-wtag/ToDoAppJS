<<<<<<< HEAD
import { LIST } from "/js/addToTask.js";
import { list, loadMoreBtn, CLICK_EVENT, DELET, COMPLETE, EDIT } from "/js/constants.js";
=======
import { taskLIST } from "/js/addToTask.js";
import { UL_LIST, CLICK_EVENT, DELET, COMPLETE, EDIT } from "/js/constants.js";
>>>>>>> editTask
import completeToDo from "/js/markDone.js";
import editTask from "/js/editTask.js";

export default function removeToDos(element) {
  let index = taskLIST.findIndex((item) => {
    return item.id == element.id;
  });
  taskLIST[index].trash = true;
  element.parentNode.parentNode.removeChild(element.parentNode);
<<<<<<< HEAD
  LIST.splice(idx, 1);
  console.log("after splice list", LIST);
  if(LIST.length <4){
    loadMoreBtn.style.display = "none";
  }
=======
  taskLIST.splice(index, 1);
>>>>>>> editTask
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
