import { useEffect, useRef } from "react";
import "./Lightbox.css";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  const dialogRef = useRef(null);
  const closeButtonRef = useRef(null);
  const lastFocusedRef = useRef(null);

  useEffect(() => {
    lastFocusedRef.current = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    closeButtonRef.current?.focus();

    const handleKey = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
      }
      if (event.key === "ArrowLeft" && onPrev) {
        event.preventDefault();
        onPrev();
      }
      if (event.key === "ArrowRight" && onNext) {
        event.preventDefault();
        onNext();
      }
      if (event.key === "Tab") {
        const focusable = dialogRef.current?.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusable?.length) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        }
        if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    window.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = previousOverflow;
      lastFocusedRef.current?.focus?.();
    };
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;

  return (
    <div
      ref={dialogRef}
      className="global-lightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      aria-describedby="lightbox-status"
      onClick={onClose}
    >
      <div className="global-lightbox__header" onClick={(event) => event.stopPropagation()}>
        <div className="global-lightbox__logo-container">
          <img src={`${import.meta.env.BASE_URL}vu-logo-full.svg`} alt="Lê Thiên Vũ portfolio logo" className="global-lightbox__logo-icon" />
          <div className="global-lightbox__logo-text">
            <span id="lightbox-title" className="global-lightbox__logo-name">Lê Thiên Vũ</span>
            <span className="global-lightbox__logo-sub">Portfolio</span>
          </div>
        </div>
        <div className="global-lightbox__controls-top">
          <span className="global-lightbox__counter">{index + 1} / {images.length}</span>
          <span id="lightbox-status" className="sr-only">Image {index + 1} of {images.length}</span>
          <button ref={closeButtonRef} className="global-lightbox__close" onClick={onClose} aria-label="Close preview">×</button>
        </div>
      </div>

      <div className="global-lightbox__content">
        <img src={images[index]} alt={`Preview ${index + 1}`} className="global-lightbox__img" loading="eager" decoding="async" onClick={(event) => event.stopPropagation()} />
      </div>

      {images.length > 1 && (
        <div className="global-lightbox__nav" onClick={(event) => event.stopPropagation()}>
          <button className="global-lightbox__nav-btn" onClick={onPrev} aria-label="Previous image">‹</button>
          <span className="global-lightbox__counter-bottom">{index + 1} / {images.length}</span>
          <button className="global-lightbox__nav-btn" onClick={onNext} aria-label="Next image">›</button>
        </div>
      )}
    </div>
  );
}
