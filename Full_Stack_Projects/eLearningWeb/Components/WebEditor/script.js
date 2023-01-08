let htmlEditor, cssEditor, javascriptEditor;

htmlEditor = ace.edit("html-editor");
htmlEditor.setTheme("ace/theme/xcode");
htmlEditor.session.setMode("ace/mode/html");
htmlEditor.setValue(`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <title>Websera Code Editor</title>
</head>
<body>
    <h1>Welcome to Websera</h1>
</body>
</html>`);

// Initialize the CSS editor
cssEditor = ace.edit("css-editor");
cssEditor.setTheme("ace/theme/xcode");
cssEditor.session.setMode("ace/mode/css");
cssEditor.setValue(`* {
    margin: 0;
    padding: 0;
}
body {
    padding: 20px;
    font-family: Arial;
}`);

// Initialize the JavaScript editor
javascriptEditor = ace.edit("javascript-editor");
javascriptEditor.setTheme("ace/theme/xcode");
javascriptEditor.session.setMode("ace/mode/javascript");
javascriptEditor.setValue(`var h = document.getElementsByTagName("h1")[0];
h.style.color = "#C800A4";`);

// Update the preview when the editor value changes
htmlEditor.on("change", updatePreview);
cssEditor.on("change", updatePreview);
javascriptEditor.on("change", updatePreview);

// Initialize the editors and preview when the page loads
updatePreview();
function updatePreview() {
    // Get the contents of the HTML, CSS, and JavaScript editors
    let html = htmlEditor.getValue();
    let css = cssEditor.getValue();
    let javascript = javascriptEditor.getValue();

    // Update the preview iframe with the new code
    let preview = document.getElementById("preview");
    let previewDoc = preview.contentDocument || preview.contentWindow.document;
    previewDoc.open();
    previewDoc.write(html);
    previewDoc.close();

    // Inject the CSS and JavaScript into the preview
    let cssElement = document.createElement("style");
    cssElement.innerHTML = css;
    previewDoc.head.appendChild(cssElement);

    let javascriptElement = document.createElement("script");
    javascriptElement.innerHTML = javascript;
    previewDoc.head.appendChild(javascriptElement);
}

var win;

function openLivePreview() {
    var preview = document.getElementById("preview");
    var html = preview.contentWindow.document.documentElement.outerHTML;
    if (!win || win.closed) {
        win = window.open();
    }
    win.document.open();
    win.document.write(html);
    win.document.close();
}

function updateLivePreview() {
    var preview = document.getElementById("preview");
    var html = preview.contentWindow.document.documentElement.outerHTML;
    if (!(!win || win.closed)) {
        win.document.open();
        win.document.write(html);
        win.document.close();
    }
}


// Update the live output when the editor value change
htmlEditor.on("change", updateLivePreview);
cssEditor.on("change", updateLivePreview);
javascriptEditor.on("change", updateLivePreview);

var isPreviewVisible = true;

function togglePreview() {
    var preview = document.getElementById("output");
    if (isPreviewVisible) {
        preview.style.display = "none";
    } else {
        preview.style.display = "block";
    }
    isPreviewVisible = !isPreviewVisible;
}
document.getElementById("toggle-preview").addEventListener("click", togglePreview);
document.getElementById("open-output").addEventListener("click", openLivePreview);