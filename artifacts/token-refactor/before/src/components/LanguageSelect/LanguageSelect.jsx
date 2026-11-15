// Lucian UX/UI Prompt #031 · MIT License (c) 2026 Seokwoooo · https://lucianlabs.dev/uxui-prompt/#031
import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useLanguage } from "../../i18n/LanguageContext.jsx";
import "./LanguageSelect.css";

const LANGUAGES = [
  { code: "vi", flag: "🇻🇳", name: "Tiếng Việt", region: "Việt Nam" },
  { code: "en", flag: "🇺🇸", name: "English", region: "United States" },
  { code: "ja", flag: "🇯🇵", name: "日本語", region: "Japan" },
  { code: "zh", flag: "🇨🇳", name: "中文", region: "China" },
];

function CheckIcon() {
  return <svg className="u031-language__check" viewBox="0 0 18 18" aria-hidden="true"><path d="M4 9.5l3.5 3.5L14 6" /></svg>;
}

export default function LanguageSelect() {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const selectedIndex = Math.max(0, LANGUAGES.findIndex((language) => language.code === lang));
  const [activeIndex, setActiveIndex] = useState(selectedIndex);
  const [menuPosition, setMenuPosition] = useState(null);
  const rootRef = useRef(null);
  const listRef = useRef(null);
  const typeaheadRef = useRef({ value: "", timer: undefined });
  const closeTimerRef = useRef(undefined);
  const listId = useId();
  const selected = LANGUAGES[selectedIndex];

  const close = (restoreFocus = false) => {
    window.clearTimeout(closeTimerRef.current);
    setIsOpen(false);
    if (restoreFocus) requestAnimationFrame(() => rootRef.current?.querySelector("button")?.focus({ preventScroll: true }));
  };
  const cancelScheduledClose = () => window.clearTimeout(closeTimerRef.current);
  const scheduleClose = () => {
    window.clearTimeout(closeTimerRef.current);
    closeTimerRef.current = window.setTimeout(() => close(), 140);
  }; 
  const open = () => {
    const trigger = rootRef.current?.querySelector("button");
    const rect = trigger?.getBoundingClientRect();
    if (rect) setMenuPosition({ top: rect.bottom + 8, right: Math.max(8, window.innerWidth - rect.right) });
    setActiveIndex(selectedIndex);
    setIsOpen(true);
    requestAnimationFrame(() => listRef.current?.focus({ preventScroll: true }));
  };
  const choose = (index) => {
    setLang(LANGUAGES[index].code);
    close(true);
  };

  useEffect(() => {
    const onPointerDown = (event) => {
      const isInTrigger = rootRef.current?.contains(event.target);
      const isInMenu = listRef.current?.contains(event.target);
      if (isOpen && !isInTrigger && !isInMenu) close();
    };
    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isOpen]);

  useEffect(() => () => { window.clearTimeout(typeaheadRef.current.timer); window.clearTimeout(closeTimerRef.current); }, []);

  useEffect(() => {
    if (!isOpen) return undefined;
    const updatePosition = () => {
      const trigger = rootRef.current?.querySelector("button");
      const rect = trigger?.getBoundingClientRect();
      if (rect) setMenuPosition({ top: rect.bottom + 8, right: Math.max(8, window.innerWidth - rect.right) });
    };
    window.addEventListener("resize", updatePosition);
    window.addEventListener("scroll", updatePosition, true);
    return () => {
      window.removeEventListener("resize", updatePosition);
      window.removeEventListener("scroll", updatePosition, true);
    };
  }, [isOpen]);

  const handleListKeyDown = (event) => {
    if (event.key === "ArrowDown") { event.preventDefault(); setActiveIndex((index) => Math.min(LANGUAGES.length - 1, index + 1)); }
    else if (event.key === "ArrowUp") { event.preventDefault(); setActiveIndex((index) => Math.max(0, index - 1)); }
    else if (event.key === "Home") { event.preventDefault(); setActiveIndex(0); }
    else if (event.key === "End") { event.preventDefault(); setActiveIndex(LANGUAGES.length - 1); }
    else if (event.key === "Enter" || event.key === " ") { event.preventDefault(); choose(activeIndex); }
    else if (event.key === "Escape") { event.preventDefault(); close(true); }
    else if (event.key === "Tab") close();
    else if (event.key.length === 1) {
      const typeahead = typeaheadRef.current;
      typeahead.value += event.key.toLocaleLowerCase();
      window.clearTimeout(typeahead.timer);
      typeahead.timer = window.setTimeout(() => { typeahead.value = ""; }, 600);
      const match = LANGUAGES.findIndex((language) => language.name.toLocaleLowerCase().startsWith(typeahead.value) || language.code.startsWith(typeahead.value));
      if (match >= 0) setActiveIndex(match);
    }
  };

  return (
    <div ref={rootRef} className={`u031-language${isOpen ? " is-open" : ""}`} onPointerEnter={() => { cancelScheduledClose(); if (!isOpen) open(); }} onPointerLeave={scheduleClose}> 
      <button className="u031-language__trigger" type="button" aria-haspopup="listbox" aria-expanded={isOpen} aria-controls={listId} aria-label="Chọn ngôn ngữ hiển thị" onClick={() => (isOpen ? close(true) : open())} onKeyDown={(event) => { if (event.key === "ArrowDown" || event.key === "ArrowUp") { event.preventDefault(); open(); } }}>
        <img className="u031-language__translate" src={`${import.meta.env.BASE_URL}translate.svg`} alt="" aria-hidden="true" />
        <span className="sr-only">{selected.name}</span>
      </button>
      {isOpen && menuPosition && createPortal(
        <ul ref={listRef} id={listId} className="u031-language__list" role="listbox" tabIndex="-1" aria-label="Ngôn ngữ hiển thị" aria-activedescendant={`${listId}-${activeIndex}`} onKeyDown={handleListKeyDown} onPointerEnter={cancelScheduledClose} onPointerLeave={scheduleClose} style={{ top: menuPosition.top, right: menuPosition.right }}>
          <li className="u031-language__highlight" role="presentation" aria-hidden="true" style={{ "--u031-index": activeIndex }} />
          {LANGUAGES.map((language, index) => <li id={`${listId}-${index}`} key={language.code} className="u031-language__option" role="option" aria-selected={index === selectedIndex} onPointerMove={() => setActiveIndex(index)} onClick={() => choose(index)}><span className="u031-language__flag" aria-hidden="true">{language.flag}</span><span>{language.name}<small>{language.region}</small><CheckIcon /></span></li>)}
        </ul>,
        document.body
      )}
    </div>
  );
}
