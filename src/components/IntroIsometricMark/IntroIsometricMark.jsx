import { useEffect, useRef } from "react";
import "./IntroIsometricMark.css";

const SHAPES = [
  "M112.287 63.0742C112.287 41.5638 117.761 26.0552 128.708 16.5483C139.943 6.84945 157.949 2 182.724 2H191.511V105.567C191.511 150.22 178.739 178.837 153.195 191.417C144.265 195.834 133.557 198.042 121.074 198.042H112.287V63.0742Z",
  "M78.293 198.042C54.1898 198.042 36.2324 189.64 24.4209 172.835C13.4736 157.278 8 134.856 8 105.567V2H16.7866C41.562 2 59.5674 6.84945 70.8027 16.5483C81.75 26.0552 87.2236 41.5638 87.2236 63.0742V198.042H78.293Z",
];

export default function IntroIsometricMark({ className = "" }) {
  const stageRef = useRef(null);
  const markRef = useRef(null);
  const topRefs = useRef([]);
  const frontRef = useRef(null);
  const backRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const mark = markRef.current;
    const front = frontRef.current;
    const back = backRef.current;
    if (!stage || !mark || !front || !back) return undefined;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const depth = 24;
    const layers = 12;
    const frontFaces = [];
    const backLayers = [];

    for (let i = layers; i >= 1; i -= 1) {
      const t = i / layers;
      const dx = -depth * t;
      const dy = depth * 0.58 * t;
      SHAPES.forEach((d, shape) => {
        const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
        path.setAttribute("d", d);
        back.append(path);
        backLayers.push({ path, shape, dx, dy });
      });
    }
    SHAPES.forEach((d, shape) => {
      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute("d", d);
      front.append(path);
      frontFaces.push({ path, shape });
    });

    let tx = 0; let ty = 0; let sx = 0; let sy = 0; let raf = 0;
    const render = () => {
      raf = 0;
      sx += (tx - sx) * 0.12;
      sy += (ty - sy) * 0.12;
      mark.style.transform = `translate(${sx}px ${sy}px) rotateX(${sy * 0.14}deg) rotateY(${-sx * 0.16}deg)`;
      topRefs.current.forEach((path) => path?.setAttribute("transform", "translate(0 0)"));
      frontFaces.forEach(({ path }) => path.setAttribute("transform", `translate(${-depth} ${depth * 0.58})`));
      backLayers.forEach(({ path, dx, dy }) => path.setAttribute("transform", `translate(${dx} ${dy})`));
      if (Math.abs(tx - sx) + Math.abs(ty - sy) > 0.02) raf = requestAnimationFrame(render);
    };
    const wake = () => { if (!raf && !reduced) raf = requestAnimationFrame(render); };
    const onMove = (event) => {
      if (reduced) return;
      const rect = stage.getBoundingClientRect();
      tx = ((event.clientX - rect.left) / rect.width - 0.5) * 8;
      ty = ((event.clientY - rect.top) / rect.height - 0.5) * 5;
      wake();
    };
    const onLeave = () => { tx = 0; ty = 0; wake(); };
    const onWindowMove = (event) => {
      const rect = stage.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) { onLeave(); return; }
      onMove(event);
    };
    const onScroll = () => {
      const rect = stage.getBoundingClientRect();
      const progress = Math.max(-1, Math.min(1, (rect.top + rect.height / 2 - window.innerHeight / 2) / window.innerHeight));
      stage.style.setProperty("--intro-mark-scroll", `${progress * -16}px`);
    };
    window.addEventListener("pointermove", onWindowMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    // Animate opacity only: a filled transform animation would override the live pointer transform.
    if (!reduced) mark.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 850, easing: "cubic-bezier(.22,1,.36,1)", fill: "forwards" });
    render();
    return () => { window.removeEventListener("pointermove", onWindowMove); window.removeEventListener("scroll", onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return <div ref={stageRef} className={`intro-isometric-mark ${className}`} aria-hidden="true"><div className="intro-isometric-mark__ambient" /><svg viewBox="0 0 260 230" focusable="false"><g ref={markRef} className="intro-isometric-mark__mark"><g ref={backRef} className="intro-isometric-mark__depth intro-isometric-mark__side" /><g ref={frontRef} className="intro-isometric-mark__depth intro-isometric-mark__front" /><g className="intro-isometric-mark__top">{SHAPES.map((d, index) => <path ref={(element) => { topRefs.current[index] = element; }} d={d} key={d} />)}<path className="intro-isometric-mark__specular" d="M120 64C120 44 125 30 135 22C145 14 160 10 181 10" /></g></g></svg></div>;
}
