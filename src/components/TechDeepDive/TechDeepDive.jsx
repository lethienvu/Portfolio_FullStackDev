
import "./TechDeepDive.css";
import { useLanguage } from "../../i18n/LanguageContext.jsx";
import { HtmlText } from "../HtmlText.jsx";

export default function TechDeepDive() {
  const { t } = useLanguage();
  const tech = t.tech;

  return (
    <section id="technical" className="tech" aria-labelledby="tech-heading">
      <div className="container tech__inner">
        <header className="tech__header">
          <h2 id="tech-heading" className="section-title">
            {tech.title}
          </h2>
          <p className="section-subtitle">{tech.subtitle}</p>
        </header>

        {/* 2×2 tech cards */}
        <div className="tech__grid" role="list">
          {tech.cards.map((card) => (
            <article key={card.title} className="tech__card" role="listitem">
              <div className="tech__card-top">
                {card.logos && (
                  <div className="tech__card-logos">
                    {card.logos.map((logo, i) => (
                      <img
                        key={i}
                        src={logo}
                        alt="tech-logo"
                        className="tech-logo-img no-lightbox"
                        loading="lazy"
                      />
                    ))}
                  </div>
                )}
              </div>
              <h3 className="tech__card-title">{card.title}</h3>
              <p className="tech__card-desc">
                <HtmlText>{card.desc}</HtmlText>
              </p>

              {card.skills && (
                <div className="tech__card-skills">
                  {card.skills.map((skill) => (
                    <span key={skill} className="tech-skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              )}

              <div
                className="tech__card-metrics"
                role="list"
                aria-label="Metrics"
              >
                {card.metrics.map((m) => (
                  <div key={m.label} className="tech__metric" role="listitem">
                    <div className="tech__metric-value">{m.value}</div>
                    <div className="tech__metric-label">{m.label}</div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
