import { useState } from 'react';
import { publicCaseStudies } from './publicCaseStudies';
import { showcaseImages } from './showcaseImages';
import './CaseStudyReader.css';

export default function CaseStudyReader({ index, item, title, image, locale }) {
  const [selected, setSelected] = useState(0);
  const data = publicCaseStudies[index] || {};
  const text = value => value?.[locale];
  const vi = locale === 'vi';
  const images = showcaseImages[index] || [{src:image, vi:title, en:title}];
  const current = images[selected] || images[0];
  const client = index >= 6;
  return <article className={`case-reader${client ? ' case-reader--client' : ''}`}>
    <header className="case-reader__hero">
      <h2 id="case-study-dialog-title">{title}</h2>
      <p className="case-reader__lead">{client ? (vi ? 'Dự án triển khai giải pháp quản trị nhân sự Paradise HR.' : 'A Paradise HR human resource management implementation project.') : text(item.value)}</p>
      {data.role && <p className="case-reader__ownership"><strong>{vi ? 'Vai trò của tôi' : 'My role'}</strong> {text(data.role)}</p>}
      {data.contributions && <ul className="case-reader__contributions">{text(data.contributions).map(line => <li key={line}>{line}</li>)}</ul>}
    </header>
    {client ? <img className="case-reader__client-logo" src={image} alt={title} /> : <section className="case-reader__explorer" aria-label={vi ? 'Khám phá giao diện sản phẩm' : 'Explore the product interface'}>
      <div className="case-reader__explorer-heading"><h3>{vi ? 'Khám phá sản phẩm' : 'Explore the product'}</h3>{index === 0 && <span>{vi ? 'Giao diện Website' : 'Website interface'}</span>}</div>
      {images.length > 1 && <div className="case-reader__choices" aria-label={vi ? 'Chọn màn hình' : 'Choose a screen'}>{images.map((entry, i) => <button key={entry.src} type="button" aria-pressed={selected === i} onClick={() => setSelected(i)}>{entry[locale]}</button>)}</div>}
      <figure>
        <div className="case-reader__preview"><img src={current.src} alt={current[locale]} /></div>
        <figcaption aria-live="polite"><span>{current[locale]}</span></figcaption>
      </figure>
    </section>}
    {data.decisions && <section className="case-reader__engineering"><h3>{vi ? 'Bên trong quá trình xây dựng' : 'Inside the build'}</h3><p>{text(data.challenge)}</p>{text(data.decisions).map(decision => <details key={decision.title}><summary>{decision.title}</summary><p>{decision.text}</p></details>)}</section>}
    {data.outcome && <section className="case-reader__delivery"><h3>{vi ? 'Đã bàn giao & bước tiếp theo' : 'Delivery & next steps'}</h3>{index === 0 ? <><div><h4>{vi ? 'Mobile App · Đã triển khai' : 'Mobile app · Deployed'}</h4><p>{vi ? 'Giao diện Mobile App mới đã được triển khai cho khoảng 2.000 người dùng tại nhiều khách hàng, với phản hồi tích cực — theo chia sẻ của người thực hiện.' : 'The contributor reports deployment of the new mobile interface to approximately 2,000 users across multiple clients, with positive feedback.'}</p></div><div><h4>{vi ? 'Website & UI Framework · Đang phát triển' : 'Website & UI framework · In development'}</h4><p>{vi ? 'Phần việc cá nhân tập trung vào UI/UX, WebView và nền tảng giao diện. Quy mô sử dụng là kết quả triển khai của sản phẩm, không phải thành tích riêng của một cá nhân.' : 'Personal work focuses on UI/UX, WebView and the interface foundation. Adoption reflects the product rollout, not an individual accomplishment.'}</p></div></> : <p>{text(data.outcome)}</p>}</section>}
    {data.role && item.skills && <p className="case-reader__stack"><strong>{vi ? 'Công nghệ sử dụng' : 'Technology used'}</strong> {text(item.skills).join(' · ')}</p>}
  </article>;
}
