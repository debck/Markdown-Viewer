window.onload = function() {
  var showdown = require("showdown");
  var converter = new showdown.Converter();
  var input = document.getElementById("input");
  var markdownArea = document.getElementById("markdown");
  const copy = document.querySelector("#copy");
  const infotxt = document.querySelector(".infotext");

  var convertTextAreaToMarkdown = function() {
    var markdownText = input.value;
    html = converter.makeHtml(markdownText);
    markdownArea.innerHTML = html;
  };

  input.addEventListener("input", convertTextAreaToMarkdown);

  convertTextAreaToMarkdown();

  const copyToClipboard = e => {
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
    console.log(e);
    e.target.classList.remove("btn-info");
    e.target.classList.add("btn-success");
    e.target.textContent = "copied !!!";

    setTimeout(
      btn => {
        btn.classList.remove("btn-success");
        btn.classList.add("btn-info");
        btn.textContent = "copy";
      },
      1500,
      e.target
    );
  };

  copy.addEventListener("click", copyToClipboard);
};
