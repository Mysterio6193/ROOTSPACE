import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const RootspaceLogo = ({ white }) => (
  <img
    src="/assets/rootspace_logo.png"
    alt="Rootspace"
    style={{
      height: '38px',
      width: 'auto',
      objectFit: 'contain',
      filter: white ? 'brightness(0) invert(1)' : 'brightness(0)',
      transition: 'filter 300ms ease',
    }}
  />
);

const ChevronDown = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="18" height="18">
    <path fill="currentColor" fillRule="evenodd" d="M17.566 9.431a.8.8 0 0 1 .005 1.131l-1.78 1.797c-.669.674-1.218 1.229-1.708 1.622-.51.41-1.034.712-1.665.792a3.3 3.3 0 0 1-.83 0c-.63-.08-1.154-.382-1.665-.792-.49-.393-1.04-.948-1.707-1.622l-1.781-1.797A.8.8 0 0 1 7.57 9.436L9.32 11.2c.71.716 1.195 1.205 1.606 1.535.398.32.648.424.866.452q.211.027.424 0c.219-.028.468-.133.866-.452.41-.33.897-.819 1.607-1.535l1.747-1.763a.8.8 0 0 1 1.131-.005" clipRule="evenodd" />
  </svg>
);

const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75Zm0 5.25A.75.75 0 0 1 3.75 11.25h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25A.75.75 0 0 1 3.75 16.5h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width="24" height="24">
    <path fill="currentColor" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" />
  </svg>
);

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Blog', to: '/blog' },
  { label: 'Join', to: '/join' },
];

function DropdownNav({ label, links, white }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: 'relative' }}>
      <div
        className="header_nav-item__Wn05d"
        style={{ cursor: 'pointer' }}
        onClick={() => setOpen(o => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <span data-text={label}>{label}</span>
        <div className="header_nav-arrow__c0sU_"><ChevronDown /></div>
        {open && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            background: '#fff',
            border: '1px solid #eee',
            borderRadius: '8px',
            padding: '8px 0',
            minWidth: '200px',
            zIndex: 9999,
            boxShadow: '0 8px 24px rgba(0,0,0,0.12)',
          }}>
            {links.map(l => (
              <Link
                key={l.to}
                to={l.to}
                style={{
                  display: 'block',
                  padding: '10px 20px',
                  color: '#333',
                  textDecoration: 'none',
                  fontSize: '14px',
                  fontWeight: '500',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => e.currentTarget.style.background = '#f5f5f5'}
                onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                {l.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

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

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const useWhiteLogo = isTransparent && !scrolled;

  return (
    <>
      <header
        className={`header_wrapper__MJ5bn${isTransparent ? ' header_transparent__rCyyn' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          background: scrolled ? 'rgba(255,255,255,0.97)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? '0 1px 0 rgba(0,0,0,0.08)' : 'none',
          transition: 'background 300ms ease, box-shadow 300ms ease, backdrop-filter 300ms ease',
        }}
      >
        <div className="container_container__v5gtR">
          <div className="header_content__cVJDb" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
            {/* Logo */}
            <div className="header_logo__LO_Jk">
              <Link to="/"><RootspaceLogo white={useWhiteLogo} /></Link>
            </div>

            {/* Desktop Nav */}
            <nav className="header_nav__if_jI rs-desktop-nav" aria-label="Main navigation">
              {navLinks.map(link => (
                <Link
                  key={link.to}
                  to={link.to}
                  className="rs-nav-link"
                  style={{
                    color: useWhiteLogo ? 'rgba(255,255,255,0.88)' : '#151717',
                    fontWeight: 500,
                    fontSize: '1.5rem',
                    textDecoration: 'none',
                    padding: '0.5rem 1.2rem',
                    borderRadius: '999px',
                    transition: 'color 200ms ease, background 200ms ease',
                    letterSpacing: '0.01em',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = useWhiteLogo ? '#fff' : '#000';
                    e.currentTarget.style.background = useWhiteLogo ? 'rgba(255,255,255,0.12)' : 'rgba(0,0,0,0.05)';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = useWhiteLogo ? 'rgba(255,255,255,0.88)' : '#151717';
                    e.currentTarget.style.background = 'transparent';
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="rs-desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.2rem' }}>
              <a
                href="#lets-connect"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.7rem 1.8rem',
                  borderRadius: '999px',
                  background: useWhiteLogo ? '#fff' : '#151717',
                  color: useWhiteLogo ? '#151717' : '#fff',
                  fontWeight: 600,
                  fontSize: '1.45rem',
                  textDecoration: 'none',
                  border: '1.5px solid transparent',
                  transition: 'background 220ms ease, color 220ms ease, transform 180ms ease, box-shadow 220ms ease',
                  letterSpacing: '0.01em',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-1px)';
                  e.currentTarget.style.boxShadow = '0 4px 16px rgba(0,0,0,0.18)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'none';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                Book a Tour
              </a>

              {/* Hamburger — mobile only */}
              <button
                className="rs-hamburger"
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen(o => !o)}
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '42px',
                  height: '42px',
                  borderRadius: '999px',
                  border: 'none',
                  background: useWhiteLogo ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
                  color: useWhiteLogo ? '#fff' : '#151717',
                  cursor: 'pointer',
                  transition: 'background 200ms ease',
                  flexShrink: 0,
                }}
              >
                {menuOpen ? <CloseIcon /> : <MenuIcon />}
              </button>
            </div>

            {/* Mobile-only hamburger (visible via CSS) */}
            <button
              className="rs-hamburger-mobile"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(o => !o)}
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: '42px',
                height: '42px',
                borderRadius: '999px',
                border: 'none',
                background: useWhiteLogo ? 'rgba(255,255,255,0.15)' : 'rgba(0,0,0,0.06)',
                color: useWhiteLogo ? '#fff' : '#151717',
                cursor: 'pointer',
                transition: 'background 200ms ease',
                flexShrink: 0,
              }}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 99,
            background: 'rgba(0,0,0,0.5)',
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          zIndex: 200,
          width: 'min(320px, 88vw)',
          background: '#fff',
          boxShadow: '-8px 0 40px rgba(0,0,0,0.18)',
          transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 340ms cubic-bezier(.2,.9,.3,1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '6rem 3.2rem 4rem',
          gap: '0.4rem',
          overflowY: 'auto',
        }}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
          style={{
            position: 'absolute',
            top: '1.6rem',
            right: '1.6rem',
            width: '40px',
            height: '40px',
            borderRadius: '999px',
            border: 'none',
            background: 'rgba(0,0,0,0.06)',
            color: '#151717',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CloseIcon />
        </button>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              style={{
                color: '#151717',
                fontWeight: 600,
                fontSize: '2.4rem',
                textDecoration: 'none',
                padding: '1.2rem 0',
                borderBottom: '1px solid rgba(0,0,0,0.07)',
                transition: 'color 180ms ease',
                letterSpacing: '-0.01em',
              }}
              onMouseEnter={e => e.currentTarget.style.color = '#555'}
              onMouseLeave={e => e.currentTarget.style.color = '#151717'}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: '3.2rem', display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          <a
            href="#lets-connect"
            onClick={() => setMenuOpen(false)}
            style={{
              display: 'block',
              padding: '1.4rem 2.4rem',
              borderRadius: '999px',
              background: '#151717',
              color: '#fff',
              fontWeight: 600,
              fontSize: '1.6rem',
              textDecoration: 'none',
              textAlign: 'center',
            }}
          >
            Book a Tour
          </a>
        </div>
      </div>

      {/* Spacer so content doesn't go under fixed header */}
      {color !== 'transparent' && <div style={{ height: '72px' }} />}
    </>
  );
}
