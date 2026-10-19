import { useState } from 'react';
import { Code2, Copy, Check, Terminal } from 'lucide-react';
import profile from '../data/profile';

export default function AboutCard() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (profile.codeSnippet?.code) {
      navigator.clipboard.writeText(profile.codeSnippet.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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

            {/* Code Box: CS student mode */}
            {profile.codeSnippet && (
              <div className="code-box-wrapper" aria-label="Code snippet: CS student mode">
                <div className="code-box-header">
                  <div className="code-box-dots" aria-hidden="true">
                    <span className="code-dot dot-red" />
                    <span className="code-dot dot-yellow" />
                    <span className="code-dot dot-green" />
                  </div>
                  <div className="code-box-title">
                    <Terminal size={12} className="code-box-term-icon" aria-hidden="true" />
                    <span>{profile.codeSnippet.filename}</span>
                  </div>
                  <button
                    type="button"
                    className={`code-copy-btn ${copied ? 'copied' : ''}`}
                    onClick={handleCopy}
                    aria-label={copied ? "Code copied" : "Copy code"}
                    title="Copy code"
                  >
                    {copied ? (
                      <>
                        <Check size={12} className="copy-icon-success" />
                        <span className="copy-text">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy size={12} />
                        <span className="copy-text">Copy</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="code-box-body">
                  <pre className="code-content">
                    <code>
                      <div className="code-line">
                        <span className="code-line-num">1</span>
                        <span className="code-comment">// CS student mode:</span>
                      </div>
                      <div className="code-line">
                        <span className="code-line-num">2</span>
                        <span className="code-keyword">while</span> (<span className="code-boolean">true</span>) &#123;
                      </div>
                      <div className="code-line code-indent">
                        <span className="code-line-num">3</span>
                        <span className="code-fn">learn</span>();
                      </div>
                      <div className="code-line code-indent">
                        <span className="code-line-num">4</span>
                        <span className="code-fn">build</span>();
                      </div>
                      <div className="code-line code-indent">
                        <span className="code-line-num">5</span>
                        <span className="code-fn">secure</span>();
                      </div>
                      <div className="code-line code-indent">
                        <span className="code-line-num">6</span>
                        <span className="code-fn">innovate</span>();
                      </div>
                      <div className="code-line">
                        <span className="code-line-num">7</span>
                        <span>&#125;</span>
                        <span className="code-cursor" aria-hidden="true"></span>
                      </div>
                    </code>
                  </pre>
                </div>
              </div>
            )}

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
