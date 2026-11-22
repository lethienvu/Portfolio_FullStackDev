import { useLanguage } from '../../i18n/LanguageContext';
import './ClientsAndProducts.css';

// Import logos khách hàng
import lotteImg from '../../assets/customer/lotte.webp';
import lichienImg from '../../assets/customer/lichien.webp';
import stealflowerImg from '../../assets/customer/STEALFLOWER.removebg-preview.svg';
import detmoldImg from '../../assets/customer/DETMOLD_packaging.webp';
import tvcImg from '../../assets/customer/tripodLogo.svg';
import navtImg from '../../assets/customer/NAVT.svg';
import genepaImg from '../../assets/customer/genepa-logo.svg';
import sgwImg from '../../assets/customer/sgw-logo.webp';
import vietUcImg from '../../assets/customer/VietUc_Logo.webp';

function LogoWithSkeleton({ logo: src, name, fullName, className }) {
  return (
    <div className={`cap-client-logo ${className}`} tabIndex="0" aria-label={fullName} onClick={(event) => event.stopPropagation()}>
      <img
        src={src}
        alt={name}
        width="120"
        height="60"
        loading="eager"
        decoding="async"
      />
      <span className="cap-client-logo__tooltip" role="tooltip">{fullName}</span>
    </div>
  );
}

export default function ClientsAndProducts() {
  const { t } = useLanguage();

  const clients = [
    { name: 'NAVT', fullName: 'Nidec Advanced Motor (Vietnam) Co., Ltd.', logo: navtImg, className: 'cap-client-logo--navt' },
    { name: 'Steel Flower', fullName: 'Haiphong Steel Flower Electrical & Machinery Company Limited', logo: stealflowerImg, className: 'cap-client-logo--steel-flower' },
    { name: 'Lotte', fullName: 'LOTTE Vietnam Co., Ltd.', logo: lotteImg, className: 'cap-client-logo--lotte' },
    { name: 'Lichien', fullName: 'Lichien Vietnam Paper Products Co., Ltd.', logo: lichienImg, className: 'cap-client-logo--lichien' },
    { name: 'Detmold', fullName: 'Detmold Packaging Vietnam Co., Ltd.', logo: detmoldImg, className: 'cap-client-logo--detmold' },
    { name: 'Tripod Vietnam', fullName: 'Tripod Vietnam Co., Ltd.', logo: tvcImg, className: 'cap-client-logo--tripod' },
    { name: 'GENEPA Vietnam', fullName: 'GENEPA Vietnam Co., Ltd.', logo: genepaImg, className: 'cap-client-logo--genepa' },
    { name: 'Viet Uc Manufacturing', fullName: 'Viet Uc Manufacturing Trading Service Co., Ltd.', logo: vietUcImg, className: 'cap-client-logo--viet-uc' },
    { name: 'SGW Joint Stock Company', fullName: 'SGW Joint Stock Company', logo: sgwImg, className: 'cap-client-logo--sgw' },
  ];

  return (
    <section className="cap-section" id="clients-products">
      <div className="cap-section__aura" aria-hidden="true">
        <div className="cap-section__aura-layer cap-section__aura-layer--one" />
        <div className="cap-section__aura-layer cap-section__aura-layer--two" />
        <svg className="cap-section__grain" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <filter id="clients-grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.7" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="matrix" values="0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0.181 0.608 0.061 0 0.075 0 0 0 1 0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#clients-grain)" />
        </svg>
      </div>
      <div className="container cap-section__content">
        <header style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <h2 className="section-title">{t.clientsProducts?.title || 'Clients'}</h2>
          <p className="section-subtitle">{t.clientsProducts?.subtitle}</p>
        </header>

        <div className="cap-clients" aria-label="Client logos">
          <ul className="cap-clients__grid">
            {clients.map((client) => (
              <li key={client.name}>
                <LogoWithSkeleton {...client} />
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
}
