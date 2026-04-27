import React from 'react';
import './ExperienceSection.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';
import { HtmlText } from '../HtmlText.jsx';
import logoSGU from '../../assets/sgu-logo.png';
import logoVTS from '../../assets/vtsLogo.svg';
import imgMem1 from '../../assets/experienceBg/thienVu_1.jpeg';
import imgMem2 from '../../assets/experienceBg/thienVu_2.jpeg';
import imgMem3 from '../../assets/experienceBg/thienvu_3.jpeg';
import imgMem4 from '../../assets/experienceBg/thienVu_4.jpeg';
import imgMem5 from '../../assets/experienceBg/sguPic.png';

function TimelineItem({ item, clientsLabel }) {
  return (
    <article className="timeline__item" aria-label={`${item.role} tại ${item.company}`}>
      <div className={`timeline__dot${item.current ? ' timeline__dot--current' : ''}`} aria-hidden="true" />

      <div className="timeline__period">{item.period}</div>
      <h3 className="timeline__role">{item.role}</h3>

      <div className="timeline__card">
        {item.kpis && item.kpis.length > 0 && (
          <div className="exp-kpi-row" role="list" aria-label="Key metrics">
            {item.kpis.map(kpi => (
              <div key={kpi.label} className="exp-kpi" role="listitem">
                <div className="exp-kpi-value">{kpi.value}</div>
                <div className="exp-kpi-label">{kpi.label}</div>
              </div>
            ))}
          </div>
        )}

        {item.highlights && item.highlights.length > 0 && (
          <ul className="timeline__highlights" style={{ marginTop: 'var(--space-4)' }} role="list">
            {item.highlights.map((text, i) => (
              <li key={i} className="timeline__highlight" role="listitem">
                <span className="timeline__highlight-icon" aria-hidden="true">✓</span>
                <HtmlText>{text}</HtmlText>
              </li>
            ))}
          </ul>
        )}

        {item.tags && item.tags.length > 0 && (
          <div className="timeline__tags" role="list" aria-label="Technologies used">
            {item.tags.map(tag => (
              <span key={tag} className="tag" role="listitem">{tag}</span>
            ))}
          </div>
        )}

        {item.images && item.images.length > 0 && (
          <div className="timeline__images">
            {item.images.map((imgUrl, idx) => (
              <img key={idx} src={imgUrl} alt={`${item.role} ảnh ${idx + 1}`} className="timeline__event-img" />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const { t } = useLanguage();
  const e = t.experience;

  return (
    <section id="experience" className="experience" aria-labelledby="exp-heading">
      {/* Scattered memories background */}
      <div className="experience__memories" aria-hidden="true">
        <img src={imgMem1} alt="" className="memory-img memory-img--1" />
        <img src={imgMem2} alt="" className="memory-img memory-img--2" />
        <img src={imgMem3} alt="" className="memory-img memory-img--3" />
        <img src={imgMem4} alt="" className="memory-img memory-img--4" />
        <img src={imgMem5} alt="" className="memory-img memory-img--5" />
      </div>

      <div className="container">
        <header className="experience__header">
          <h2 id="exp-heading" className="section-title">{e.title}</h2>
          <p className="section-subtitle"><HtmlText>{e.subtitle}</HtmlText></p>
        </header>

        <div className="timeline" role="list" aria-label="Career timeline">
          {e.jobs.map((job, i) => {
            const showCompany = i === 0 || e.jobs[i - 1].company !== job.company;
            return (
              <React.Fragment key={i}>
                {showCompany && (
                  <div className="timeline__company-header">
                    <div className="company-logo">
                      <img src={job.company.includes('SGU') ? logoSGU : logoVTS} alt={job.company} />
                    </div>
                    <div className="company-info">
                      <div className="company-name">{job.company}</div>
                      {job.companyDesc && <div className="company-desc">{job.companyDesc}</div>}
                    </div>
                  </div>
                )}
                <TimelineItem item={job} clientsLabel={e.clientsLabel} />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
}
