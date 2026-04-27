import './ProjectShowcase.css';
import { useLanguage } from '../../i18n/LanguageContext.jsx';

// Import Customer Logos
import detmold from '../../assets/customer/DETMOLD_packaging.jpg';
import steelFlower from '../../assets/customer/STEALFLOWER.removebg-preview.png';
import lichien from '../../assets/customer/lichien.png';
import lotte from '../../assets/customer/lotte.png';
import tvc from '../../assets/customer/tvc_logo.png';

export default function ProjectShowcase() {
  const { t } = useLanguage();
  const p = t.projects;

  const projects = [
    {
      id: 1,
      title: p.project1?.title || 'Enterprise Resource Planning System',
      scale: p.project1?.scale || '10+ MNC deployments | 14,000+ users',
      challenge: p.project1?.challenge || 'Transform 150+ fragmented business rules into unified system architecture',
      solution: p.project1?.solution || 'Architected modular SQL Server database with 200+ stored procedures; built React SPA with custom state management',
      impact: p.project1?.impact || 'Reduced delivery time by 25%; achieved 99.7% uptime',
      tags: ['React', 'SQL Server', 'Enterprise Architecture']
    },
    {
      id: 2,
      title: p.project2?.title || 'High-Performance Data Visualization',
      scale: p.project2?.scale || '10,000+ nodes | Sub-second response',
      challenge: p.project2?.challenge || 'Render complex organizational structures without UI lag',
      solution: p.project2?.solution || 'Engineered Virtual Scrolling with windowing; optimized T-SQL with indexed views and recursive CTE',
      impact: p.project2?.impact || 'Maintained 60 FPS; reduced query time from 45s to 2.3s',
      tags: ['Virtual Scrolling', 'T-SQL Optimization', 'Performance']
    },
    {
      id: 3,
      title: p.project3?.title || 'Custom SPA Framework',
      scale: p.project3?.scale || '40% bundle reduction | Sub-second load',
      challenge: p.project3?.challenge || 'Eliminate framework bloat while maintaining developer productivity',
      solution: p.project3?.solution || 'Built lightweight routing with code-splitting; custom hooks for API integration; tree-shaking component library',
      impact: p.project3?.impact || 'Lighthouse score 62→94; reduced TTI by 3.2s',
      tags: ['Framework Design', 'Code Splitting', 'Web Performance']
    }
  ];

  const clients = [
    { name: 'DETMOLD', img: detmold },
    { name: 'STEEL FLOWER', img: steelFlower },
    { name: 'Lien Chien', img: lichien },
    { name: 'LOTTE', img: lotte },
    { name: 'TVC', img: tvc },
  ];

  return (
    <section id="projects" className="projects" aria-labelledby="proj-heading">
      <div className="container">
        <header className="projects__header">
          <h2 id="proj-heading" className="section-title">{p.title}</h2>
          <p className="section-subtitle">{p.subtitle}</p>
        </header>

        <div className="projects__grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              <div className="project-card__header">
                <h3 className="project-card__title">{project.title}</h3>
                <div className="project-card__scale">{project.scale}</div>
              </div>
              
              <div className="project-card__content">
                <div className="project-card__section">
                  <span className="project-card__label">Challenge</span>
                  <p className="project-card__text">{project.challenge}</p>
                </div>
                
                <div className="project-card__section">
                  <span className="project-card__label">Solution</span>
                  <p className="project-card__text">{project.solution}</p>
                </div>
                
                <div className="project-card__section">
                  <span className="project-card__label">Impact</span>
                  <p className="project-card__text project-card__text--impact">{project.impact}</p>
                </div>
              </div>

              <div className="project-card__tags">
                {project.tags.map((tag, i) => (
                  <span key={i} className="project-card__tag">{tag}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="clients-section">
          <h3 className="clients-section__title">{p.clientTitle || 'Trusted by Leading Organizations'}</h3>
          <div className="clients-grid">
            {clients.map((client, i) => (
              <div key={i} className="client-logo">
                <img src={client.img} alt={client.name} title={client.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
