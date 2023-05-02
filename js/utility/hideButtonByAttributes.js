export default function hideButtonByAttributes(element, ...attrs) {
  attrs.forEach((attr) => (element.querySelector(attr).style.display = "none"));
}
