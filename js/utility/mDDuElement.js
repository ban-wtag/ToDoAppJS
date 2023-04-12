export default function createDurationElement(duration, element) {
  const el = document.createElement("div");
  el.classList.add("duration");
  el.textContent = `Completed in ${duration} days`;
  element.appendChild(el);
}
