const body = document.body;
const tblUbahWarna = document.getElementById("tblUbahWarna");

tblUbahWarna.addEventListener("click", function () {
  //   alert("Debug Test");
  //   body.style.background = "lightblue";
  body.classList.toggle("togglebackground");
});

const tblRandom = document.createElement("input");
const teksTombol = document.createTextNode("Random!");
tblRandom.appendChild(teksTombol);

tblRandom.setAttribute("type", "button");
tblRandom.setAttribute("value", "Random Warna!");
tblUbahWarna.after(tblRandom);
tblRandom.addEventListener("click", function () {
  //   body.style.background = "cyan";
  let r = Math.round(Math.random() * 255 + 1);
  let g = Math.round(Math.random() * 255 + 1);
  let b = Math.round(Math.random() * 255 + 1);

  body.style.background = "rgb(" + r + " , " + g + " , " + b + ")";
  //   console.log(randomColor)
});

const slideMerah = document.querySelector("input[name=RedSlider]");
const slideHijau = document.querySelector("input[name=GreenSlider]");
const slideBiru = document.querySelector("input[name=BlueSlider]");

slideMerah.addEventListener("input", function () {
  rsValue = slideMerah.value;
  gsValue = slideHijau.value;
  bsValue = slideBiru.value;
  //   console.log(rsValue, gsValue, bsValue);
  body.style.background =
    "rgb(" + rsValue + " , " + gsValue + " , " + bsValue + ")";
});

slideHijau.addEventListener("input", function () {
  rsValue = slideMerah.value;
  gsValue = slideHijau.value;
  bsValue = slideBiru.value;
  //   console.log(rsValue, gsValue, bsValue);
  body.style.background =
    "rgb(" + rsValue + " , " + gsValue + " , " + bsValue + ")";
});

slideBiru.addEventListener("input", function () {
  rsValue = slideMerah.value;
  gsValue = slideHijau.value;
  bsValue = slideBiru.value;
  //   console.log(rsValue, gsValue, bsValue);
  body.style.background =
    "rgb(" + rsValue + " , " + gsValue + " , " + bsValue + ")";
});

body.addEventListener("mousemove", function (e) {
  //posisi mouse
  const xpos = Math.round((e.clientX / window.innerWidth) * 255);
  const ypos = Math.round((e.clientY / window.innerWidth) * 255);
  //   const bValue = Math.round(Math.random() * 255 + 1);
  //   console.log(e.clientX);
  //   console.log(xpos);
  //changing backgroundcolor
  body.style.background = "rgb(" + xpos + " , " + ypos + " , 100)";
});
