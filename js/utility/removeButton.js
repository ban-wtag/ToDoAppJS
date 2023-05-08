export default function removeButton(element, ...attrs) {
  attrs.forEach((attr) => {
    element.removeChild(attr);
  });
}
