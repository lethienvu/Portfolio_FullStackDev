import { useState } from 'react';
import { publicCaseStudies } from './publicCaseStudies';
import { showcaseImages } from './showcaseImages';
import './CaseStudyReader.css';

export default function CaseStudyReader({ index, item, title, image, locale }) {
  const [selected, setSelected] = useState(0);
  const data = publicCaseStudies[index] || {};
  const text = value => value?.[locale] || value?.en || value?.vi;
  const copy = locale === 'vi'
    ? { role: 'Vai trò của tôi', explore: 'Khám phá sản phẩm', screen: 'Chọn màn hình', website: 'Giao diện Website', engineering: 'Bên trong quá trình xây dựng', delivery: 'Đã bàn giao & bước tiếp theo', technology: 'Công nghệ sử dụng', lead: 'Dự án triển khai giải pháp quản trị nhân sự Paradise HR.' }
    : locale === 'ja'
    ? { role: '担当範囲', explore: '製品を詳しく見る', screen: '画面を選択', website: 'Webサイト画面', engineering: '開発の進め方', delivery: '成果と次のステップ', technology: '使用技術', lead: 'Paradise HR人事管理ソリューションの導入プロジェクトです。' }
    : locale === 'zh'
    ? { role: '我的职责', explore: '了解产品', screen: '选择界面', website: '网站界面', engineering: '开发过程', delivery: '交付成果与后续', technology: '使用技术', lead: '这是一个Paradise HR人力资源管理解决方案实施项目。' }
    : { role: 'My role', explore: 'Explore the product', screen: 'Choose a screen', website: 'Website interface', engineering: 'Inside the build', delivery: 'Delivery & next steps', technology: 'Technology used', lead: 'A Paradise HR human resource management implementation project.' };
  const images = showcaseImages[index] || [{src:image, vi:title, en:title}];
  const current = images[selected] || images[0];
  const client = index >= 6;
  return <article className={`case-reader${client ? ' case-reader--client' : ''}`}>
    <header className="case-reader__hero">
      <h2 id="case-study-dialog-title">{title}</h2>
      <p className="case-reader__lead">{client ? copy.lead : text(item.value)}</p>
      {data.role && <p className="case-reader__ownership"><strong>{copy.role}</strong> {text(data.role)}</p>}
      {data.contributions && <ul className="case-reader__contributions">{text(data.contributions).map(line => <li key={line}>{line}</li>)}</ul>}
    </header>
    {client ? <img className="case-reader__client-logo" src={image} alt={title} /> : <section className="case-reader__explorer" aria-label={copy.explore}>
      <div className="case-reader__explorer-heading"><h3>{copy.explore}</h3>{index === 0 && <span>{copy.website}</span>}</div>
      {images.length > 1 && <div className="case-reader__choices" aria-label={copy.screen}>{images.map((entry, i) => <button key={entry.src} type="button" aria-pressed={selected === i} onClick={() => setSelected(i)}>{entry[locale] || entry.en || entry.vi}</button>)}</div>}
      <figure>
        <div className="case-reader__preview"><img src={current.src} alt={current[locale] || current.en || current.vi} /></div>
        <figcaption aria-live="polite"><span>{current[locale] || current.en || current.vi}</span></figcaption>
      </figure>
    </section>}
    {data.decisions && <section className="case-reader__engineering"><h3>{copy.engineering}</h3><p>{text(data.challenge)}</p>{text(data.decisions).map(decision => <details key={decision.title}><summary>{decision.title}</summary><p>{decision.text}</p></details>)}</section>}
    {data.outcome && <section className="case-reader__delivery"><h3>{copy.delivery}</h3>{index === 0 ? <><div><h4>{locale === 'vi' ? 'Mobile App · Đã triển khai' : locale === 'ja' ? 'モバイルアプリ · 導入済み' : locale === 'zh' ? '移动应用 · 已交付' : 'Mobile app · Deployed'}</h4><p>{locale === 'vi' ? 'Giao diện Mobile App mới đã được triển khai cho khoảng 2.000 người dùng tại nhiều khách hàng.' : locale === 'ja' ? '新しいモバイルインターフェースは複数の顧客に導入されました。' : locale === 'zh' ? '新的移动界面已在多个客户环境中交付使用。' : 'The new mobile interface has been deployed across multiple client environments.'}</p></div><div><h4>{locale === 'vi' ? 'Website & UI Framework · Đang phát triển' : locale === 'ja' ? 'WebサイトとUIフレームワーク · 開発中' : locale === 'zh' ? '网站与UI框架 · 开发中' : 'Website & UI framework · In development'}</h4><p>{locale === 'vi' ? 'Trọng tâm công việc cá nhân là UI/UX, WebView và nền tảng giao diện.' : locale === 'ja' ? '担当範囲はUI/UX、WebView、インターフェース基盤です。' : locale === 'zh' ? '个人工作重点包括UI/UX、WebView和界面基础架构。' : 'Personal work focuses on UI/UX, WebView and the interface foundation.'}</p></div></> : <p>{text(data.outcome)}</p>}</section>}
    {data.role && item.skills && <p className="case-reader__stack"><strong>{copy.technology}</strong> {text(item.skills).join(' · ')}</p>}
  </article>;
}
