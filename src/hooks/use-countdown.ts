import { useEffect, useState } from "react";

const DURATION_SECONDS = 1774; // 29 minutes, 34 seconds (matching reference design)
const STORAGE_KEY = "kids_worksheet_countdown_end";

function getTargetTimestamp(): number {
  if (typeof window === "undefined") {
    return Date.now() + DURATION_SECONDS * 1000;
  }
  try {
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    if (stored) {
      const ts = Number(stored);
      if (!isNaN(ts) && ts > Date.now()) {
        return ts;
      }
    }
  } catch {}
  const newTarget = Date.now() + DURATION_SECONDS * 1000;
  try {
    window.sessionStorage.setItem(STORAGE_KEY, String(newTarget));
  } catch {}
  return newTarget;
}

// Global subscriber set for synchronized ticking across all on-page timer instances
const listeners = new Set<(seconds: number) => void>();
let intervalId: number | null = null;

function updateAll() {
  const target = getTargetTimestamp();
  const diff = Math.max(0, Math.floor((target - Date.now()) / 1000));
  listeners.forEach((fn) => fn(diff));
}

function startGlobalTimer() {
  if (intervalId !== null || typeof window === "undefined") return;
  updateAll();
  intervalId = window.setInterval(updateAll, 1000);
}

export function useSharedCountdown() {
  const [left, setLeft] = useState<number>(() => {
    if (typeof window === "undefined") return DURATION_SECONDS;
    const target = getTargetTimestamp();
    return Math.max(0, Math.floor((target - Date.now()) / 1000));
  });

  useEffect(() => {
    startGlobalTimer();
    listeners.add(setLeft);
    updateAll();
    return () => {
      listeners.delete(setLeft);
      if (listeners.size === 0 && intervalId !== null) {
        window.clearInterval(intervalId);
        intervalId = null;
      }
    };
  }, []);

  const d = Math.floor(left / 86400);
  const h = Math.floor((left % 86400) / 3600);
  const m = Math.floor((left % 3600) / 60);
  const s = left % 60;

  return { left, d, h, m, s };
}
