const changeGridSize = document.querySelector("#change-grid-size");
const container = document.querySelector("#container");
const resetGridButton = document.querySelector("#reset-grid");
let promptValue = 16;

function makeGrid() {
  let oneSide = promptValue;
  let resolution = oneSide * oneSide;
  let containerWidth = container.clientWidth;
  for (let i = 0; i < resolution; i++) {
    const block = document.createElement("div");
    block.setAttribute("class", "block");
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
  if (event.type === "mouseover" && target.className === "block") {
    target.style.backgroundColor = "black";
    target.style.borderColor = "black";
  }
}

function resetGrid() {
  document.querySelectorAll(".block").forEach((block) => {
    block.style.removeProperty("background-color");
    block.style.removeProperty("border-color");
  });
}

addEventListener("load", makeGrid);
container.addEventListener("mouseover", draw);
changeGridSize.addEventListener("click", newSizeGrid);
resetGridButton.addEventListener("click", resetGrid);
