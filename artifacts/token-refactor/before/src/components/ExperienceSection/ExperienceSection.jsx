import { useEffect, useRef, useState } from 'react';
import './ExperienceSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import { HtmlText } from '../HtmlText.jsx';
import ExperienceRouteTimeline from './ExperienceRouteTimeline.jsx';
import logoSGU from '../../assets/sgu-logo.webp';
import logoVTS from '../../assets/vtsLogo.svg';
import logoASOFT from '../../assets/asotf_logo.svg';

function CompanyMark({ company }) {
  if (company.includes('SGU')) return <img src={logoSGU} alt={company} />;
  if (company.includes('VIET TIN') || company.includes('Việt Tín')) return <img src={logoVTS} alt={company} />;
  if (company.includes('ASOFT')) return <img src={logoASOFT} alt={company} />;
  return <span aria-label={company}>AS</span>;
}

function DetailDialog({ job, onClose }) {
  const closeButtonRef = useRef(null);
  useEffect(() => { const onKey = (event) => event.key === 'Escape' && onClose(); window.addEventListener('keydown', onKey); closeButtonRef.current?.focus(); return () => window.removeEventListener('keydown', onKey); }, [onClose]);
  if (!job) return null;
  return <div className="experience-dialog__backdrop" role="presentation" onMouseDown={onClose}><section className="experience-dialog" role="dialog" aria-modal="true" aria-labelledby="experience-dialog-title" onMouseDown={(event) => event.stopPropagation()}><button ref={closeButtonRef} className="experience-dialog__close" onClick={onClose} aria-label="Close experience details">×</button><div className="experience-dialog__period">{job.period}</div><h3 id="experience-dialog-title">{job.role}</h3><div className="experience-dialog__company"><CompanyMark company={job.company} /><div><strong>{job.company}</strong>{job.companyDesc && <p>{job.companyDesc}</p>}</div></div>{job.kpis?.length > 0 && <div className="experience-dialog__kpis">{job.kpis.map((kpi) => <div key={kpi.label}><strong>{kpi.value}</strong><span>{kpi.label}</span></div>)}</div>}<ul>{job.highlights?.map((highlight) => <li key={highlight}><HtmlText>{highlight}</HtmlText></li>)}</ul><div className="experience-dialog__tags">{job.tags?.map((tag) => <span key={tag}>{tag}</span>)}</div></section></div>;
}

export default function ExperienceSection() {
  const { t, lang } = useLanguage(); const [selected, setSelected] = useState(null); const e = t.experience;
  const detailLabel = lang === 'vi' ? 'Xem chi tiết' : lang === 'ja' ? '詳細を見る' : lang === 'zh' ? '查看详情' : 'View details';
  const routeLabel = lang === 'vi' ? 'Hành trình kinh nghiệm' : lang === 'ja' ? 'キャリアの軌跡' : lang === 'zh' ? '职业历程' : 'Career journey';
  return <section id="experience" className="experience" aria-labelledby="exp-heading"><div className="container"><header className="experience__header"><h2 id="exp-heading" className="section-title">{e.title}</h2><p className="section-subtitle"><HtmlText>{e.subtitle}</HtmlText></p></header><ExperienceRouteTimeline jobs={e.jobs} label={routeLabel} detailLabel={detailLabel} onSelect={setSelected} CompanyMark={CompanyMark} /></div><DetailDialog job={selected} onClose={() => setSelected(null)} /></section>;
}
