export default function createDurationElement(duration) {
  const taskCompleteDuration = document.createElement("div");
  taskCompleteDuration.classList.add("duration");
  taskCompleteDuration.textContent = `Completed in ${duration} days`;
  return taskCompleteDuration;
}
