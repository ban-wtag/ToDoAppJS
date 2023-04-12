export default function calculateDuration(startdate) {
  const enddate = new Date().getTime();
  let duration = parseInt((enddate - startdate) / 86400000);
  duration += 1;
  return duration;
}
