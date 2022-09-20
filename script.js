const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", function (e) {
  const xPos = e.offsetX;
  const yPos = e.offsetY;
  const spanEl = document.createElement("span");
  spanEl.style.left = xPos + "px";
  spanEl.style.top = yPos + "px";
  const size = Math.random() * 100;
  spanEl.style.width = size;
  bodyEl.appendChild(spanEl);
  setTimeout(function () {
    spanEl.remove();
  }, 3000);
});
