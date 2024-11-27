import type React from "react";
import { useEffect, useMemo, useRef } from "react";
import useThrottle from "../../hooks/useThrottle";

const KeepVisualScale = ({
  children,
  throttleDelay,
  minScale = 0.2,
}: {
  children: React.ReactNode;
  throttleDelay?: number;
  minScale?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const initialWidth = useMemo(() => innerWidth, []);
  const scaling = useThrottle(() => {
    if (!containerRef.current) return;
    const scale = innerWidth / initialWidth;
    if (scale >= 1) {
      containerRef.current.style.transform = "scale(1)";
      return;
    }
    if (scale <= minScale) {
      containerRef.current.style.transform = `scale(${minScale})`;
      return;
    }
    containerRef.current.style.transform = `scale(${scale})`;
  }, throttleDelay || 250);

  useEffect(() => {
    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 1) scaling();
    };
    addEventListener("touchmove", onTouchMove);
    return () => {
      removeEventListener("touchmove", onTouchMove);
    };
  }, [scaling]);
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
