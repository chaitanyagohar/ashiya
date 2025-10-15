"use client";
import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScrolling({ children }) {
  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis({
      lerp: 0.1,        // inertia
      duration: 1.5,    // scroll duration
      smoothTouch: true // enable smooth on mobile
    });

    // Sync with requestAnimationFrame
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
