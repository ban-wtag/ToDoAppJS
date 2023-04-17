export default function calculateDuration(startDate) {
  const endDate = new Date().getTime();
  let duration = parseInt((endDate - startDate) / 86400000) + 1;
  return duration;
}
