import { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ images, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft" && onPrev) onPrev();
      if (e.key === "ArrowRight" && onNext) onNext();
    };
    window.addEventListener("keydown", handleKey);
    // Prevent body scroll
    document.body.style.overflow = "hidden";
    
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "unset";
    };
  }, [onClose, onPrev, onNext]);

  if (!images || images.length === 0) return null;

  return (
    <div className="global-lightbox" role="dialog" aria-modal="true" onClick={onClose}>
      {/* Header with Branding */}
      <div className="global-lightbox__header" onClick={(e) => e.stopPropagation()}>
        <div className="global-lightbox__logo-container">
          <img src={`${import.meta.env.BASE_URL}icons.svg`} alt="Logo portfolio" className="global-lightbox__logo-icon" />
          <div className="global-lightbox__logo-text">
            <span className="global-lightbox__logo-name">Lê Thiên Vũ</span>
            <span className="global-lightbox__logo-sub">Portfolio</span>
          </div>
        </div>
        
        <div className="global-lightbox__controls-top">
           <span className="global-lightbox__counter">
            {index + 1} / {images.length}
          </span>
          <button className="global-lightbox__close" onClick={onClose} aria-label="Close preview">
            ×
          </button>
        </div>
      </div>

      {/* Main Image */}
      <div className="global-lightbox__content">
        <img 
          src={images[index]} 
          alt={`Preview ${index + 1}`} 
          className="global-lightbox__img" 
          onClick={(e) => e.stopPropagation()} 
        />
      </div>

      {/* Bottom Navigation */}
      {images.length > 1 && (
        <div className="global-lightbox__nav" onClick={(e) => e.stopPropagation()}>
          <button className="global-lightbox__nav-btn" onClick={onPrev} aria-label="Previous image">
            ‹
          </button>
          <span className="global-lightbox__counter-bottom">
            {index + 1} / {images.length}
          </span>
          <button className="global-lightbox__nav-btn" onClick={onNext} aria-label="Next image">
            ›
          </button>
        </div>
      )}
    </div>
  );
}
