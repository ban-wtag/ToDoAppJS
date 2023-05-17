function addAllJsFile (jsFiles) {
    var src = document.createElement("script");
    src.setAttribute("type", "module");
    src.setAttribute("src", jsFiles);
    document.getElementsByTagName("body")[0].appendChild(src);
}
addAllJsFile("js/constants.js");
addAllJsFile("js/addToTask.js");
addAllJsFile("js/deleteTask.js.js");
addAllJsFile("js/markDone.js");
