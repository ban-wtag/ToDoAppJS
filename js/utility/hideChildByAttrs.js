export default function hideChildByAttrs(element, ...attrs) {
  attrs.forEach((attr) => (element.querySelector(attr).style.display = "none"));
}
