import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const plans = [
  {
    id: 'common',
    emoji: '🖥️',
    title: 'Common Workstation',
    price: '₹5,000',
    period: '/month',
    tagline: 'Flexible, no-commitment seating',
    color: '#f8f8f8',
    textColor: '#151717',
    bullets: [
      'Clean table and chair',
      'High-speed internet',
      'Unlimited coffee & water',
      'Housekeeping service',
      'Separate clean washrooms (M/F)',
      '24/7 security',
      'Common telecom service',
    ],
  },
  {
    id: 'dedicated',
    emoji: '📌',
    title: 'Dedicated Workstation',
    price: '₹10,000',
    period: '/month',
    tagline: 'Your own reserved desk',
    highlight: false,
    color: '#f8f8f8',
    textColor: '#151717',
    bullets: [
      'Dedicated table and chair',
      'High-speed internet',
      'Unlimited coffee & water',
      'Housekeeping service',
      'Separate clean washrooms (M/F)',
      '24/7 security',
      'Common telecom service',
      'Small storage cabinet',
      'Free 20 prints/month',
      'Free PS5 gaming — 5 hrs/month',
    ],
  },
  {
    id: 'cabin',
    emoji: '🏠',
    title: 'Dedicated Cabin',
    price: '₹20,000',
    period: '/month',
    tagline: 'Fully enclosed private space',
    highlight: true,
    color: '#151717',
    textColor: '#fff',
    bullets: [
      'Private cabin',
      'High-speed internet',
      'Unlimited coffee & water',
      'Housekeeping service',
      'Separate clean washrooms (M/F)',
      '24/7 security',
      'Dedicated telecom',
      'Large storage cabinets',
      'Free 50 prints/month',
      'Free PS5 gaming — 10 hrs/month',
      'Common assistant',
    ],
  },
  {
    id: 'executive',
    emoji: '👑',
    title: 'Executive Cabin',
    price: '₹40,000',
    period: '/month',
    tagline: 'The ultimate workspace',
    color: '#0e0e10',
    textColor: '#fff',
    bullets: [
      'Boss table and chair',
      'High-speed internet',
      'Unlimited coffee & water',
      'Housekeeping service',
      'Separate clean washrooms (M/F)',
      '24/7 security',
      'Dedicated telecom',
      'Large storage cabinets',
      'Free 50 prints/month',
      'Free PS5 gaming — 10 hrs/month',
      'Common assistant',
      '2 extra workstations for staff',
      'Couches and coffee table',
    ],
  },
];

const amenities = [
  { icon: '⚡', title: 'High-Speed Internet', desc: 'Fibre-optic connectivity that never lets you down during that critical call.' },
  { icon: '☕', title: 'Unlimited Coffee & Water', desc: 'Fuel your work with freshly brewed coffee and chilled water all day.' },
  { icon: '🎮', title: 'PS5 Gaming Zone', desc: 'Recharge with gaming sessions — included in Dedicated & above plans.' },
  { icon: '📋', title: 'Conference Rooms', desc: 'Fully equipped meeting rooms for client presentations and team standups.' },
  { icon: '📚', title: 'Library Corner', desc: 'A quiet, distraction-free zone for deep focus and reading.' },
  { icon: '🔒', title: '24/7 Security', desc: 'Round-the-clock CCTV surveillance and secure access control.' },
  { icon: '🖨️', title: 'Printing & Scanning', desc: 'On-demand printing and scanning available for all members.' },
  { icon: '🧹', title: 'Daily Housekeeping', desc: 'A clean, fresh workspace every single morning.' },
];

export default function Services() {
  const [hovered, setHovered] = useState(null);

  return (
    <MainLayout headerColor="white">
      {/* Hero */}
      <section style={{
        background: 'linear-gradient(135deg, #0e0e10 0%, #1a1a1c 100%)',
        color: '#fff',
        padding: '14rem 0 10rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 0 1px, transparent 1.4px), radial-gradient(circle at 80% 65%, rgba(255,255,255,0.03) 0 1px, transparent 1.6px)',
          backgroundSize: '9px 9px, 14px 14px',
          pointerEvents: 'none',
        }} />
        <div className="container_container__v5gtR" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '72rem' }}>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.35rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              Workspace Plans
            </div>
            <h1 style={{
              margin: 0,
              fontSize: 'clamp(4.8rem, 8vw, 10rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}>
              Find your<br />
              <span style={{ color: 'rgba(255,255,255,0.4)' }}>perfect plan.</span>
            </h1>
            <p style={{
              marginTop: '3.2rem',
              fontSize: 'clamp(1.8rem, 1.6vw, 2.2rem)',
              fontWeight: 500,
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.72)',
              maxWidth: '52rem',
            }}>
              Whether you need a hot desk for a day or a private executive cabin for your whole team — Rootspace has a plan that fits.
            </p>
            <p style={{ marginTop: '1.6rem', fontSize: '1.5rem', color: 'rgba(255,255,255,0.42)', fontStyle: 'italic' }}>
              All prices are per person per month. 18% GST additional. Custom quotations available.
            </p>
          </div>
        </div>
      </section>

      {/* Plans */}
      <section style={{ background: '#f5f5f5', padding: '9rem 0' }}>
        <div className="container_container__v5gtR">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(26rem, 1fr))',
            gap: '2.4rem',
          }}>
            {plans.map(plan => (
              <div
                key={plan.id}
                onMouseEnter={() => setHovered(plan.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: plan.color,
                  color: plan.textColor,
                  borderRadius: '2.4rem',
                  padding: '3.6rem 3.2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  border: plan.highlight ? '2px solid rgba(255,255,255,0.2)' : '1px solid rgba(0,0,0,0.07)',
                  transition: 'transform 260ms ease, box-shadow 260ms ease',
                  transform: hovered === plan.id ? 'translateY(-6px) scale(1.01)' : 'none',
                  boxShadow: hovered === plan.id
                    ? plan.highlight
                      ? '0 24px 60px rgba(0,0,0,0.4)'
                      : '0 16px 48px rgba(0,0,0,0.14)'
                    : plan.highlight
                      ? '0 8px 32px rgba(0,0,0,0.24)'
                      : '0 2px 8px rgba(0,0,0,0.05)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                {plan.highlight && (
                  <div style={{
                    position: 'absolute',
                    top: '1.8rem',
                    right: '1.8rem',
                    background: '#fff',
                    color: '#151717',
                    fontSize: '1.2rem',
                    fontWeight: 700,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    padding: '0.4rem 1rem',
                    borderRadius: '999px',
                  }}>
                    Popular
                  </div>
                )}

                <div style={{ fontSize: '2.8rem', marginBottom: '1.6rem' }}>{plan.emoji}</div>
                <div style={{
                  fontSize: '2rem',
                  fontWeight: 700,
                  marginBottom: '0.6rem',
                  fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                }}>
                  {plan.title}
                </div>
                <div style={{
                  fontSize: '1.45rem',
                  opacity: plan.textColor === '#fff' ? 0.55 : 0.5,
                  marginBottom: '2.4rem',
                }}>
                  {plan.tagline}
                </div>

                <div style={{ marginBottom: '3.2rem' }}>
                  <span style={{
                    fontSize: 'clamp(3.6rem, 3.5vw, 5rem)',
                    fontWeight: 800,
                    lineHeight: 1,
                    letterSpacing: '-0.02em',
                    fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  }}>
                    {plan.price}
                  </span>
                  <span style={{ fontSize: '1.6rem', opacity: 0.55, marginLeft: '0.4rem' }}>
                    {plan.period}
                  </span>
                </div>

                <ul style={{
                  margin: 0,
                  padding: 0,
                  listStyle: 'none',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '0.9rem',
                  flex: 1,
                  marginBottom: '3.2rem',
                }}>
                  {plan.bullets.map(b => (
                    <li key={b} style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.8rem',
                      fontSize: '1.55rem',
                      lineHeight: 1.4,
                      opacity: plan.textColor === '#fff' ? 0.85 : 0.75,
                    }}>
                      <span style={{ marginTop: '0.15rem', flexShrink: 0, opacity: 1 }}>✓</span>
                      {b}
                    </li>
                  ))}
                </ul>

                <a
                  href="#lets-connect"
                  style={{
                    display: 'block',
                    textAlign: 'center',
                    padding: '1.3rem 2rem',
                    borderRadius: '999px',
                    fontWeight: 600,
                    fontSize: '1.55rem',
                    textDecoration: 'none',
                    transition: 'background 200ms ease, color 200ms ease',
                    background: plan.textColor === '#fff' ? 'rgba(255,255,255,0.12)' : '#151717',
                    color: plan.textColor === '#fff' ? '#fff' : '#fff',
                    border: plan.textColor === '#fff' ? '1px solid rgba(255,255,255,0.24)' : 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = plan.textColor === '#fff' ? 'rgba(255,255,255,0.22)' : '#2a2a2a';
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = plan.textColor === '#fff' ? 'rgba(255,255,255,0.12)' : '#151717';
                  }}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>

          <p style={{
            textAlign: 'center',
            marginTop: '3.2rem',
            fontSize: '1.5rem',
            color: 'rgba(0,0,0,0.45)',
          }}>
            Need a custom plan for multiple people or longer duration? <a href="#lets-connect" style={{ color: '#151717', fontWeight: 600 }}>Contact us for a quote →</a>
          </p>
        </div>
      </section>

      {/* Amenities */}
      <section style={{ background: '#fff', padding: '9rem 0', borderTop: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container_container__v5gtR">
          <div style={{ marginBottom: '6rem' }}>
            <div style={{ color: 'rgba(0,0,0,0.38)', fontSize: '1.35rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
              What's Included
            </div>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(3.6rem, 4vw, 6.4rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}>
              Every plan comes<br />
              <span style={{ color: 'rgba(0,0,0,0.3)' }}>fully loaded.</span>
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(24rem, 1fr))',
            gap: '2rem',
          }}>
            {amenities.map(a => (
              <div key={a.title} style={{
                padding: '3rem 2.8rem',
                borderRadius: '1.8rem',
                background: '#f8f8f8',
                border: '1px solid rgba(0,0,0,0.06)',
                transition: 'box-shadow 250ms, transform 250ms',
              }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 8px 30px rgba(0,0,0,0.09)'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ fontSize: '2.8rem', marginBottom: '1.2rem' }}>{a.icon}</div>
                <div style={{ fontWeight: 700, fontSize: '1.8rem', marginBottom: '0.8rem', letterSpacing: '-0.01em' }}>{a.title}</div>
                <p style={{ margin: 0, fontSize: '1.55rem', lineHeight: 1.5, color: 'rgba(0,0,0,0.55)' }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#151717', padding: '10rem 0', textAlign: 'center' }}>
        <div className="container_container__v5gtR">
          <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
            <h2 style={{
              margin: '0 0 2rem',
              fontSize: 'clamp(4rem, 5vw, 7.2rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              color: '#fff',
              fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}>
              Not sure which plan is right?
            </h2>
            <p style={{ fontSize: '2rem', lineHeight: 1.5, color: 'rgba(255,255,255,0.55)', marginBottom: '4rem' }}>
              Come in for a free tour and we'll help you find the perfect fit.
            </p>
            <a
              href="#lets-connect"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                padding: '1.5rem 3.6rem',
                borderRadius: '999px',
                background: '#fff',
                color: '#151717',
                fontWeight: 700,
                fontSize: '1.7rem',
                textDecoration: 'none',
                transition: 'transform 200ms, box-shadow 200ms',
              }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(255,255,255,0.2)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              Book a Free Tour
            </a>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
