//import { taskList } from "/js/addToTask.js";
import { CLICK_EVENT, DELET, UL_LIST, } from "/js/constants.js";

export default function removeTodos(element, taskList) {
  let index = taskList.findIndex((item) => {
    return item.id == element.id;
  });

  let afterRemovalList = taskList.filter((item) => {
    if (item.id == element.id) {
      item.trash = true;
      element.parentNode.parentNode.removeChild(element.parentNode);
      return false;
    }
    return true;
  });
  console.log("remove", afterRemovalList);
  taskList = afterRemovalList;
 
  console.log("remove array taskLIst", taskList);
}

