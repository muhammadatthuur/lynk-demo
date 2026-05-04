import React from 'react';

const socialLinks = [
  { icon: '📸', url: '#', label: 'Instagram' },
  { icon: '🐦', url: '#', label: 'Twitter' },
  { icon: '📺', url: '#', label: 'YouTube' },
  { icon: '✉️', url: '#', label: 'Email' },
];

const links = [
  {
    id: 1,
    title: 'My Latest Video',
    subtitle: 'Watch now on YouTube',
    icon: '🎥',
    url: '#',
    highlight: true,
  },
  {
    id: 2,
    title: 'Merch Store',
    subtitle: 'Exclusive apparel and accessories',
    icon: '🛍️',
    url: '#',
  },
  {
    id: 3,
    title: 'Listen to my new Single',
    subtitle: 'Available on Spotify & Apple Music',
    icon: '🎵',
    url: '#',
  },
  {
    id: 4,
    title: 'Personal Portfolio',
    subtitle: 'Check out my other work',
    icon: '🌐',
    url: '#',
  },
];

function App() {
  return (
    <div className="container">
      <div className="profile-img-container">
        <img 
          src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
          alt="Profile" 
          className="profile-img" 
        />
        <div className="verified-badge">
          ✅
        </div>
      </div>
      
      <h1 className="profile-name">Alex Designer</h1>
      <p className="profile-bio">
        Digital creator & UI/UX enthusiast. Building beautiful interfaces and sharing my journey. 👇
      </p>

      <div className="social-links">
        {socialLinks.map((social, index) => (
          <a key={index} href={social.url} className="social-icon" aria-label={social.label}>
            {social.icon}
          </a>
        ))}
      </div>

      <div className="links-container">
        {links.map((link) => (
          <a key={link.id} href={link.url} className="link-card">
            <div className="link-icon-wrapper" style={link.highlight ? { background: 'rgba(232, 65, 24, 0.2)', color: '#e84118' } : {}}>
              {link.icon}
            </div>
            <div className="link-content">
              <div className="link-title">{link.title}</div>
              {link.subtitle && <div className="link-subtitle">{link.subtitle}</div>}
            </div>
            <div className="link-arrow">
              ➡️
            </div>
          </a>
        ))}
      </div>

      <div className="footer">
        Powered by <span className="footer-brand">lynk.id</span> demo
      </div>
    </div>
  );
}

export default App;
