"use client";

// Minimal inline replacement for `react-hot-toast` (dependency not available).
// Keeps call sites working: `toast(msg)`, `toast.success(msg)`, `toast.error(msg)`,
// plus a no-op <Toaster /> host component. Toasts render as a fixed top-right,
// auto-dismissing (~3s) stack appended to <body>, so no <Toaster/> mount is required.

const CONTAINER_ID = "__gmw_toast_container__";

type ToastType = "success" | "error" | "default";

interface ToastFn {
  (message?: unknown): void;
  success: (message?: unknown) => void;
  error: (message?: unknown) => void;
}

function getContainer(): HTMLElement | null {
  if (typeof document === "undefined") return null;
  let container = document.getElementById(CONTAINER_ID);
  if (!container) {
    container = document.createElement("div");
    container.id = CONTAINER_ID;
    Object.assign(container.style, {
      position: "fixed",
      top: "16px",
      right: "16px",
      zIndex: "9999",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      pointerEvents: "none",
    });
    document.body.appendChild(container);
  }
  return container;
}

function showToast(message: unknown, type: ToastType): void {
  const container = getContainer();
  if (!container) return;

  const el = document.createElement("div");
  el.textContent = String(message ?? "");
  el.setAttribute("role", "status");

  const theme =
    type === "success"
      ? { bg: "#ecfdf5", color: "#065f46", border: "#10b981" }
      : type === "error"
      ? { bg: "#fef2f2", color: "#991b1b", border: "#ef4444" }
      : { bg: "#ffffff", color: "#1f2937", border: "#e5e7eb" };

  Object.assign(el.style, {
    background: theme.bg,
    color: theme.color,
    border: "1px solid " + theme.border,
    borderRadius: "8px",
    padding: "10px 14px",
    fontSize: "14px",
    fontWeight: "500",
    fontFamily: "system-ui, -apple-system, Segoe UI, sans-serif",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.12)",
    maxWidth: "360px",
    pointerEvents: "auto",
    opacity: "0",
    transform: "translateX(8px)",
    transition: "opacity 0.2s ease, transform 0.2s ease",
  });

  container.appendChild(el);

  requestAnimationFrame(() => {
    el.style.opacity = "1";
    el.style.transform = "translateX(0)";
  });

  setTimeout(() => {
    el.style.opacity = "0";
    el.style.transform = "translateX(8px)";
    setTimeout(() => {
      el.remove();
    }, 200);
  }, 3000);
}

const toast = ((message?: unknown) => showToast(message, "default")) as ToastFn;
toast.success = (message?: unknown) => showToast(message, "success");
toast.error = (message?: unknown) => showToast(message, "error");

export function Toaster() {
  return null;
}

export default toast;
