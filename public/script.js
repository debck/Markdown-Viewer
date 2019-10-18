window.onload = function() {
  var showdown = require("showdown");
  var converter = new showdown.Converter();
  var input = document.getElementById("input");
  var markdownArea = document.getElementById("markdown");
  const copy = document.querySelector("#copy");

  var convertTextAreaToMarkdown = function() {
    var markdownText = input.value;
    html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };

  input.addEventListener("input", convertTextAreaToMarkdown);

  convertTextAreaToMarkdown();

  const copyToClipboard = () => {
    const el = document.createElement("textarea");
    const str = input.value;
    el.value = str;
    el.setAttribute("readonly", "");
    el.style.position = "absolute";
    el.style.left = "-9999px";
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
  };

  copy.addEventListener("click", copyToClipboard);
};
