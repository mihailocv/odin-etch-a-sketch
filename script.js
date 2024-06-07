let oneSide = 64;
let resolution = oneSide * oneSide;

const container = document.querySelector("#container");
let containerWidth = container.clientWidth;

for (let i = 0; i < resolution; i++) {
  const block = document.createElement("div");
  block.setAttribute("class", "block");
  block.setAttribute("id", "" + i);
  block.style.width = containerWidth / oneSide + "px";
  block.style.height = containerWidth / oneSide + "px";
  container.appendChild(block);
}

container.addEventListener("mouseover", (e) => {
  let target = e.target;
  if (e.type === "mouseover" && target.className === "block") {
    target.style.backgroundColor = "black";
  }
});
