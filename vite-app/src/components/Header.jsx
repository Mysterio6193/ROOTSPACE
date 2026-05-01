import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Join', to: '/join' },
];

export default function Header({ color = 'transparent' }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isTransparent = color === 'transparent';

  useEffect(() => {
    if (!isTransparent) return;
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [isTransparent]);

  useEffect(() => { setMenuOpen(false); }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const white = isTransparent && !scrolled;

  return (
    <>
      <header className={`rs-header${scrolled ? ' rs-header--scrolled' : ''}${white ? ' rs-header--white' : ''}`}>
        <div className="rs-container rs-header__inner">
          <Link to="/" className="rs-header__logo">
            <img
              src="/assets/rootspace_logo.png"
              alt="Rootspace"
              style={{
                height: '36px',
                width: 'auto',
                filter: white ? 'brightness(0) invert(1)' : 'brightness(0)',
                transition: 'filter 300ms ease',
              }}
            />
          </Link>

          <nav className="rs-header__nav" aria-label="Main navigation">
            {NAV_LINKS.map(l => (
              <Link
                key={l.to}
                to={l.to}
                className={`rs-header__link${white ? ' rs-header__link--white' : ''}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          <div className="rs-header__actions">
            <a href="#lets-connect" className={`rs-btn rs-header__cta ${white ? 'rs-btn--light' : 'rs-btn--dark'}`}>
              Book a Tour
            </a>
            <button
              className={`rs-header__burger${white ? ' rs-header__burger--white' : ''}`}
              onClick={() => setMenuOpen(o => !o)}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen
                ? <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" /></svg>
                : <svg viewBox="0 0 24 24" width="22" height="22"><path fill="currentColor" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25A.75.75 0 0 1 3.75 11.25h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25A.75.75 0 0 1 3.75 16.5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" /></svg>
              }
            </button>
          </div>
        </div>
      </header>

      {menuOpen && <div className="rs-drawer-backdrop" onClick={() => setMenuOpen(false)} />}

      <div className={`rs-drawer${menuOpen ? ' rs-drawer--open' : ''}`}>
        <button className="rs-drawer__close" onClick={() => setMenuOpen(false)} aria-label="Close menu">
          <svg viewBox="0 0 24 24" width="20" height="20"><path fill="currentColor" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" /></svg>
        </button>
        <nav className="rs-drawer__nav">
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} className="rs-drawer__link" onClick={() => setMenuOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
        <a href="#lets-connect" className="rs-btn rs-btn--dark" style={{ marginTop: '2.4rem' }} onClick={() => setMenuOpen(false)}>
          Book a Tour
        </a>
      </div>

      {color !== 'transparent' && <div style={{ height: '72px' }} />}
    </>
  );
}
