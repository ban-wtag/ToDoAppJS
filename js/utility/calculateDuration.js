import { MS_PER_DAY, TODAY } from "/js/constants.js";

export default function calculateDuration(startDate) {
  const endDate = Date.now();

  if (startDate > endDate) {
    return -1;
  }

  return parseInt((endDate - startDate) / MS_PER_DAY) + 1;
}
