import { Code2 } from 'lucide-react';
import profile from '../data/profile';

export default function AboutCard() {
  return (
    <section className="about-card animate-fade-in animate-delay-4" aria-label="About me">
      <div className="about-card-inner">
        <div className="about-content">
          {/* Code icon */}
          <div className="about-icon" aria-hidden="true">
            <Code2 strokeWidth={2} />
          </div>

          {/* Text content */}
          <div className="about-text">
            <h2 className="about-heading">About Me</h2>
            <p className="about-description">{profile.bio}</p>

            {/* Skill tags */}
            <div className="skill-tags" role="list" aria-label="Skills">
              {profile.skills.map((skill) => (
                <span key={skill} className="skill-tag" role="listitem">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
