import { Mail, ExternalLink, Send } from 'lucide-react';

/**
 * Brand-specific SVG icons for platforms not in Lucide
 */
const InstagramIcon = ({ size = 24, color }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="ig-grad" x1="0%" y1="100%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#F58529" />
        <stop offset="25%" stopColor="#DD2A7B" />
        <stop offset="50%" stopColor="#8134AF" />
        <stop offset="100%" stopColor="#515BD4" />
      </linearGradient>
    </defs>
    <rect x="2" y="2" width="20" height="20" rx="5" stroke={color || "url(#ig-grad)"} strokeWidth="2" fill="none" />
    <circle cx="12" cy="12" r="5" stroke={color || "url(#ig-grad)"} strokeWidth="2" fill="none" />
    <circle cx="17.5" cy="6.5" r="1.5" fill={color || "url(#ig-grad)"} />
  </svg>
);

const TelegramIcon = ({ size = 24, color = "#26A5E4" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.28-.02-.12.03-2.02 1.28-5.69 3.77-.54.37-1.03.55-1.47.54-.48-.01-1.4-.27-2.09-.49-.84-.28-1.51-.42-1.45-.89.03-.25.38-.5 1.04-.78 4.07-1.77 6.79-2.94 8.14-3.51 3.88-1.62 4.69-1.9 5.21-1.91.12 0 .37.03.54.18.14.12.18.29.2.45-.01.06.01.24 0 .37z"/>
  </svg>
);

const FacebookIcon = ({ size = 24, color = "#1877F2" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.875V12h3.328l-.532 3.47h-2.796v8.384C19.612 22.954 24 17.99 24 12z"/>
  </svg>
);

const WhatsAppIcon = ({ size = 24, color = "#25D366" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={color} xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

/**
 * Returns the appropriate icon component for each platform
 */
function getPlatformIcon(platformId, accent) {
  switch (platformId) {
    case 'email':
      return <Mail strokeWidth={2} color={accent} />;
    case 'instagram':
      return <InstagramIcon />;
    case 'telegram':
      return <TelegramIcon />;
    case 'facebook':
      return <FacebookIcon />;
    case 'whatsapp':
      return <WhatsAppIcon />;
    default:
      return <Send strokeWidth={2} color={accent} />;
  }
}

export default function ContactLink({ contact, index }) {
  // Don't render if URL is missing
  if (!contact.url) return null;

  const isExternal = !contact.url.startsWith('mailto:');
  const animDelay = `animate-delay-${5 + index}`;

  return (
    <a
      href={contact.url}
      className={`contact-card animate-fade-in ${animDelay}`}
      data-platform={contact.id}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      aria-label={`${contact.platform}: ${contact.subtitle}`}
    >
      <div className="contact-icon">
        {getPlatformIcon(contact.id, contact.accent)}
      </div>
      <div className="contact-info">
        <div className="contact-name">{contact.platform}</div>
        <div className="contact-subtitle">{contact.subtitle}</div>
      </div>
      <ExternalLink className="contact-external" aria-hidden="true" />
    </a>
  );
}
