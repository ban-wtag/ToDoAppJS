export default function displayButtonByAttributes(element, ...attrs) {
  attrs.forEach(
    (attr) => (element.querySelector(attr).style.display = "inline-block")
  );
}
