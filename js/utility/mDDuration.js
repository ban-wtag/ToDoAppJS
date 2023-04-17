export default function calculateDuration(startDate) {
  const endDate = new Date().getTime();
  if(startDate>endDate){
    return -1;
  }
  return parseInt((endDate - startDate) / 86400000) + 1;
}
