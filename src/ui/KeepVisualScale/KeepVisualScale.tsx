import type React from "react";
import { useEffect, useMemo, useRef } from "react";
import useThrottle from "../../hooks/useThrottle";

const KeepVisualScale = ({
  children,
  throttleDelay,
}: { children: React.ReactNode; throttleDelay?: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialWidth = useMemo(() => innerWidth, []);

  const onTouchMove = useThrottle<TouchEvent>((e: TouchEvent) => {
    if (e.touches.length < 2) return;
    if (!containerRef.current) return;
    const ratio = innerWidth / initialWidth;
    if (ratio >= 1) return;
    containerRef.current.style.transform = `scale(${ratio})`;
  }, throttleDelay || 250);

  useEffect(() => {
    addEventListener("touchmove", onTouchMove);
    return () => {
      removeEventListener("touchmove", onTouchMove);
    };
  }, [onTouchMove]);
  return (
    <div
      style={{
        transformOrigin: "left top",
        transition: "transform 0.25s ease",
      }}
      ref={containerRef}
    >
      {children}
    </div>
  );
};

export default KeepVisualScale;
