import { useEffect, useRef, useState, useCallback } from 'react';
import './ContactSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import avatarImg from '../../assets/contactImg/lethienvu_contact.webp';
import qrZaloImg from '../../assets/contactImg/QR_Zalo.webp';

/* ─────────────────── Constants ─────────────────── */
const EMAIL     = 'lethienvu.se@gmail.com';
const PHONE     = '+84945949065';
const LINKEDIN  = 'https://www.linkedin.com/in/l%C3%AA-thi%C3%AAn-v%C5%A9-291219229/';
const GITHUB    = 'https://github.com/lethienvu';
const PORTFOLIO = 'https://lethienvu.dev';

const SKILLS_TAGS = ['Frontend', 'Backend', 'UI/UX', 'Business Analysis', 'Tech Lead', 'AI Integration'];

/** HTML of the email signature – mirrors the uploaded email-signature.html layout */
function buildSignatureHTML(lang) {
  const avatarUrl = `${window.location.origin}/lethienvu_contact.webp`;
  const name  = lang === 'vi' ? 'LÊ THIÊN&nbsp;VŨ' : 'LÊ THIÊN&nbsp;VŨ';
  const title = lang === 'ja'
    ? '<span style="font-family:cursive;font-size:17px;color:#dc2626;">Fullstack</span>&nbsp;<span style="font-size:13px;color:#2563eb;">software engineer</span>'
    : '<span style="font-family:cursive;font-size:17px;color:#dc2626;">Fullstack</span>&nbsp;<span style="font-size:13px;color:#2563eb;">software engineer</span>';

  const tags = SKILLS_TAGS.map(t =>
    `<span style="display:inline-block;border:1px solid #e2e8f0;background:#f8fafc;color:#64748b;font-size:9px;font-weight:500;padding:2px 6px;border-radius:4px;margin:2px;line-height:1.4;">${t}</span>`
  ).join('');

  return `<table cellpadding="0" cellspacing="0" border="0" style="font-family:'Segoe UI',Arial,sans-serif;font-size:14px;color:#1f2937;border-collapse:collapse;width:560px;max-width:560px;border-radius:16px;box-shadow:0 4px 24px rgba(0,0,0,.06);overflow:hidden;background:#ffffff;">
  <tr>
    <td valign="middle" style="vertical-align:middle;text-align:center;width:160px;min-width:160px;padding:24px 16px 24px 20px;">
      <img src="${avatarUrl}" alt="Lê Thiên Vũ" style="display:block;width:120px;height:160px;object-fit:cover;object-position:center 10%;border:0;vertical-align:middle;margin:0 auto;border-radius:8px;" />
      <div style="margin-top:12px;text-align:center;">${tags}</div>
    </td>
    <td style="width:1px;padding:0;background:#e5e7eb;"></td>
    <td valign="middle" style="vertical-align:middle;padding:20px 22px 20px 20px;">
      <div style="font-family:'Segoe UI',Roboto,Arial,sans-serif;font-size:28px;font-weight:700;line-height:1.1;letter-spacing:.5px;text-transform:uppercase;">
        <span style="color:#1c1c1e;">LÊ THIÊN&nbsp;</span><span style="color:#2563eb;">VŨ</span>
      </div>
      <div style="margin-top:5px;line-height:1.1;">${title}</div>
      <div style="height:1px;background:linear-gradient(90deg,#cbd5e1 0%,transparent 70%);margin:10px 0;"></div>
      <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:6px;">
        <tr>
          <td style="padding-right:8px;vertical-align:middle;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17 3.5H7C4 3.5 2 5 2 8.5V15.5C2 19 4 20.5 7 20.5H17C20 20.5 22 19 22 15.5V8.5C22 5 20 3.5 17 3.5ZM17.47 9.59L14.34 12.09C13.68 12.62 12.84 12.88 12 12.88C11.16 12.88 10.31 12.62 9.66 12.09L6.53 9.59C6.21 9.33 6.16 8.85 6.41 8.53C6.67 8.21 7.14 8.15 7.46 8.41L10.59 10.91C11.35 11.52 12.64 11.52 13.4 10.91L16.53 8.41C16.85 8.15 17.33 8.2 17.58 8.53C17.84 8.85 17.79 9.33 17.47 9.59Z" fill="#475569"/></svg>
          </td>
          <td style="vertical-align:middle;"><a href="mailto:${EMAIL}" style="color:#1A1A1A;text-decoration:none;font-size:13px;font-family:'Segoe UI',Arial,sans-serif;">${EMAIL}</a></td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0" style="margin-bottom:10px;">
        <tr>
          <td style="padding-right:8px;vertical-align:middle;">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15z" fill="#475569"/></svg>
          </td>
          <td style="vertical-align:middle;"><a href="tel:${PHONE}" style="color:#1A1A1A;text-decoration:none;font-size:13px;font-family:'Segoe UI',Arial,sans-serif;">(+84) 945 949 065</a></td>
        </tr>
      </table>
      <table cellpadding="0" cellspacing="0" border="0">
        <tr>
          <td style="padding-right:8px;">
            <a href="${LINKEDIN}" style="display:inline-block;text-decoration:none;">
              <table cellpadding="0" cellspacing="0" border="0"><tr><td style="background:#f1f5f9;border-radius:6px;padding:4px 11px;border:1px solid #e2e8f0;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="padding-right:5px;vertical-align:middle;"><svg xmlns="http://www.w3.org/2000/svg" height="12px" viewBox="0 0 448 512" fill="#475569"><path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg></td>
                  <td style="vertical-align:middle;"><span style="color:#475569;font-size:11px;font-weight:600;font-family:'Segoe UI',Arial,sans-serif;">LinkedIn</span></td>
                </tr></table>
              </td></tr></table>
            </a>
          </td>
          <td>
            <a href="${PORTFOLIO}" style="display:inline-block;text-decoration:none;">
              <table cellpadding="0" cellspacing="0" border="0"><tr><td style="background:#f1f5f9;border-radius:6px;padding:4px 11px;border:1px solid #e2e8f0;">
                <table cellpadding="0" cellspacing="0" border="0"><tr>
                  <td style="padding-right:5px;vertical-align:middle;"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#64748b" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg></td>
                  <td style="vertical-align:middle;"><span style="color:#475569;font-size:11px;font-weight:600;font-family:'Segoe UI',Arial,sans-serif;">Portfolio</span></td>
                </tr></table>
              </td></tr></table>
            </a>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ─────────────────── i18n ─────────────────── */
const i18n = {
  vi: {
    availableLabel: 'Sẵn sàng kết nối',
    availableSub:   'Phản hồi trong vòng 24h',
    roleScript:     'Fullstack',
    roleMain:       'Software Engineer',
    description:    'Nếu bạn quan tâm đến phát triển phần mềm, giải pháp ERP/HRM hoặc ứng dụng AI, tôi rất vui được trao đổi.',
    emailLabel:     'Liên hệ qua Email',
    copyEmail:      'Sao chép email',
    copiedEmail:    'Đã sao chép!',
    send:           'Gửi thư',
    phoneLabel:     'Điện thoại',
    phoneHint:      'Nhấn để gọi',
    zaloLabel:      'Zalo',
    zaloName:       'Mã QR Zalo',
    msgTitle:       'Nhắn tin nhanh',
    msgName:        'Tên của bạn',
    msgBody:        'Tin nhắn…',
    msgSend:        'Gửi qua Email',
    utilities:      'Tiện ích',
    copySig:        'Copy chữ ký email',
    copiedSig:      'Đã copy chữ ký!',
    copyLink:       'Copy link trang',
    copiedLink:     'Đã copy link!',
    vcardBtn:       'Lưu liên hệ (.vcf)',
    portraitAlt:    'Chân dung Lê Thiên Vũ',
    qrAlt:          'Mã QR Zalo của Lê Thiên Vũ',
    closeQr:        'Đóng',
    detailAria:     'Các kênh liên hệ',
    copyFailed:     'Không thể sao chép tự động.',
  },
  en: {
    availableLabel: 'Open to connect',
    availableSub:   'Usually replies within 24h',
    roleScript:     'Fullstack',
    roleMain:       'Software Engineer',
    description:    "I'm happy to connect about software development, ERP/HRM solutions, and practical AI applications in business.",
    emailLabel:     'Reach me via Email',
    copyEmail:      'Copy email',
    copiedEmail:    'Copied!',
    send:           'Send email',
    phoneLabel:     'Phone',
    phoneHint:      'Tap to call',
    zaloLabel:      'Zalo',
    zaloName:       'Show QR code',
    msgTitle:       'Quick message',
    msgName:        'Your name',
    msgBody:        'Message…',
    msgSend:        'Send via Email',
    utilities:      'Utilities',
    copySig:        'Copy email signature',
    copiedSig:      'Signature copied!',
    copyLink:       'Copy page link',
    copiedLink:     'Link copied!',
    vcardBtn:       'Save contact (.vcf)',
    portraitAlt:    'Portrait of Le Thien Vu',
    qrAlt:          "Le Thien Vu's Zalo QR code",
    closeQr:        'Close',
    detailAria:     'Contact channels',
    copyFailed:     'Copy unavailable. Please copy manually.',
  },
  ja: {
    availableLabel: '連絡受付中',
    availableSub:   '通常24時間以内に返信',
    roleScript:     'Fullstack',
    roleMain:       'Software Engineer',
    description:    'ソフトウェア開発、ERP/HRMソリューション、企業でのAI活用について、ぜひお話しできればと思います。',
    emailLabel:     'メールで連絡',
    copyEmail:      'コピー',
    copiedEmail:    'コピーしました！',
    send:           'メールを送る',
    phoneLabel:     '電話',
    phoneHint:      'タップして電話',
    zaloLabel:      'Zalo',
    zaloName:       'QRコードを表示',
    msgTitle:       'クイックメッセージ',
    msgName:        'お名前',
    msgBody:        'メッセージ…',
    msgSend:        'メールで送信',
    utilities:      'ユーティリティ',
    copySig:        'メール署名をコピー',
    copiedSig:      '署名をコピーしました！',
    copyLink:       'リンクをコピー',
    copiedLink:     'コピーしました！',
    vcardBtn:       '連絡先を保存 (.vcf)',
    portraitAlt:    'Lê Thiên Vũの写真',
    qrAlt:          'Lê Thiên VũのZalo QRコード',
    closeQr:        '閉じる',
    detailAria:     '連絡先',
    copyFailed:     'コピーできませんでした。',
  },
  zh: {
    availableLabel: '欢迎联系',
    availableSub:   '通常24小时内回复',
    roleScript:     'Fullstack',
    roleMain:       'Software Engineer',
    description:    '欢迎交流软件开发、ERP/HRM 解决方案，以及 AI 在企业中的实际应用。',
    emailLabel:     '通过邮箱联系',
    copyEmail:      '复制邮箱',
    copiedEmail:    '已复制！',
    send:           '发送邮件',
    phoneLabel:     '电话',
    phoneHint:      '点击拨打',
    zaloLabel:      'Zalo',
    zaloName:       '显示二维码',
    msgTitle:       '快速消息',
    msgName:        '您的姓名',
    msgBody:        '消息内容…',
    msgSend:        '通过邮件发送',
    utilities:      '实用工具',
    copySig:        '复制邮件签名',
    copiedSig:      '签名已复制！',
    copyLink:       '复制页面链接',
    copiedLink:     '链接已复制！',
    vcardBtn:       '保存联系人 (.vcf)',
    portraitAlt:    'Lê Thiên Vũ的照片',
    qrAlt:          'Lê Thiên Vũ的Zalo二维码',
    closeQr:        '关闭',
    detailAria:     '联系方式',
    copyFailed:     '无法自动复制，请手动复制。',
  },
};

/* ─────────────────── SVG icons ─────────────────── */
const Ico = {
  Copy:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/></svg>,
  Check:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>,
  Arrow:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18 18 6M8 6h10v10"/></svg>,
  Close:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>,
  Download: () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 15V3m0 12-4-4m4 4 4-4"/><path d="M2 17v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2"/></svg>,
  Phone:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.09 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3 1.22h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21 15z"/></svg>,
  Link:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  Sig:      () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>,
  Send:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>,
  LinkedIn: () => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  GitHub:   () => <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>,
};

/* ─────────────────── Helpers ─────────────────── */
function useCopySlot() {
  const [state, setState] = useState(''); // '' | 'ok' | 'err'
  const timer = useRef(null);
  const trigger = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setState('ok');
    } catch {
      setState('err');
    }
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setState(''), 2600);
  }, []);
  useEffect(() => () => clearTimeout(timer.current), []);
  return [state, trigger];
}

/* ─────────────────── Component ─────────────────── */
export default function ContactSection() {
  const { lang } = useLanguage();
  const t = i18n[lang] || i18n.en;

  /* copy slots: email · signature · page-link */
  const [emailState,  copyEmail]  = useCopySlot();
  const [sigState,    copySig]    = useCopySlot();
  const [linkState,   copyLink]   = useCopySlot();

  /* QR modal */
  const [qrOpen, setQrOpen] = useState(false);

  /* quick-message form */
  const [msgName, setMsgName] = useState('');
  const [msgBody, setMsgBody] = useState('');

  /* signature preview modal */
  const [sigPreview, setSigPreview] = useState(false);

  /* Escape closes modals */
  useEffect(() => {
    const handler = (e) => {
      if (e.key !== 'Escape') return;
      setQrOpen(false);
      setSigPreview(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  const handleCopySig = useCallback(() => {
    copySig(buildSignatureHTML(lang));
  }, [copySig, lang]);

  const handleCopyLink = useCallback(() => {
    copyLink(window.location.href);
  }, [copyLink]);

  const handleQuickMsg = useCallback((e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`[Portfolio] Message from ${msgName}`);
    const body    = encodeURIComponent(`Hi Vũ,\n\n${msgBody}\n\n— ${msgName}`);
    window.location.href = `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  }, [msgName, msgBody]);

  /* shared toast — first non-empty slot wins */
  const toastMsg =
    emailState === 'ok'  ? t.copiedEmail  :
    emailState === 'err' ? t.copyFailed   :
    sigState   === 'ok'  ? t.copiedSig    :
    linkState  === 'ok'  ? t.copiedLink   : '';

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact__grid">

          {/* ══ SIGNATURE CARD — mirrors email-signature layout ══ */}
          <div className="contact__cell contact__cell--sig" aria-labelledby="contact-heading">

            {/* LEFT: portrait + tags */}
            <div className="contact__sig-left">
              <div className="contact__sig-portrait-wrap">
                <img
                  className="contact__sig-portrait"
                  src={avatarImg}
                  alt={t.portraitAlt}
                  width="120" height="160"
                  loading="lazy" decoding="async"
                />
              </div>
              <div className="contact__sig-tags" aria-hidden="true">
                {SKILLS_TAGS.map(tag => (
                  <span key={tag} className="contact__sig-tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* DIVIDER */}
            <div className="contact__sig-divider" aria-hidden="true" />

            {/* RIGHT: identity + availability + contacts */}
            <div className="contact__sig-right">
              <div className="contact__sig-name">
                <span className="contact__sig-name-plain">LÊ THIÊN </span>
                <span className="contact__sig-name-accent">VŨ</span>
              </div>
              <div className="contact__sig-title">
                <span className="contact__sig-role-script">{t.roleScript}</span>
                {' '}<span className="contact__sig-role-main">{t.roleMain}</span>
              </div>

              <div className="contact__sig-rule" aria-hidden="true" />

              {/* Availability badge */}
              <div className="contact__avail">
                <span className="contact__avail-dot" aria-hidden="true" />
                <div>
                  <strong className="contact__avail-label">{t.availableLabel}</strong>
                  <span className="contact__avail-sub">{t.availableSub}</span>
                </div>
              </div>

              {/* Contact rows */}
              <div className="contact__sig-contacts">
                <a className="contact__sig-row" href={`mailto:${EMAIL}`}>
                  <span className="contact__sig-row-icon" aria-hidden="true">
                    <Ico.Send />
                  </span>
                  <span>{EMAIL}</span>
                </a>
                <a className="contact__sig-row" href={`tel:${PHONE}`}>
                  <span className="contact__sig-row-icon" aria-hidden="true">
                    <Ico.Phone />
                  </span>
                  <span>(+84) 945 949 065</span>
                </a>
              </div>

              {/* Social pills */}
              <div className="contact__sig-socials">
                <a className="contact__sig-pill" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                  <Ico.LinkedIn /> LinkedIn
                </a>
                <a className="contact__sig-pill" href={GITHUB} target="_blank" rel="noopener noreferrer">
                  <Ico.GitHub /> GitHub
                </a>
                <a className="contact__sig-pill" href={PORTFOLIO} target="_blank" rel="noopener noreferrer">
                  <Ico.Link /> Portfolio
                </a>
              </div>
            </div>
          </div>

          {/* ══ EMAIL CELL ══ */}
          <div className="contact__cell contact__cell--email">
            <p className="contact__email-label">
              <span aria-hidden="true">✉</span> {t.emailLabel}
            </p>
            <a className="contact__email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <div className="contact__email-actions">
              <button
                className="contact__copy"
                type="button"
                onClick={() => copyEmail(EMAIL)}
                aria-label={t.copyEmail}
              >
                {emailState === 'ok' ? <Ico.Check /> : <Ico.Copy />}
                {emailState === 'ok' ? t.copiedEmail : t.copyEmail}
              </button>
              <a className="contact__send" href={`mailto:${EMAIL}`}>
                {t.send} <Ico.Arrow />
              </a>
            </div>
          </div>

          {/* ══ PHONE CELL ══ */}
          <div className="contact__cell contact__cell--phone">
            <div>
              <p className="contact__phone-label">{t.phoneLabel}</p>
              <a className="contact__phone-number" href={`tel:${PHONE}`}>(+84) 945 949 065</a>
            </div>
            <a className="contact__phone-hint" href={`tel:${PHONE}`}>
              <span className="contact__phone-hint-icon" aria-hidden="true"><Ico.Phone /></span>
              {t.phoneHint}
            </a>
          </div>

          {/* ══ LINKEDIN CELL ══ */}
          <a className="contact__cell contact__cell--linkedin" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <div className="contact__social-icon"><Ico.LinkedIn /></div>
            <div className="contact__social-info">
              <span className="contact__social-platform">LinkedIn</span>
              <span className="contact__social-handle">Lê Thiên Vũ <Ico.Arrow /></span>
            </div>
          </a>

          {/* ══ GITHUB CELL ══ */}
          <a className="contact__cell contact__cell--github" href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <div className="contact__social-icon"><Ico.GitHub /></div>
            <div className="contact__social-info">
              <span className="contact__social-platform">GitHub</span>
              <span className="contact__social-handle">lethienvu <Ico.Arrow /></span>
            </div>
          </a>

          {/* ══ ZALO CELL ══ */}
          <button className="contact__cell contact__cell--zalo" type="button" onClick={() => setQrOpen(true)} aria-label={t.zaloName}>
            <div className="contact__zalo-icon" aria-hidden="true">💬</div>
            <div className="contact__zalo-info">
              <span className="contact__zalo-label">{t.zaloLabel}</span>
              <span className="contact__zalo-name">{t.zaloName} <Ico.Arrow /></span>
            </div>
          </button>

          {/* ══ QUICK MESSAGE CELL ══ */}
          <div className="contact__cell contact__cell--msg">
            <p className="contact__msg-title">{t.msgTitle}</p>
            <form className="contact__msg-form" onSubmit={handleQuickMsg}>
              <input
                className="contact__msg-input"
                type="text"
                placeholder={t.msgName}
                value={msgName}
                onChange={e => setMsgName(e.target.value)}
                required
                maxLength={80}
                autoComplete="name"
              />
              <textarea
                className="contact__msg-textarea"
                placeholder={t.msgBody}
                value={msgBody}
                onChange={e => setMsgBody(e.target.value)}
                required
                maxLength={500}
                rows={3}
              />
              <button className="contact__msg-submit" type="submit">
                <Ico.Send /> {t.msgSend}
              </button>
            </form>
          </div>

          {/* ══ UTILITIES STRIP ══ */}
          <div className="contact__cell contact__cell--utils">
            <span className="contact__utils-label">{t.utilities}</span>
            <div className="contact__utils-actions">

              {/* Copy signature */}
              <button
                className={`contact__util-btn${sigState === 'ok' ? ' is-done' : ''}`}
                type="button"
                onClick={handleCopySig}
                title={t.copySig}
              >
                {sigState === 'ok' ? <Ico.Check /> : <Ico.Sig />}
                <span>{sigState === 'ok' ? t.copiedSig : t.copySig}</span>
              </button>

              {/* Copy page link */}
              <button
                className={`contact__util-btn${linkState === 'ok' ? ' is-done' : ''}`}
                type="button"
                onClick={handleCopyLink}
                title={t.copyLink}
              >
                {linkState === 'ok' ? <Ico.Check /> : <Ico.Link />}
                <span>{linkState === 'ok' ? t.copiedLink : t.copyLink}</span>
              </button>

              {/* Download vCard */}
              <a
                className="contact__util-btn"
                href={`${import.meta.env.BASE_URL}vcard.vcf`}
                download="LeThienVu_Contact.vcf"
                title={t.vcardBtn}
              >
                <Ico.Download />
                <span>{t.vcardBtn}</span>
              </a>
            </div>
          </div>

        </div>{/* /grid */}
      </div>

      {/* ══ ZALO QR MODAL ══ */}
      <div
        className={`contact__modal-backdrop${qrOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label={t.zaloName}
        onClick={e => { if (e.target === e.currentTarget) setQrOpen(false); }}
      >
        <div className="contact__qr-modal">
          <button className="contact__modal-close" type="button" onClick={() => setQrOpen(false)} aria-label={t.closeQr}>
            <Ico.Close />
          </button>
          <img src={qrZaloImg} alt={t.qrAlt} width="200" height="200" />
          <p className="contact__qr-label">Zalo</p>
        </div>
      </div>

      {/* ══ TOAST ══ */}
      <p className="contact__toast" aria-live="polite" role="status">{toastMsg}</p>
    </section>
  );
}
