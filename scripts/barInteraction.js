const canvas = document.getElementById("vialCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth * 0.9;
canvas.height = 40;

// particle and boundary set up
const boundary = canvas.width * 0.85;
const particleCount = 200;
const particles = [];
const maxParticleRadius = 80;
const minParticleRadius = 40;
const friction = 0.98;

const cols = Math.sqrt(particleCount);
const rows = Math.sqrt(particleCount);
const gapX = boundary / cols;
const gapY = canvas.height / rows;

let count = 0;
for (let i = 0; i < cols; i++) {
  for (let j = 0; j < rows && count < particleCount; j++) {
    const x = i * gapX + Math.random() * gapX;
    const y = j * gapY + Math.random() * gapY;
    const radius =
      minParticleRadius +
      Math.random() * (maxParticleRadius - minParticleRadius);

    particles.push({
      x: x,
      y: y,
      originalX: x,
      originalY: y,
      radius: radius,
      color: ["#ff94c2", "#8fc1e3", "#c0d461"][Math.floor(Math.random() * 3)],
      dx: (Math.random() - 0.5) * 0.1,
      dy: (Math.random() - 0.5) * 0.1,
      angle: Math.random() * (2 * Math.PI), // Added angle for oscillation
    });

    count++;
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p) => {
    const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
    gradient.addColorStop(0, p.color);
    gradient.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.beginPath();
    ctx.fillStyle = gradient;
    ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
    ctx.fill();

    // idle animation
    p.x += Math.sin(p.angle) * 2;
    p.y += Math.cos(p.angle) * 2;
    p.angle += 0.03;

    // damping  so that it goes back to OG position
    const damping = 0.005;
    p.dx += (p.originalX - p.x) * damping;
    p.dy += (p.originalY - p.y) * damping;

    // let there be friction!
    p.dx *= friction;
    p.dy *= friction;

    p.x += p.dx;
    p.y += p.dy;

    // particle boundary + tether
    if (p.x < 0) p.x = 0;
    if (p.x > boundary) p.x = boundary;
    if (p.y < 0) p.y = 0;
    if (p.y > canvas.height) p.y = canvas.height;
  });

  requestAnimationFrame(draw);
}

canvas.addEventListener("mousemove", function (e) {
  const mouseX = e.clientX - canvas.getBoundingClientRect().left;
  const mouseY = e.clientY - canvas.getBoundingClientRect().top;

  particles.forEach((p) => {
    const dist = Math.hypot(p.x - mouseX, p.y - mouseY);

    if (dist < 100) {
      const angle = Math.atan2(p.y - mouseY, p.x - mouseX);
      const force = (100 - dist) * 0.01;
      p.dx += Math.cos(angle) * force;
      p.dy += Math.sin(angle) * force;
    }
  });
});

draw();
