import { msPerDay } from "/js/constants.js";
export default function calculateDuration(taskStartDateString) {
  const startDate = new Date(taskStartDateString).getTime();
  const endDate = new Date().getTime();
  if (startDate > endDate) {
    return -1;
  }

  return parseInt((endDate - startDate) / msPerDay) + 1;
}
