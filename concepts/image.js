document.body.appendChild(document.createElement('script')).src='concepts/html2canvas.min.js';

window.septle.saveImage = {
  run: function(listName) {
    window.septle.listName = listName;
    window.septle.new();
    document.body.querySelector(".squares").classList.add("photo");
    document.querySelectorAll(".squares td").forEach(item => {item.innerHTML = "";});
    document.body.querySelector(".squares").classList.remove("fail");
    let screenshotTarget = document.body.querySelector(".squares");
    html2canvas(screenshotTarget).then((canvas) => {
      this.finalPicture(canvas,listName);
    });
  },
  finalPicture: function(canvas,listName) {
    console.log(canvas)
    const base64image = canvas.toDataURL("image/png");
    //window.open(base64image);
    //document.body.innerText = base64image;
    let link = document.createElement("a");
    link.innerText = "Download Image";
    link.href = base64image;
    let offset = window.septle.getWord()["visible"];
    let name = {"septle":"Septle","nytimes":"Wordle","six":"Septle-Bonus"}[listName];
    link.setAttribute("download",name + "-" + offset + ".png");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    //document.body.innerHTML = link.outerHTML;
  }
}
