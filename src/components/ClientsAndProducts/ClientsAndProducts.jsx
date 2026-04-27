import React, { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import './ClientsAndProducts.css';

// Import logos khách hàng
import lotteImg from '../../assets/customer/lotte.png';
import lichienImg from '../../assets/customer/lichien.png';
import stealflowerImg from '../../assets/customer/STEALFLOWER.removebg-preview.png';
import detmoldImg from '../../assets/customer/DETMOLD_packaging.jpg';
import tvcImg from '../../assets/customer/tvc_logo.png';
import navtImg from '../../assets/customer/NAVT.svg';

function LogoWithSkeleton({ src, alt }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <div className="cap-client-logo" style={{ position: 'relative', background: 'transparent' }}>
      {!loaded && <div className="skeleton" style={{ position: 'absolute', inset: 0, borderRadius: '8px' }} />}
      <img 
        src={src} 
        alt={alt} 
        onLoad={() => setLoaded(true)} 
        style={{ opacity: loaded ? 1 : 0, transition: 'opacity 0.3s ease' }}
      />
    </div>
  );
}

export default function ClientsAndProducts() {
  const { t } = useLanguage();

  const clients = [
    { name: 'Lotte', logo: lotteImg },
    { name: 'Lichien', logo: lichienImg },
    { name: 'Steel Flower', logo: stealflowerImg },
    { name: 'Detmold', logo: detmoldImg },
    { name: 'Tripod Vietnam', logo: tvcImg },
    { name: 'NAVT', logo: navtImg },
  ];

  return (
    <section className="cap-section" id="clients-products">
      <div className="container">
        
        <header style={{ textAlign: 'center', marginBottom: 'var(--space-6)' }}>
          <h2 className="section-title">{t.clientsProducts?.title || 'Clients'}</h2>
          <p className="section-subtitle">{t.clientsProducts?.subtitle}</p>
        </header>

        {/* Clients Marquee */}
        <div className="cap-clients">
          <div className="cap-marquee">
            {/* Render 3 identical groups for seamless infinite scroll on wide screens */}
            {[0, 1, 2].map((groupIndex) => (
              <div 
                key={groupIndex} 
                className="cap-marquee__group" 
                aria-hidden={groupIndex > 0 ? "true" : undefined}
              >
                {clients.map((client, idx) => (
                  <LogoWithSkeleton key={`${client.name}-${groupIndex}-${idx}`} src={client.logo} alt={client.name} />
                ))}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
