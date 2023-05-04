export default function toggleButtonDisplayByAttributes(element, ...attrs) {
  console.log("k0 inside toggle");
  attrs.forEach((attr) => {
    if (element.querySelector(attr).style.display === "none") {
      element.querySelector(attr).style.display = "inline-block";
    } else {
      element.querySelector(attr).style.display = "none";
    }
  });
}
