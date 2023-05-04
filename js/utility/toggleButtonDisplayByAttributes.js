export default function toggleButtonDisplayByAttributes(element, ...attrs) {
  attrs.forEach((attr) => {
    if (element.querySelector(attr).style.display === "none") {
      element.querySelector(attr).style.display = "inline-block";
    } else {
      element.querySelector(attr).style.display = "none";
    }
  });
}
