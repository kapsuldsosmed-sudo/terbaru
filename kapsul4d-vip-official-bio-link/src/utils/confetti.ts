/**
 * Ultra-lightweight pure JS/CSS confetti burst (0 dependencies, 60fps, 0 lag)
 */
export function fireLightweightConfetti() {
  const colors = ['#06b6d4', '#3b82f6', '#10b981', '#f59e0b', '#ec4899', '#ffffff'];
  const count = 35;
  const container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.inset = '0';
  container.style.pointerEvents = 'none';
  container.style.zIndex = '9999';
  container.style.overflow = 'hidden';
  document.body.appendChild(container);

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const size = Math.random() * 8 + 4;
    const startX = 50 + (Math.random() * 30 - 15);
    const endX = startX + (Math.random() * 80 - 40);
    const rotation = Math.random() * 720 - 360;
    const duration = Math.random() * 1.2 + 0.8;

    particle.style.position = 'absolute';
    particle.style.bottom = '20%';
    particle.style.left = `${startX}%`;
    particle.style.width = `${size}px`;
    particle.style.height = `${size * 1.4}px`;
    particle.style.backgroundColor = color;
    particle.style.borderRadius = '2px';
    particle.style.opacity = '1';
    particle.style.transition = `all ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`;
    particle.style.transform = `translate(0, 0) rotate(0deg)`;

    container.appendChild(particle);

    requestAnimationFrame(() => {
      particle.style.transform = `translate(${(endX - startX) * 4}px, -${Math.random() * 300 + 200}px) rotate(${rotation}deg)`;
      particle.style.opacity = '0';
    });
  }

  setTimeout(() => {
    container.remove();
  }, 2200);
}
