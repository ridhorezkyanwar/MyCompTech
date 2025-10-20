const title = document.querySelector(".title");
const text = title.textContent;
title.textContent = "";
let i = 0;

function type() {
  if (i < text.length) {
    title.textContent += text.charAt(i);
    i++;
    setTimeout(type, 50);
  }
}

window.onload = type;

const colors = ["#76b900", "#00ffff", "#00ff9f"];
let j = 0;
setInterval(() => {
  title.style.textShadow = `0 0 20px ${colors[j]}, 0 0 40px ${colors[j]}`;
  j = (j + 1) % colors.length;
}, 1000);

document.addEventListener("click", (e) => {
  const glow = document.createElement("span");
  glow.style.position = "absolute";
  glow.style.left = e.pageX + "px";
  glow.style.top = e.pageY + "px";
  glow.style.width = "10px";
  glow.style.height = "10px";
  glow.style.borderRadius = "50%";
  glow.style.background = "rgba(0, 255, 150, 0.6)";
  glow.style.boxShadow = "0 0 20px #00ff9f";
  glow.style.pointerEvents = "none";
  glow.style.transition = "0.6s";
  document.body.appendChild(glow);
  setTimeout(() => {
    glow.style.opacity = "0";
    glow.style.transform = "scale(10)";
  }, 10);
  setTimeout(() => glow.remove(), 600);
});

const joinBtn = document.querySelector(".join-btn");
joinBtn.addEventListener("click", () => {
  joinBtn.style.boxShadow = "0 0 30px #00ff9f";
  setTimeout(() => {
    joinBtn.style.boxShadow = "0 0 10px rgba(0, 255, 150, 0.6)";
  }, 300);
  alert("Selamat datang di MyCompTech! Mulai Belajar teknologi sekarang!");
});
