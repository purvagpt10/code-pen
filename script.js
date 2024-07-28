function run() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
    let jsCode = document.getElementById("js-code").value;
    
    let output = document.getElementById("output");
    let documentContent = htmlCode + cssCode + "<script>(function(){" + jsCode + "})();<\/script>";

    output.contentDocument.open();
    output.contentDocument.write(documentContent);
    output.contentDocument.close();
}

