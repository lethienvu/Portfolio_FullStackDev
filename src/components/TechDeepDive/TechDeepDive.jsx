import React from "react";
import "./TechDeepDive.css";
import { useLanguage } from "../../i18n/LanguageContext.jsx";
import { HtmlText } from "../HtmlText.jsx";

const iconMap = {
  frontend: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="13.253 15.619 37.494 32.762"
    >
      <g
        fill="none"
        stroke="#093fb4ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      >
        <path d="M23.63 41.751v5.88M32.082 41.751v5.88M20.691 47.631h14.698" />
      </g>
      <path
        fill="#fff7e9ff"
        stroke="#ff731dff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M46.372 47.631h-6.75a3.625 3.625 0 0 1-3.625-3.625V19.994a3.625 3.625 0 0 1 3.625-3.625h6.75a3.625 3.625 0 0 1 3.625 3.625v24.011a3.625 3.625 0 0 1-3.625 3.626"
      />
      <path
        fill="#fff7e9ff"
        stroke="#093fb4ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M35.536 41.751H20.47a6.467 6.467 0 0 1-6.467-6.467v-8.709a6.467 6.467 0 0 1 6.467-6.467h15.066a6.467 6.467 0 0 1 6.467 6.467v8.709a6.467 6.467 0 0 1-6.467 6.467"
      />
    </svg>
  ),
  backend: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="11.807 12 40.386 39.999"
    >
      <g
        fill="none"
        stroke="#093fb4ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      >
        <path d="M16.443 44.25v-1.778c0-1.114.903-2.017 2.017-2.017h27.465c1.114 0 2.017.903 2.017 2.017v1.778M32.211 37.25v7" />
      </g>
      <path
        fill="#fff7e9ff"
        stroke="#ff731dff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M39.477 12.753c-4.16-.094-7.853 1.891-10.133 4.984-.924 1.254-2.373 2.013-3.931 2.013h-3.806c-4.66 0-8.73 3.517-9.031 8.168a8.75 8.75 0 0 0 8.731 9.332h17.886c6.935 0 12.525-5.764 12.24-12.762-.26-6.37-5.582-11.59-11.956-11.735"
      />
      <g
        fill="#fff7e9ff"
        stroke="#093fb4ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      >
        <path d="M18.341 44.25h-3.795c-.885 0-1.602.717-1.602 1.602v3.795c0 .885.717 1.602 1.602 1.602h3.795c.885 0 1.602-.717 1.602-1.602v-3.795c0-.885-.717-1.602-1.602-1.602M49.841 44.25h-3.795c-.885 0-1.602.717-1.602 1.602v3.795c0 .885.717 1.602 1.602 1.602h3.795c.885 0 1.602-.717 1.602-1.602v-3.795c0-.885-.717-1.602-1.602-1.602M39.341 44.25H25.045c-.885 0-1.602.717-1.602 1.602v3.795c0 .885.717 1.602 1.602 1.602H39.34c.885 0 1.602-.717 1.602-1.602v-3.795a1.6 1.6 0 0 0-1.601-1.602" />
      </g>
      <path
        fill="none"
        stroke="#ff731dff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M30.443 47.75h3.5"
      />
    </svg>
  ),
  uiux: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="13.4 13.75 37.2 36.5"
    >
      <path
        fill="#fff7e9ff"
        stroke="#093fb4ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M36.541 49.5h-9.083a7.71 7.71 0 0 1-7.709-7.709V22.209a7.71 7.71 0 0 1 7.709-7.709h9.083a7.71 7.71 0 0 1 7.709 7.709v19.583a7.71 7.71 0 0 1-7.709 7.708"
      />
      <path
        fill="#fff7e9ff"
        stroke="#093fb4ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M46.7 25.708h-6.3a3.15 3.15 0 0 0-3.15 3.15v6.3a3.15 3.15 0 0 0 3.15 3.15h.167v.995c0 1.125 1.361 1.689 2.156.893l1.875-1.875q.005-.006.009-.013H46.7a3.15 3.15 0 0 0 3.15-3.15v-6.3a3.15 3.15 0 0 0-3.15-3.15M17.3 25.708h6.3a3.15 3.15 0 0 1 3.15 3.15v6.3a3.15 3.15 0 0 1-3.15 3.15h-.167v.995c0 1.125-1.361 1.689-2.156.893l-1.875-1.875q-.005-.006-.009-.013H17.3a3.15 3.15 0 0 1-3.15-3.15v-6.3a3.15 3.15 0 0 1 3.15-3.15"
      />
      <g
        fill="none"
        stroke="#ff731dff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      >
        <path d="M22.84 29.347c-.932-.348-1.818.079-2.197.812a.216.216 0 0 1-.386 0c-.379-.733-1.265-1.159-2.197-.812-.663.248-1.071.908-1.069 1.616a3.85 3.85 0 0 0 2.641 3.646l.298.097c.341.112.709.111 1.049-.002l.29-.096a3.85 3.85 0 0 0 2.641-3.646c0-.707-.407-1.367-1.07-1.615M41.377 33.667v-3.904a.808.808 0 0 1 1.227-.69l3.105 1.887a.807.807 0 0 1 .02 1.367l-3.105 2.017a.807.807 0 0 1-1.247-.677M30.25 46h3.5M34.184 19.75h-4.369a2.2 2.2 0 0 1-2.202-2.202V14.5h8.773v3.048a2.2 2.2 0 0 1-2.202 2.202" />
      </g>
    </svg>
  ),
  techlead: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="12 20.75 40 22.5"
    >
      <path
        fill="#fff7e9ff"
        stroke="#ff731dff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M51.25 40.22c0 1.259-1.047 2.28-2.339 2.28H38.779c-1.292 0-2.339-1.021-2.339-2.28v0c0-3.296 2.742-5.969 6.124-5.969h2.563c3.381 0 6.123 2.672 6.123 5.969"
      />
      <circle
        cx="43.845"
        cy="27.105"
        r="4.124"
        fill="#fff7e9ff"
        stroke="#ff731dff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <path
        fill="#fff7e9ff"
        stroke="#ff731dff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
        d="M27.561 40.22c0 1.259-1.047 2.28-2.339 2.28H15.089c-1.292 0-2.339-1.021-2.339-2.28v0c0-3.296 2.742-5.969 6.124-5.969h2.563c3.382 0 6.124 2.672 6.124 5.969"
      />
      <circle
        cx="20.155"
        cy="27.105"
        r="4.124"
        fill="#fff7e9ff"
        stroke="#ff731dff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      />
      <g
        fill="#fff7e9ff"
        stroke="#093fb4ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        strokeWidth="1.5"
      >
        <path d="M39.975 40.044c0 1.356-1.128 2.456-2.519 2.456H26.544c-1.391 0-2.519-1.099-2.519-2.456v0c0-3.55 2.953-6.428 6.595-6.428h2.76c3.642.001 6.595 2.878 6.595 6.428" />
        <circle cx="32" cy="25.942" r="4.442" />
      </g>
    </svg>
  ),
  ai: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
    >
      <g
        fill="none"
        stroke="#093fb4ff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
      >
        <path
          fill="#fff7e9ff"
          d="M12 21a9 9 0 1 0-9-9c0 1.488.36 2.89 1 4.125L3 21l4.875-1c1.236.64 2.637 1 4.125 1Z"
        />
        <path
          stroke="#ff731dff"
          d="M9 10a3 3 0 1 1 6 0c0 1.657-1.343 3-3 3s-3-1.343-3-3ZM12 13v3"
        />
        <path d="M9 16h6" stroke="#ff731dff" />
      </g>
    </svg>
  ),
};

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
                        className="tech-logo-img"
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
