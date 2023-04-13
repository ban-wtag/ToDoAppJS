export default function createDurationElement(duration, element) {
  const taskCompleteDuration = document.createElement("div");
  taskCompleteDuration.classList.add("duration");
  taskCompleteDuration.textContent = `Completed in ${duration} days`;
  element.appendChild(taskCompleteDuration);
}
