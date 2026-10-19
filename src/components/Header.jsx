import profile from '../data/profile';

export default function Header() {
  return (
    <header className="header animate-fade-in" role="banner">
      <div className="header-brand">
        <img
          src={profile.club.logoPath}
          alt={`${profile.club.name} ${profile.club.subtitle} emblem`}
          className="header-logo"
          width="52"
          height="52"
        />
        <div className="header-text">
          <span className="header-title">{profile.club.name}</span>
          <span className="header-subtitle">{profile.club.subtitle}</span>
        </div>
      </div>
      <nav className="header-nav" aria-label="Branding navigation">
        <span>CONNECT</span>
        <span className="header-nav-separator">/</span>
        <span>LEARN</span>
        <span className="header-nav-separator">/</span>
        <span>BUILD</span>
      </nav>
    </header>
  );
}
