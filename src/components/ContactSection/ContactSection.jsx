import { useState } from 'react';
import './ContactSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import avatarImg from '../../assets/contactImg/lethienvu_contact.jpeg';

const MailIcon = () => (
  <svg
      viewBox="0 0 16 16"
      fill="currentColor"
      height="16"
      width="16"
      xmlns="http://www.w3.org/2000/svg"
      className="socialSvg whatsappSvg"
    >
      <path
        d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"
      ></path>
      <path
        d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648m-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"
      ></path>
    </svg>
);

const LinkedInIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512" fill="#fff"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg> 
);

const GitHubIcon = () => (
   <svg xmlns="http://www.w3.org/2000/svg" fill="#fff" height="1em" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="socialSvg phoneSvg" height="1em" width="1em">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const CopyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" width="16" height="16">
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
  </svg>
);

const CHANNELS = [
  { icon: <PhoneIcon />, label: 'Phone / Zalo', value: '0945 949 065', href: 'tel:0945949065', copyValue: '0945949065' },
  { icon: <MailIcon />, label: 'Email',    value: 'lethienvu.se@gmail.com',       href: 'mailto:lethienvu.se@gmail.com', copyValue: 'lethienvu.se@gmail.com' },
  { icon: <LinkedInIcon />, label: 'LinkedIn', value: 'linkedin.com/in/lê-thiên-vũ',   href: 'https://www.linkedin.com/in/lê-thiên-vũ-291219229/', copyValue: 'https://www.linkedin.com/in/lê-thiên-vũ-291219229/' },
  { icon: <GitHubIcon />, label: 'GitHub',   value: 'github.com/lethienvu',        href: 'https://github.com/lethienvu', copyValue: 'https://github.com/lethienvu' },
];

export default function ContactSection() {
  const { t } = useLanguage();
  const c = t.contact;

  const [copiedIndex, setCopiedIndex] = useState(null);

  const handleCopy = (text, index) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading" style={{ background: 'transparent' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="contact__vcard">
          
          {/* Left: Avatar & QR Code */}
          <div className="vcard__avatar-section">
            <img src={avatarImg} alt="Vu Le Thien Avatar" className="vcard__avatar-bg" />
            <div className="vcard__qr-container">
              <p className="qr-title">Zalo QR</p>
              <img 
                src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=https://zalo.me/0945949065" 
                alt="Zalo QR" 
                className="vcard__qr" 
              />
            </div>
          </div>

          {/* Right: Info & Actions */}
          <div className="vcard__info">
            <header className="contact__header">
              <h2 id="contact-heading" className="section-title">{c.title || 'Get In Touch'}</h2>
              <p className="section-subtitle">{c.subtitle || 'Feel free to reach out for collaborations'}</p>
            </header>

            <nav className="contact__channels" aria-label="Contact channels">
              {CHANNELS.map((ch, idx) => (
                <div key={ch.label} className="contact__channel-wrapper">
                  <a
                    href={ch.href}
                    className="contact__channel"
                    target={ch.href.startsWith('http') ? '_blank' : undefined}
                    rel={ch.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    aria-label={`${ch.label}: ${ch.value}`}
                  >
                    <span className="contact__channel-icon" aria-hidden="true">{ch.icon}</span>
                    <div className="contact__channel-info">
                      <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.7)', fontWeight: 600, letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                        {ch.label}
                      </div>
                      <div style={{ fontWeight: 500, color: '#fff' }}>{ch.value}</div>
                    </div>
                    <button 
                      className="copy-btn" 
                      onClick={(e) => {
                        e.preventDefault();
                        handleCopy(ch.copyValue, idx);
                      }}
                      aria-label={`Copy ${ch.label}`}
                      title={copiedIndex === idx ? 'Copied!' : 'Copy'}
                    >
                      {copiedIndex === idx ? '✓' : <CopyIcon />}
                    </button>
                  </a>
                </div>
              ))}
            </nav>

            <div className="contact__actions">
              <a href="tel:0945949065" className="action-btn action-btn--primary">
                📞 Gọi ngay
              </a>
              <a href="mailto:lethienvu.se@gmail.com" className="action-btn action-btn--secondary">
                ✉️ Gửi mail
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
