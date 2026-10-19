import profile from '../data/profile';

export default function Footer() {
  return (
    <footer className="footer animate-fade-in animate-delay-10" role="contentinfo">
      {/* Club logo */}
      <img
        src={profile.club.logoPath}
        alt={`${profile.club.name} ${profile.club.subtitle} emblem`}
        className="footer-logo"
        width="44"
        height="44"
      />

      {/* Gradient lines with club name */}
      <div className="footer-lines">
        <div className="footer-line footer-line-left" aria-hidden="true" />
        <span className="footer-club-name">
          {profile.club.name} {profile.club.subtitle}
        </span>
        <div className="footer-line footer-line-right" aria-hidden="true" />
      </div>

      {/* Tagline */}
      <p className="footer-tagline">{profile.club.tagline}</p>
    </footer>
  );
}
