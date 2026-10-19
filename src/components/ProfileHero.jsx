import { useState } from 'react';
import { User } from 'lucide-react';
import profile from '../data/profile';

export default function ProfileHero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section className="profile-section" aria-label="Profile introduction">
      {/* Portrait */}
      <div className="portrait-container animate-fade-in animate-delay-1">
        {/* Neon glow */}
        <div className="portrait-glow" aria-hidden="true" />

        {/* Outer rotating gradient ring */}
        <div className="portrait-ring-outer" aria-hidden="true" />

        {/* Inner ring */}
        <div className="portrait-ring-inner" aria-hidden="true" />

        {/* Futuristic arc segments */}
        <div className="portrait-arc" aria-hidden="true" />
        <div className="portrait-arc-2" aria-hidden="true" />

        {/* Profile image */}
        {!imgError ? (
          <img
            src={profile.profileImage}
            alt={`Portrait of ${profile.fullName}`}
            className="portrait-image"
            onError={() => setImgError(true)}
            loading="eager"
          />
        ) : (
          <div className="portrait-placeholder" aria-label="Profile photo placeholder">
            <User strokeWidth={1.5} />
          </div>
        )}
      </div>

      {/* Name */}
      <h1 className="profile-name animate-fade-in animate-delay-2">
        <span className="profile-name-first">{profile.firstName}</span>
        <span className="profile-name-last">{profile.lastName}</span>
      </h1>

      {/* Professional title */}
      <p className="profile-title animate-fade-in animate-delay-3">
        {profile.title}
      </p>

      {/* Gradient divider */}
      <div className="profile-divider animate-fade-in animate-delay-3" aria-hidden="true" />
    </section>
  );
}
