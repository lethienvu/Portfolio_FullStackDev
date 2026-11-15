import './EditorialProjectCard.css';
import { projectCoverMedia } from './projectCoverMedia.js';

export default function EditorialProjectCard({ index, title, image, category, summary, copy, onOpen }) {
    const vi = copy.view === 'Xem chi tiết dự án';
    const descriptions = vi
      ? ['Triển khai hệ thống quản trị nhân sự HRM.', 'Triển khai hệ thống quản trị nhân sự HRM.', 'Triển khai giải pháp quản trị nhân sự Paradise HR.', 'Tư vấn giải pháp quản trị doanh nghiệp ERP.', 'Tư vấn giải pháp quản trị doanh nghiệp ERP.', 'Giải pháp quản trị nhân sự Paradise HR.']
      : ['HRM implementation for human resources management.', 'HRM implementation for human resources management.', 'Paradise HR implementation for human resources management.', 'ERP consulting for enterprise management.', 'ERP consulting for enterprise management.', 'Paradise HR human resources management solution.'];
  const media = projectCoverMedia[index];
  const logo = index === 11 ? null : index >= 6 ? image : `${import.meta.env.BASE_URL}product/${media.logo}`;
  const background = media.background === 'existing' ? image : media.background;
  return <article className="cover-project" aria-labelledby={`project-title-${index}`}>
    {background && <img className="cover-project__image" src={background} style={{ objectPosition: media.position }} alt="" loading="lazy" />}
    <div className="cover-project__top">
      <span className="cover-project__category">{category}</span>
      {logo && <span className="cover-project__logo"><img src={logo} alt={index >= 6 ? title : media.product} /></span>}
    </div>
    <div className="cover-project__body">
      <h4 id={`project-title-${index}`}>{title}</h4>
      <p>{index >= 6 && index < 11 ? descriptions[index - 6] : summary}</p>
    </div>
    <button className="cover-project__cta" type="button" aria-haspopup="dialog" aria-label={`${copy.view}: ${title}`} onClick={onOpen}>
      <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 18 18 6M6 6h12v12" /></svg>
    </button>
  </article>;
}
