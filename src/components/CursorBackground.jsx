import { useEffect, useRef } from "react";
import useReducedMotion from "../hooks/useReducedMotion";

// A quiet grid of dots that drift slightly away from the cursor.
// Rendered on <canvas> (not one DOM node per dot) so it stays fast even
// with a few hundred points on a large screen. Everything here reads from
// refs, not React state, so the animation loop never triggers a re-render.
const GRID_SPACING = 42; // px between dots
const REACT_RADIUS = 140; // px — how far a dot "feels" the cursor
const MAX_DISPLACEMENT = 9; // px — how far a dot can be pushed

export default function CursorBackground() {
  const canvasRef = useRef(null);
  const mouse = useRef({ x: -9999, y: -9999 });
  const dots = useRef([]);
  const frame = useRef(null);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = 0;
    let height = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    function buildGrid() {
      width = window.innerWidth;
      height = window.innerHeight;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const cols = Math.ceil(width / GRID_SPACING) + 1;
      const rows = Math.ceil(height / GRID_SPACING) + 1;
      const next = [];
      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          next.push({ x: col * GRID_SPACING, y: row * GRID_SPACING });
        }
      }
      dots.current = next;
    }

    function drawStatic() {
      // Reduced-motion fallback: draw once, never touch again.
      buildGrid();
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(245, 245, 244, 0.12)";
      for (const dot of dots.current) {
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      const { x: mx, y: my } = mouse.current;

      for (const dot of dots.current) {
        let dx = dot.x - mx;
        let dy = dot.y - my;
        const dist = Math.sqrt(dx * dx + dy * dy);

        let drawX = dot.x;
        let drawY = dot.y;
        let radius = 1;
        let alpha = 0.12;

        if (dist < REACT_RADIUS) {
          const strength = 1 - dist / REACT_RADIUS;
          const push = strength * MAX_DISPLACEMENT;
          const angle = Math.atan2(dy, dx);
          drawX = dot.x + Math.cos(angle) * push;
          drawY = dot.y + Math.sin(angle) * push;
          radius = 1 + strength * 1.4;
          alpha = 0.12 + strength * 0.38;
        }

        ctx.beginPath();
        ctx.fillStyle = `rgba(245, 245, 244, ${alpha})`;
        ctx.arc(drawX, drawY, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      frame.current = requestAnimationFrame(draw);
    }

    function handleMouseMove(event) {
      mouse.current.x = event.clientX;
      mouse.current.y = event.clientY;
    }

    function handleMouseLeave() {
      mouse.current.x = -9999;
      mouse.current.y = -9999;
    }

    function handleResize() {
      buildGrid();
    }

    function handleVisibility() {
      if (document.hidden) {
        if (frame.current) cancelAnimationFrame(frame.current);
      } else if (!reducedMotion) {
        frame.current = requestAnimationFrame(draw);
      }
    }

    if (reducedMotion) {
      drawStatic();
      window.addEventListener("resize", drawStatic);
      return () => window.removeEventListener("resize", drawStatic);
    }

    buildGrid();
    frame.current = requestAnimationFrame(draw);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      if (frame.current) cancelAnimationFrame(frame.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibility);
    };
  }, [reducedMotion]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      aria-hidden="true"
    />
  );
}
