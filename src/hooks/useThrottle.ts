import { useCallback, useEffect, useRef } from "react";

const useThrottle = <T>(callback: (...args: T[]) => unknown, delay: number) => {
  const timeoutRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(-1);

  const throttledFunction = useCallback(
    (...args: T[]) => {
      const now = Date.now();
      const context = this;
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (now - lastTimeRef.current >= delay) {
        lastTimeRef.current = now;
        callback.apply(context, args);
      } else {
        timeoutRef.current = window.setTimeout(
          () => {
            lastTimeRef.current = now;
            callback.apply(context, args);
          },
          delay - (now - lastTimeRef.current),
        );
      }
    },
    [callback, delay],
  );

  useEffect(() => {
    return () => {
      if (!timeoutRef.current) return;
      clearTimeout(timeoutRef.current);
    };
  }, []);

  return throttledFunction;
};

export default useThrottle;
