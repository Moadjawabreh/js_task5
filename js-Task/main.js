let text1 = document.getElementById("task1");
let textContainer = document.getElementById("task1_container");

text1.addEventListener("click", function () {
  textContainer.style.justifyContent = "right";
});

let img = document.getElementById("img");
let select = document.getElementById("countries");

select.addEventListener("change", function () {
  var selectedValue = select.value;

  if (selectedValue === "Palestine") {
    img.src = "download.png";
  }

  if (selectedValue === "Jordan") {
    img.src = "JO-Jordan-Flag-icon.png";
  }

  if (selectedValue === "USA") {
    img.src = "OIP.jpeg";
  }
});

let input = document.getElementById("min6");
let input2 = document.getElementById("rp");
let label = document.getElementById("label1");
let label2 = document.getElementById("label2");
var inputval = "";
input.addEventListener("keydown", function () {
  inputval = input.value;
  if (inputval.length < 5) {
    label.innerHTML = "Too Short";
    label.style.color = "red";
  } else {
    label.innerHTML = "";
  }
});

input2.addEventListener("keydown", function () {
  if (inputval !== input2.value) {
    label2.innerHTML = "Dose not match!";
    label2.style.color = "red";
  } else {
    label2.innerHTML = "";
  }
});

let det = document.getElementById("details");
let show = document.getElementById("show");
let hide = document.getElementById("hide");
show.addEventListener("click", function () {
  det.style.display = "block";
});

hide.addEventListener("click", function () {
  det.style.display = "none";
});

let selectFont = document.getElementById("fontSelector");
let textArea = document.getElementById("textArea");
selectFont.addEventListener("change", function () {
  var selectedValue = selectFont.value;

  if (selectedValue === "Arial") {
    textArea.style.fontFamily = selectedValue;
  }

  if (selectedValue === "Verdana") {
    textArea.style.fontFamily = selectedValue;
  }

  if (selectedValue === "Times New Roman") {
    textArea.style.fontFamily = selectedValue;
  }
});

let selectSize = document.getElementById("fontSizeSelector");
selectSize.addEventListener("change", function () {
  var selectedValue = selectSize.value;

  if (selectedValue === "12") {
    textArea.style.fontSize = selectedValue + "px";
  }

  if (selectedValue === "16") {
    textArea.style.fontSize = selectedValue + "px";
  }

  if (selectedValue === "20") {
    textArea.style.fontSize = selectedValue + "px";
  }
});

let bold = document.getElementById("boldCheckbox");
bold.addEventListener("change", function () {
  if (bold.checked) {
    textArea.style.fontWeight = "bold";
  } else {
    textArea.style.fontWeight = "normal";
  }
});

let italic = document.getElementById("italicCheckbox");
italic.addEventListener("change", function () {
  if (italic.checked) {
    textArea.style.fontStyle = "italic";
  } else {
    textArea.style.fontStyle = "normal";
  }
});

let under = document.getElementById("underlineCheckbox");
under.addEventListener("change", function () {
  if (under.checked) {
    textArea.style.textDecoration = "underline";
  } else {
    textArea.style.textDecoration = "none";
  }
});

let box = document.getElementById("box");
function changeColor() {
  let colorRgb = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
    Math.random() * 256
  )}, ${Math.floor(Math.random() * 256)})`;

  box.style.backgroundColor = colorRgb;
}
setInterval(changeColor, 2000);
