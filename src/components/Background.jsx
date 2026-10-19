import profile from '../data/profile';

/**
 * Circuit-board trace SVG decorations for the background
 */
const CircuitTopLeft = () => (
  <svg className="circuit-decoration circuit-top-left" width="180" height="200" viewBox="0 0 180 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 0 L10 40 L50 40 L50 80" stroke="#1769FF" strokeWidth="1" opacity="0.6"/>
    <circle cx="50" cy="80" r="3" fill="#1769FF" opacity="0.5"/>
    <path d="M0 60 L30 60 L30 120 L60 120" stroke="#762BFF" strokeWidth="1" opacity="0.4"/>
    <circle cx="60" cy="120" r="2.5" fill="#762BFF" opacity="0.4"/>
    <path d="M20 100 L20 150 L80 150" stroke="#1769FF" strokeWidth="0.8" opacity="0.3"/>
    <path d="M50 0 L50 20 L90 20 L90 50" stroke="#258BFF" strokeWidth="0.8" opacity="0.3"/>
    <rect x="5" y="35" width="8" height="8" stroke="#1769FF" strokeWidth="0.8" opacity="0.25" fill="none"/>
    <path d="M15 170 L60 170 L60 190 L100 190" stroke="#762BFF" strokeWidth="0.6" opacity="0.2"/>
  </svg>
);

const CircuitTopRight = () => (
  <svg className="circuit-decoration circuit-top-right" width="200" height="180" viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M200 30 L160 30 L160 70 L120 70" stroke="#1769FF" strokeWidth="1" opacity="0.5"/>
    <circle cx="120" cy="70" r="3" fill="#1769FF" opacity="0.4"/>
    <path d="M180 0 L180 50 L140 50 L140 100" stroke="#762BFF" strokeWidth="0.8" opacity="0.35"/>
    <circle cx="140" cy="100" r="2.5" fill="#762BFF" opacity="0.35"/>
    <path d="M200 90 L170 90 L170 130 L130 130" stroke="#258BFF" strokeWidth="0.8" opacity="0.3"/>
    <rect x="155" y="42" width="6" height="6" stroke="#258BFF" strokeWidth="0.8" opacity="0.25" fill="none"/>
    <path d="M200 140 L165 140 L165 170 L135 170" stroke="#1769FF" strokeWidth="0.6" opacity="0.2"/>
  </svg>
);

const CircuitBottomRight = () => (
  <svg className="circuit-decoration circuit-bottom-right" width="220" height="200" viewBox="0 0 220 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M220 180 L180 180 L180 140 L140 140" stroke="#762BFF" strokeWidth="1.2" opacity="0.5"/>
    <circle cx="140" cy="140" r="3" fill="#762BFF" opacity="0.4"/>
    <path d="M220 130 L190 130 L190 100 L160 100 L160 70" stroke="#1769FF" strokeWidth="1" opacity="0.4"/>
    <circle cx="160" cy="70" r="2.5" fill="#1769FF" opacity="0.35"/>
    <path d="M200 200 L200 160 L170 160 L170 120" stroke="#258BFF" strokeWidth="0.8" opacity="0.3"/>
    <rect x="175" y="92" width="8" height="8" stroke="#762BFF" strokeWidth="0.8" opacity="0.2" fill="none"/>
    <path d="M220 60 L190 60 L190 40 L150 40" stroke="#1769FF" strokeWidth="0.6" opacity="0.2"/>
    {/* Angular corner accent */}
    <path d="M220 200 L200 200 L200 180" stroke="#762BFF" strokeWidth="1.5" opacity="0.6"/>
    <path d="M215 195 L205 195 L205 185" stroke="#1769FF" strokeWidth="1" opacity="0.4"/>
  </svg>
);

const CircuitBottomLeft = () => (
  <svg className="circuit-decoration circuit-bottom-left" width="160" height="180" viewBox="0 0 160 180" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M0 140 L40 140 L40 100 L80 100" stroke="#1769FF" strokeWidth="1" opacity="0.4"/>
    <circle cx="80" cy="100" r="3" fill="#1769FF" opacity="0.35"/>
    <path d="M0 100 L25 100 L25 60 L60 60" stroke="#762BFF" strokeWidth="0.8" opacity="0.3"/>
    <path d="M10 180 L10 150 L50 150 L50 120" stroke="#258BFF" strokeWidth="0.8" opacity="0.25"/>
    <circle cx="50" cy="120" r="2" fill="#258BFF" opacity="0.25"/>
  </svg>
);

export default function Background() {
  return (
    <div className="cyber-bg" aria-hidden="true">
      {/* Watermark logo */}
      <img
        src={profile.club.logoPath}
        alt=""
        className="bg-watermark"
        aria-hidden="true"
      />

      {/* Circuit trace decorations */}
      <CircuitTopLeft />
      <CircuitTopRight />
      <CircuitBottomRight />
      <CircuitBottomLeft />
    </div>
  );
}
