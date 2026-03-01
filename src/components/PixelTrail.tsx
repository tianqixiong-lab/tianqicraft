import { useEffect, useRef } from 'react';

const GRID_SIZE = 10;
const MAX_AGE = 20;
const FILL_STYLE_PREFIX = 'rgba(0, 51, 255, ';

export function PixelTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointsRef = useRef<{ x: number; y: number; age: number }[]>([]);
  const rafRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener('resize', resize);

    const handleMouseMove = (e: MouseEvent) => {
      pointsRef.current.push({
        x: Math.floor(e.clientX / GRID_SIZE) * GRID_SIZE,
        y: Math.floor(e.clientY / GRID_SIZE) * GRID_SIZE,
        age: 0,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      const points = pointsRef.current;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update ages and draw in one pass, remove dead points
      let writeIdx = 0;
      for (let i = 0; i < points.length; i++) {
        const p = points[i];
        p.age++;
        if (p.age < MAX_AGE) {
          const opacity = (1 - p.age / MAX_AGE) * 0.3;
          ctx.fillStyle = FILL_STYLE_PREFIX + opacity + ')';
          ctx.fillRect(p.x, p.y, GRID_SIZE, GRID_SIZE);
          points[writeIdx++] = p;
        }
      }
      points.length = writeIdx;

      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[5]"
    />
  );
}
