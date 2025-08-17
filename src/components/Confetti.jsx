import { useEffect, useMemo, useState } from "react";
import Confetti from "react-confetti";

/**
 * ConfettiBurst
 * A lightweight, reusable confetti component.
 *
 * Props:
 * - active: boolean – triggers the confetti when true
 * - duration: number – optional; not used when recycle=false since we rely on natural completion
 * - recycle: boolean – whether to recycle pieces (continuous) until manually stopped
 * - colors: string[] – optional custom colors
 * - numberOfPieces: number – how many pieces to emit
 * - gravity: number – gravity factor (0..1 typical)
 * - wind: number – wind factor
 * - onComplete: () => void – called once the burst finishes (non-recycle) or when we auto-stop after duration
 */
export default function ConfettiBurst({
  active = false,
  recycle = false,
  colors,
  numberOfPieces = 300,
  gravity = 0.5,
  wind = 0,
  onComplete,
}) {
  const isClient = typeof window !== "undefined";
  const [viewport, setViewport] = useState(() => ({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  }));
  const [running, setRunning] = useState(false);

  // Track viewport size
  useEffect(() => {
    if (!isClient) return;
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight });
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  // Start/stop based on active
  useEffect(() => {
    if (active) {
      setRunning(true);
    } else {
      // When active is toggled off by parent, stop
      setRunning(false);
    }
  }, [active]);

  const palette = useMemo(() => colors || undefined, [colors]);

  if (!isClient) return null;

  if (!running) return null;

  return (
    <Confetti
      width={viewport.width}
      height={viewport.height}
      numberOfPieces={numberOfPieces}
      recycle={recycle}
      run
      gravity={gravity}
      wind={wind}
      colors={palette}
      // For non-recycle mode, react-confetti will call this once animation completes
      onConfettiComplete={(confetti) => {
        if (!recycle && confetti) {
          confetti.reset();
          setRunning(false);
          if (onComplete) onComplete();
        }
      }}
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 50,
      }}
    />
  );
}


