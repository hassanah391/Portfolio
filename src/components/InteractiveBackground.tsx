"use client";

import { useEffect } from "react";

export function InteractiveBackground() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const updatePointer = (event: PointerEvent) => {
      if (reducedMotion.matches) return;

      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        root.style.setProperty("--pointer-x", `${event.clientX}px`);
        root.style.setProperty("--pointer-y", `${event.clientY}px`);
      });
    };

    window.addEventListener("pointermove", updatePointer, { passive: true });

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", updatePointer);
    };
  }, []);

  return (
    <div className="interactive-background" aria-hidden="true">
      <div className="interactive-background__ambient" />
      <div className="interactive-background__dots" />
      <div className="interactive-background__spotlight" />
    </div>
  );
}
