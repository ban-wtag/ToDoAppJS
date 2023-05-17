export default function createErrorMessageElement() {
  const errorMessageElement = document.createElement("div");
  errorMessageElement.textContent = "Please add task description.";
  errorMessageElement.style.color = "red";
  errorMessageElement.id = "error-message";
  return errorMessageElement;
}
