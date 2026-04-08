const rippleLayer = document.querySelector(".ripple-layer");

let lastTime = 0;
const delay = 35; // 너무 많이 생성되지 않도록 간격 조절

window.addEventListener("mousemove", (e) => {
  const now = Date.now();
  if (now - lastTime < delay) return;
  lastTime = now;

  createWaterRipple(e.clientX, e.clientY);
});

function createWaterRipple(x, y) {
  const drop = document.createElement("span");
  drop.className = "water-drop";
  drop.style.left = `${x}px`;
  drop.style.top = `${y}px`;

  const ring = document.createElement("span");
  ring.className = "water-ring";
  ring.style.left = `${x}px`;
  ring.style.top = `${y}px`;

  rippleLayer.appendChild(drop);
  rippleLayer.appendChild(ring);

  setTimeout(() => {
    drop.remove();
    ring.remove();
  }, 1000);
}