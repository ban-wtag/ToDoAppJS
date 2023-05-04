export default function createButton(type, ICON, dataJob, elementId) {
  const Button = document.createElement(type);
  Button.setAttribute("src", ICON);
  Button.setAttribute("data-job", dataJob);
  Button.setAttribute("id", elementId);
  Button.setAttribute("style", "display: inline-block");
  return Button;
}
