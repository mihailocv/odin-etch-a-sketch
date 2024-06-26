const changeGridSize = document.querySelector("#change-grid-size");
const container = document.querySelector("#container");
const resetGridButton = document.querySelector("#reset-grid");
const blackPen = document.querySelector("#black-pen");
const rainbowPen = document.querySelector("#rainbow-pen");
const eraser = document.querySelector("#eraser");
const colorPicker = document.querySelector("#color-picker");
let promptValue = 16;
let penColor = "black";
colorPicker.value = "black";
let mouseDown = false;

function makeGrid() {
  let oneSide = promptValue;
  let resolution = oneSide * oneSide;
  let containerWidth = container.clientWidth;
  for (let i = 0; i < resolution; i++) {
    const block = document.createElement("div");
    block.setAttribute("class", "block");
    block.setAttribute("draggable", "false");
    block.style.width = containerWidth / oneSide + "px";
    block.style.height = containerWidth / oneSide + "px";
    container.appendChild(block);
  }
}

function newSizeGrid() {
  promptValue = +prompt(
    "How much blocks in row do you want? (minimum is 16 and maximum is 100!)",
  );
  if (promptValue <= 100 && promptValue >= 16) {
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    makeGrid();
  } else if (promptValue !== 0) {
    newSizeGrid();
  }
}

function draw(event) {
  let target = event.target;
  if (target.className === "block" && mouseDown === true) {
    target.style.backgroundColor = penColor;
    target.style.borderColor = penColor;
  }
}

function resetGrid() {
  document.querySelectorAll(".block").forEach((block) => {
    block.style.removeProperty("background-color");
    block.style.removeProperty("border-color");
  });
}

//Making default grid on page load
addEventListener("load", makeGrid);
//Change grid resolution button event
changeGridSize.addEventListener("click", newSizeGrid);
//Reset grid button event
resetGridButton.addEventListener("click", resetGrid);
//Click and drag drawing method
container.addEventListener("mousedown", (e) => {
  mouseDown = true;
  draw(e);
});
container.addEventListener("mouseup", () => {
  mouseDown = false;
});
container.addEventListener("mouseover", draw);
//Black pen button event
blackPen.addEventListener("click", () => {
  container.addEventListener("mouseover", () => {
    penColor = "black";
  });
});
//Raindow pen button event
rainbowPen.addEventListener("click", () => {
  container.addEventListener("mouseover", () => {
    let letters = "0123456789ABCDEF";
    penColor = "#";
    for (let i = 0; i < 6; i++) {
      penColor += letters[Math.floor(Math.random() * 16)];
    }
  });
});
//Eraser button event
eraser.addEventListener("click", () => {
  container.addEventListener("mouseover", () => {
    penColor = "";
  });
});
//Color picker input event
colorPicker.addEventListener("click", () => {
  container.addEventListener("mouseover", () => {
    penColor = colorPicker.value;
  });
});
