import { useRef, useCallback } from "react";

export function usePersistFn<T extends (...args: any[]) => any>(fn: T): T {
  const fnRef = useRef(fn);
  fnRef.current = fn;

  return useCallback((...args: any[]) => {
    return fnRef.current(...args);
  }, []) as T;
}
