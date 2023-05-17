export default function createDurationElement(duration) {
  const taskCompleteDurationElement = document.createElement("div");
  taskCompleteDurationElement.classList.add("duration");
  taskCompleteDurationElement.textContent = `Completed in ${duration} days`;

  return taskCompleteDurationElement;
}
