import Background from './components/Background';
import Header from './components/Header';
import ProfileHero from './components/ProfileHero';
import AboutCard from './components/AboutCard';
import ContactLink from './components/ContactLink';
import Footer from './components/Footer';
import profile from './data/profile';

export default function App() {
  // Filter contacts with valid URLs
  const activeContacts = profile.contacts.filter(
    (c) => c.url && c.url.trim() !== ''
  );

  return (
    <>
      {/* Background decorations */}
      <Background />

      {/* Main content */}
      <main className="main-content">
        <Header />
        <ProfileHero />
        <AboutCard />

        {/* Contact links */}
        <div className="contact-links" role="list" aria-label="Contact links">
          {activeContacts.map((contact, index) => (
            <ContactLink key={contact.id} contact={contact} index={index} />
          ))}
        </div>

        <Footer />
      </main>
    </>
  );
}
