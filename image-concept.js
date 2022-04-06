newScript = document.createElement("script");
newScript.src = "https://ifiles.ga/p/html2canvas.min.js";
newScript.onload = runstuff;
document.head.appendChild(newScript);
function runstuff() {
  let screenshotTarget = document.body.querySelector(".squares");
  html2canvas(screenshotTarget).then((canvas) => {
    const base64image = canvas.toDataURL("image/png");
    //window.open(base64image);
    //document.body.innerText = base64image;
    let link = document.createElement("a");
    link.innerText = "Download Image";
    link.href = base64image;
    link.setAttribute("download","septle-288.png");
    document.body.innerHTML = link.outerHTML;
  });
}
