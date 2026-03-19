export function smoothScrollTo(targetY: number, duration = 600) {
  const start = window.scrollY;
  const diff = targetY - start;
  const startTime = performance.now();

  function step(timestamp: number) {
    const elapsed = timestamp - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const ease = 1 - Math.pow(1 - progress, 3);
    window.scrollTo(0, start + diff * ease);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}
