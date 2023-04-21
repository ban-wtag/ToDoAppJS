import { MS_PER_DAY, TODAY } from "/js/constants.js";

export default function calculateDuration(taskStartDateString) {
  const startDate = Date.parse(taskStartDateString);
  const endDateString = TODAY.toISOString().slice(0, 10);
  const endDate = Date.parse(endDateString);

  if (startDate > endDate) {
    return -1;
  }

  return parseInt((endDate - startDate) / MS_PER_DAY) + 1;
}
