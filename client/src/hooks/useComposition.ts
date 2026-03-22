import { useRef, useCallback } from "react";

interface UseCompositionOptions<T extends HTMLElement> {
  onKeyDown?: (e: React.KeyboardEvent<T>) => void;
  onCompositionStart?: (e: React.CompositionEvent<T>) => void;
  onCompositionEnd?: (e: React.CompositionEvent<T>) => void;
}

export function useComposition<T extends HTMLElement>(
  options: UseCompositionOptions<T> = {}
) {
  const composingRef = useRef(false);
  const justEndedRef = useRef(false);

  const onCompositionStart = useCallback(
    (e: React.CompositionEvent<T>) => {
      composingRef.current = true;
      justEndedRef.current = false;
      options.onCompositionStart?.(e);
    },
    [options.onCompositionStart]
  );

  const onCompositionEnd = useCallback(
    (e: React.CompositionEvent<T>) => {
      composingRef.current = false;
      justEndedRef.current = true;
      setTimeout(() => {
        justEndedRef.current = false;
      }, 100);
      options.onCompositionEnd?.(e);
    },
    [options.onCompositionEnd]
  );

  const onKeyDown = useCallback(
    (e: React.KeyboardEvent<T>) => {
      if (composingRef.current || justEndedRef.current) {
        return;
      }
      options.onKeyDown?.(e);
    },
    [options.onKeyDown]
  );

  return {
    onCompositionStart,
    onCompositionEnd,
    onKeyDown,
    isComposing: () => composingRef.current,
    justEndedComposing: () => justEndedRef.current,
  };
}
