"use client"

import { useState, useEffect, useCallback } from "react";

interface UseImagePreviewReturn {
  openIndex: number | null;      // null = lightbox closed
  open:  (index: number) => void;  // open lightbox at index
  close: () => void;
  next:  () => void;
  prev:  () => void;
}

export function useImagePreview(count: number): UseImagePreviewReturn {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const open  = useCallback((i: number) => setOpenIndex(i), []);
  const close = useCallback(() => setOpenIndex(null), []);

  const next = useCallback(() =>
    setOpenIndex(prev => prev === null ? null : (prev + 1) % count)
  , [count]);

  const prev = useCallback(() =>
    setOpenIndex(prev => prev === null ? null : (prev - 1 + count) % count)
  , [count]);

  // Keyboard: Escape closes, arrow keys navigate
  useEffect(() => {
    if (openIndex === null) return;  // skip listener when closed
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape")     close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft")  prev();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [openIndex, close, next, prev]);

  // Lock body scroll while lightbox is open
  useEffect(() => {
    document.body.style.overflow = openIndex !== null ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [openIndex]);

  return { openIndex, open, close, next, prev };
}