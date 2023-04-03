import { LIST } from "./addToTask.js"; //named import
import { list } from "./constants.js"; //named import

//Remove to do
//trashbox icon a click korle ja hobe list item a trash property true hobe ul tage theke li tag remove hobe
function removeToDos(element) {
  element.parentNode.parentNode.removeChild(element.parentNode);
  LIST[element.id].trash = true;
}

list.addEventListener("click", function (event) {
  const element = event.target; // return the clicked element inside list
  const elementJob = element.attributes.job.value; //complete or delete
  if (elementJob == "delete") {
    removeToDos(element);
  }
  //add item to localstorage (This code must be added everywhere the LIST array is updated)
  localStorage.setItem("TODO", JSON.stringify(LIST));
});
