import { useEffect, useRef } from "react";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])';

/**
 * Shared dialog accessibility behaviour: locks body scroll, moves focus into
 * the dialog on open and restores it on close, closes on Escape, and traps
 * Tab focus inside the dialog while it's open.
 */
export function useModalA11y({ open, onClose, dialogRef }) {
  const previouslyFocused = useRef(null);
  // Read onClose through a ref so a new callback identity from the parent
  // doesn't tear down and re-run the open/close effect.
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  useEffect(() => {
    if (!open) return undefined;

    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";

    const getFocusable = () => Array.from(dialogRef.current?.querySelectorAll(FOCUSABLE_SELECTOR) ?? []);
    const initial = getFocusable()[0];
    (initial ?? dialogRef.current)?.focus();

    function onKeyDown(e) {
      if (e.key === "Escape") {
        onCloseRef.current();
        return;
      }
      if (e.key !== "Tab") return;
      const items = getFocusable();
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
      if (previouslyFocused.current instanceof HTMLElement) previouslyFocused.current.focus();
    };
  }, [open, dialogRef]);
}
