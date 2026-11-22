import { useEffect, useRef, useState, useCallback } from 'react';
import './ContactSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import { ZaloIcon } from '../ProfileCard/ProfileCard.jsx';
import avatarImg from '../../assets/profile-avatar.webp';
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
    sectionHeading: 'Hãy cùng tạo nên điều\nđáng giá.',
    sectionDescription: 'Bạn có ý tưởng, dự án hoặc cơ hội hợp tác? Tôi luôn sẵn sàng lắng nghe.',
    roleScript:     'Fullstack',
    roleMain:       'Software Engineer (B.Eng.)',
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
    sectionHeading: 'Let’s build something\nmeaningful.',
    sectionDescription: 'Have an idea, a project, or an opportunity? I’d love to hear from you.',
    roleScript:     'Fullstack',
    roleMain:       'Software Engineer (B.Eng.)',
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
    sectionHeading: '一緒に価値あるものを\n作りましょう。',
    sectionDescription: 'アイデアやプロジェクト、協業の機会について、ぜひお聞かせください。',
    roleScript:     'Fullstack',
    roleMain:       'Software Engineer (B.Eng.)',
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
    sectionHeading: '一起创造\n有价值的东西。',
    sectionDescription: '如果你有想法、项目或合作机会，欢迎随时联系。',
    roleScript:     'Fullstack',
    roleMain:       'Software Engineer (B.Eng.)',
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
  Copy:     () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M11.1 22.75H6.9c-3.91 0-5.65-1.74-5.65-5.65v-4.2c0-3.91 1.74-5.65 5.65-5.65h4.2c3.91 0 5.65 1.74 5.65 5.65v4.2c0 3.91-1.74 5.65-5.65 5.65m-4.2-14c-3.1 0-4.15 1.05-4.15 4.15v4.2c0 3.1 1.05 4.15 4.15 4.15h4.2c3.1 0 4.15-1.05 4.15-4.15v-4.2c0-3.1-1.05-4.15-4.15-4.15z"/><path fill="currentColor" d="M17.1 16.75H16c-.41 0-.75-.34-.75-.75v-3.1c0-3.1-1.05-4.15-4.15-4.15H8c-.41 0-.75-.34-.75-.75V6.9c0-3.91 1.74-5.65 5.65-5.65h4.2c3.91 0 5.65 1.74 5.65 5.65v4.2c0 3.91-1.74 5.65-5.65 5.65m-.35-1.5h.35c3.1 0 4.15-1.05 4.15-4.15V6.9c0-3.1-1.05-4.15-4.15-4.15h-4.2c-3.1 0-4.15 1.05-4.15 4.15v.35h2.35c3.91 0 5.65 1.74 5.65 5.65z"/></svg>,
  Check:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>,
  Arrow:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M6 18 18 6M8 6h10v10"/></svg>,
  Close:    () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 6 6 18M6 6l12 12"/></svg>,
  Phone:    () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="m11.79 14.21-3.27 3.27q-.54-.48-1.05-.99a28.4 28.4 0 0 1-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41Q2 8.1 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.36.35.71.69 1.06.99" opacity=".4"/><path fill="#2563eb" d="M21.97 18.33c0 .28-.05.57-.15.85-.03.08-.06.16-.1.24-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13s.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78"/></svg>,
  Mail:     () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="#2563eb" d="M7 3h10c3 0 5 1.5 5 5v3.14c0 .73-.75 1.19-1.42.9a6.5 6.5 0 0 0-3.66-.45c-2.62.43-4.76 2.5-5.29 5.1-.15.76-.17 1.5-.07 2.21.08.59-.4 1.11-.99 1.11H7c-3 0-5-1.5-5-5v-7C2 4.5 4 3 7 3" opacity=".4"/><path fill="#2563eb" d="M12 11.87c-.84 0-1.69-.26-2.34-.79l-3.13-2.5a.748.748 0 0 1 .93-1.17l3.13 2.5c.76.61 2.05.61 2.81 0l3.13-2.5c.32-.26.8-.21 1.05.12.26.32.21.8-.12 1.05l-3.13 2.5c-.64.53-1.49.79-2.33.79M18 13c-2.76 0-5 2.23-5 5 0 2.76 2.24 5 5 5 2.77 0 5-2.24 5-5 0-2.77-2.23-5-5-5m2.05 4.55-.37.36-2.17 2.18c-.1.09-.29.19-.43.21l-.98.14c-.35.05-.6-.2-.55-.55l.14-.98a.87.87 0 0 1 .21-.43l2.18-2.17.36-.37c.24-.24.51-.4.79-.4.24 0 .51.11.81.4.66.66.45 1.17.01 1.61"/></svg>,
  Call:     () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17.45 22.75c-1.13 0-2.32-.27-3.55-.79-1.2-.51-2.41-1.21-3.59-2.06-1.17-.86-2.3-1.82-3.37-2.87-1.06-1.07-2.02-2.2-2.87-3.36-.86-1.2-1.55-2.4-2.04-3.56-.52-1.24-.78-2.44-.78-3.57 0-.78.14-1.52.41-2.21.28-.71.73-1.37 1.34-1.94.77-.76 1.65-1.14 2.59-1.14.39 0 .79.09 1.13.25.39.18.72.45.96.81L10 5.58c.21.29.37.57.48.85.13.3.2.6.2.89 0 .38-.11.75-.32 1.1a4 4 0 0 1-.67.85l-.68.71c.01.03.02.05.03.07.12.21.36.57.82 1.11.49.56.95 1.07 1.41 1.54.59.58 1.08 1.04 1.54 1.42.57.48.94.72 1.16.83l-.02.05.73-.72q.465-.465.9-.69c.55-.34 1.25-.4 1.95-.11.26.11.54.26.84.47l3.32 2.36c.37.25.64.57.8.95.15.38.22.73.22 1.08 0 .48-.11.96-.32 1.41s-.47.84-.8 1.2c-.57.63-1.19 1.08-1.91 1.37-.69.28-1.44.43-2.23.43m-11.86-20c-.55 0-1.06.24-1.55.72-.46.43-.78.9-.98 1.41-.21.52-.31 1.07-.31 1.66 0 .93.22 1.94.66 2.98.45 1.06 1.08 2.16 1.88 3.26S7 14.95 8 15.96c1 .99 2.08 1.91 3.19 2.72 1.08.79 2.19 1.43 3.29 1.89 1.71.73 3.31.9 4.63.35.51-.21.96-.53 1.37-.99.23-.25.41-.52.56-.84.12-.25.18-.51.18-.77 0-.16-.03-.32-.11-.5a.76.76 0 0 0-.28-.3l-3.32-2.36c-.2-.14-.38-.24-.55-.31-.22-.09-.31-.18-.65.03-.2.1-.38.25-.58.45l-.76.75c-.39.38-.99.47-1.45.3l-.27-.12c-.41-.22-.89-.56-1.42-1.01-.48-.41-1-.89-1.63-1.51-.49-.5-.98-1.03-1.49-1.62q-.705-.825-1.02-1.41l-.12-.3c-.06-.23-.08-.36-.08-.5 0-.36.13-.68.38-.93l.75-.78c.2-.2.35-.39.45-.56.08-.13.11-.24.11-.34 0-.08-.03-.2-.08-.32-.07-.16-.18-.34-.32-.53L6.46 3.17a.9.9 0 0 0-.37-.31c-.16-.07-.33-.11-.5-.11m8.36 12.26-.16.68.27-.7c-.05-.01-.09 0-.11.02M18.5 9.75c-.41 0-.75-.34-.75-.75 0-.36-.36-1.11-.96-1.75-.59-.63-1.24-1-1.79-1-.41 0-.75-.34-.75-.75s.34-.75.75-.75c.97 0 1.99.52 2.88 1.47.83.89 1.37 1.98 1.37 2.78 0 .41-.34.75-.75.75M22 9.75c-.41 0-.75-.34-.75-.75 0-3.45-2.8-6.25-6.25-6.25-.41 0-.75-.34-.75-.75s.34-.75.75-.75c4.27 0 7.75 3.48 7.75 7.75 0 .41-.34.75-.75.75"/></svg>,
  Link:     () => <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>,
  Send:     () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8.75c-.41 0-.75-.34-.75-.75V3.81l-.72.72c-.29.29-.77.29-1.06 0a.754.754 0 0 1 0-1.06l2-2c.21-.21.54-.28.82-.16.28.11.46.39.46.69v6c0 .41-.34.75-.75.75"/><path fill="currentColor" d="M14 4.75c-.19 0-.38-.07-.53-.22l-2-2a.754.754 0 0 1 0-1.06c.29-.29.77-.29 1.06 0l2 2c.29.29.29.77 0 1.06-.15.15-.34.22-.53.22M16 22.75H8c-5.75 0-5.75-3.05-5.75-5.75v-1c0-2.23 0-4.75 4.75-4.75 1.19 0 1.63.29 2.25.75.03.03.07.05.1.09l1.02 1.08c.86.91 2.42.91 3.28 0l1.02-1.08c.03-.03.06-.06.1-.09.62-.47 1.06-.75 2.25-.75 4.75 0 4.75 2.52 4.75 4.75v1c-.02 3.82-1.95 5.75-5.77 5.75m-9-10c-3.25 0-3.25 1.02-3.25 3.25v1c0 2.74 0 4.25 4.25 4.25h8c2.98 0 4.25-1.27 4.25-4.25v-1c0-2.23 0-3.25-3.25-3.25-.72 0-.87.09-1.3.41l-.97 1.03A3.73 3.73 0 0 1 12 15.37a3.73 3.73 0 0 1-2.73-1.18l-.97-1.03c-.43-.32-.58-.41-1.3-.41"/><path fill="currentColor" d="M5 12.75c-.41 0-.75-.34-.75-.75v-2c0-1.94 0-4.35 3.68-4.7.4-.05.78.26.82.68.04.41-.26.78-.68.82-2.32.21-2.32 1.15-2.32 3.2v2c0 .41-.34.75-.75.75M19 12.75c-.41 0-.75-.34-.75-.75v-2c0-2.05 0-2.99-2.32-3.21a.75.75 0 0 1-.67-.82c.04-.41.4-.72.82-.67 3.68.35 3.68 2.76 3.68 4.7v2a.77.77 0 0 1-.76.75"/></svg>,
  LinkedIn: () => <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" fill="none" viewBox="0 0 21 21"><path fill="#0a66c2" fill-rule="evenodd" d="M19.479 0H1.583C.727 0 0 .677 0 1.511v17.977C0 20.323.477 21 1.333 21h17.896c.857 0 1.771-.677 1.771-1.512V1.511C21 .677 20.336 0 19.479 0M8 8h2.827v1.441h.031c.431-.777 1.704-1.566 3.278-1.566C17.157 7.875 18 9.479 18 12.45V18h-3v-5.003c0-1.33-.531-2.497-1.773-2.497-1.508 0-2.227 1.021-2.227 2.697V18H8zM3 18h3V8H3zM6.375 4.5a1.874 1.874 0 1 1-3.749.001A1.874 1.874 0 0 1 6.375 4.5" clip-rule="evenodd"/></svg>,
  GitHub:   () => <svg viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>,
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

  /* QR modal */
  const [qrOpen, setQrOpen] = useState(false);

  /* Escape closes modals */
  useEffect(() => {
    const handler = (e) => {
      if (e.key !== 'Escape') return;
      setQrOpen(false);
    };
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }, []);

  /* shared toast — first non-empty slot wins */
  const toastMsg =
    emailState === 'ok'  ? t.copiedEmail  :
    emailState === 'err' ? t.copyFailed   :
    '';

  return (
    <section id="contact" className="contact" aria-labelledby="contact-heading">
      <div className="container">
        <header className="contact__intro">
          <div className="contact__intro-copy">
            <h2 className="contact__heading" id="contact-heading">{t.sectionHeading}</h2>
            <p className="contact__description">{t.sectionDescription}</p>
          </div>
        </header>
        <div className="contact__grid">

          {/* ══ SIGNATURE CARD — mirrors email-signature layout ══ */}
          <div className="contact__cell contact__cell--sig" aria-labelledby="contact-heading">
            <div className="contact__sig-aura-layer contact__sig-aura-layer--one" aria-hidden="true" />
            <div className="contact__sig-aura-layer contact__sig-aura-layer--two" aria-hidden="true" />
            <div className="contact__sig-grain" aria-hidden="true">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <filter id="contact-ocean-grain">
                  <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
                  <feColorMatrix type="matrix" values="0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0 0 0 1 0" />
                </filter>
                <rect width="100%" height="100%" filter="url(#contact-ocean-grain)" />
              </svg>
            </div>

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
              <div className="contact__sig-social-links" aria-label="Social networks">
                <button className="contact__sig-social-btn contact__sig-social-btn--zalo" type="button" onClick={() => setQrOpen(true)} aria-label={t.zaloName}>
                  <ZaloIcon className="contact__zalo-icon" />
                  <span>Zalo</span>
                </button>
                <a className="contact__sig-social-btn contact__sig-social-btn--github" href={GITHUB} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                  <Ico.GitHub />
                  <span>GitHub</span>
                </a>
                <a className="contact__sig-social-btn contact__sig-social-btn--linkedin" href={LINKEDIN} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                  <Ico.LinkedIn />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* DIVIDER */}
            <div className="contact__sig-divider" aria-hidden="true" />

            {/* RIGHT: identity + contacts */}
            <div className="contact__sig-right">
              <div className="contact__sig-identity">
                <div className="contact__sig-name">
                  <span className="contact__sig-name-plain">LÊ THIÊN </span>
                  <span className="contact__sig-name-accent">VŨ</span>
                </div>
                <div className="contact__sig-title">
                  <span className="contact__sig-role-main">{t.roleMain}</span>
                </div>
              </div>

              <div className="contact__sig-rule" aria-hidden="true" />

              <div className="contact__sig-contact-group">
                {/* Contact rows */}
                <div className="contact__sig-contacts">
                  <div className="contact__sig-row">
                    <a className="contact__sig-row-link" href={`mailto:${EMAIL}`}>
                      <span className="contact__sig-row-icon" aria-hidden="true">
                        <Ico.Mail />
                      </span>
                      <span>{EMAIL}</span>
                    </a>
                    <span className="contact__sig-row-actions">
                      <button
                        className="contact__sig-action"
                        type="button"
                        onClick={() => copyEmail(EMAIL)}
                        aria-label={emailState === 'ok' ? t.copiedEmail : t.copyEmail}
                        data-tooltip={emailState === 'ok' ? t.copiedEmail : t.copyEmail}
                      >
                        {emailState === 'ok' ? <Ico.Check /> : <Ico.Copy />}
                      </button>
                      <a className="contact__sig-action" href={`mailto:${EMAIL}`} aria-label={t.send} data-tooltip={t.send}>
                        <Ico.Send />
                      </a>
                    </span>
                  </div>
                  <div className="contact__sig-row">
                    <a className="contact__sig-row-link" href={`tel:${PHONE}`}>
                      <span className="contact__sig-row-icon" aria-hidden="true">
                        <Ico.Phone />
                      </span>
                      <span>(+84) 945 949 065</span>
                    </a>
                    <span className="contact__sig-row-actions">
                      <button
                        className="contact__sig-action"
                        type="button"
                        onClick={() => copyEmail(PHONE)}
                        aria-label={t.copyEmail}
                        data-tooltip={t.copyEmail}
                      >
                        <Ico.Copy />
                      </button>
                      <a className="contact__sig-action" href={`tel:${PHONE}`} aria-label={t.phoneHint} data-tooltip={t.phoneHint}>
                        <Ico.Call />
                      </a>
                    </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>{/* /grid */}
      </div>

      {/* ══ ZALO QR MODAL ══ */}
      <div
        className={`contact__modal-backdrop${qrOpen ? ' is-open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!qrOpen}
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
