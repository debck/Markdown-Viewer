
window.onload = function() {
    var showdown = require("showdown");
    var converter = new showdown.Converter();
    var input = document.getElementById('input');
    var markdownArea = document.getElementById('markdown');   

    var convertTextAreaToMarkdown = function(){
        var markdownText = input.value;
        html = converter.makeHtml(markdownText);
        markdownArea.innerHTML = html;
    };

    input.addEventListener('input', convertTextAreaToMarkdown);

    convertTextAreaToMarkdown();
};