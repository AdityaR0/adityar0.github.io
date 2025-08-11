const canvas = document.getElementById("codeCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const symbols = ["0", "1", "{", "}", "<", ">", "/", ";", "=", ":", "(", ")", "&&", "||", "=>"];
const particles = [];

const particleCount = 60;

for (let i = 0; i < particleCount; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 20 + 12,
    speedX: (Math.random() - 0.5) * 0.7,
    speedY: (Math.random() - 0.5) * 0.7,
    symbol: symbols[Math.floor(Math.random() * symbols.length)],
    opacity: Math.random() * 0.8 + 0.2
  });
}

function drawParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    ctx.fillStyle = `rgba(0, 80, 160, ${p.opacity})`;
    ctx.font = `${p.size}px monospace`;
    ctx.fillText(p.symbol, p.x, p.y);

    p.x += p.speedX;
    p.y += p.speedY;

    // Wrap around
    if (p.x > canvas.width) p.x = 0;
    if (p.x < 0) p.x = canvas.width;
    if (p.y > canvas.height) p.y = 0;
    if (p.y < 0) p.y = canvas.height;
  });

  requestAnimationFrame(drawParticles);
}

drawParticles();

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

window.onload = function () {
  loadHome(); // or loadIntro(), etc.
};
