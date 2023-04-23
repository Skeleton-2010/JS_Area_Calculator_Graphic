let inputWid = document.querySelector(".WidthInput");
let inputHei = document.querySelector(".HeightInput");
let calculateButton = document.querySelector(".OutputButton");
let rectangle = document.querySelector(".Rectangle");
let output = document.querySelector(".Output");
let area = 0;

function drawRectangle(wid, hei) {
  rectangle.style.width = wid * 8 + "px";
  rectangle.style.height = hei * 8 + "px";
}

calculateButton.addEventListener("click", () => {
  area = Number(inputWid.value) * Number(inputHei.value);
  output.textContent = area;
  if (area == 0) {
    output.style.color = "#dd3232";
    output.style.fontSize = "48px";
    output.style.backgroundColor = "#646496";
  } else {
    output.style.color = "#161632";
    output.style.fontSize = "24px";
    output.style.backgroundColor = "transparent";
    rectangle.style.border = "4px solid #484866";
  }

  drawRectangle(Number(inputWid.value), Number(inputHei.value));
});
