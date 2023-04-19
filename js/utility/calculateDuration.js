import { MS_PER_DAY } from "/js/constants.js";

export default function calculateDuration(taskStartDateString) {
  const startDate = new Date(taskStartDateString).getTime();
  const endDate = new Date().getTime();
  if (startDate > endDate) {
    return -1;
  }

  return parseInt((endDate - startDate) / MS_PER_DAY) + 1;
}
