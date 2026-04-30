import React from 'react';
import { Link } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';

const stats = [
  { value: '10,000+', label: 'sq ft of workspace' },
  { value: '200+', label: 'active members' },
  { value: '4', label: 'workspace types' },
  { value: '24/7', label: 'security & access' },
];

const values = [
  {
    emoji: '⚡',
    title: 'Energy & Focus',
    desc: 'We design every corner to eliminate distractions and amplify deep work — because your best ideas deserve the best environment.',
  },
  {
    emoji: '🤝',
    title: 'Community First',
    desc: "Rootspace is more than desks and chairs. It's a thriving community of founders, freelancers, and teams who grow together.",
  },
  {
    emoji: '🌱',
    title: 'Growth Mindset',
    desc: 'From startup to scale-up, our flexible plans grow with you — no lock-ins, no overhead, just momentum.',
  },
  {
    emoji: '✨',
    title: 'Premium Without the Price',
    desc: 'High-speed internet, PS5 gaming, unlimited coffee, conference rooms — premium amenities at a fraction of the traditional office cost.',
  },
];

const team = [
  { name: 'Arjun Sharma', role: 'Founder & CEO', img: null },
  { name: 'Priya Verma', role: 'Head of Operations', img: null },
  { name: 'Rahul Gupta', role: 'Community Manager', img: null },
];

export default function About() {
  return (
    <MainLayout headerColor="white">
      {/* Banner */}
      <section style={{
        background: 'linear-gradient(135deg, #0e0e10 0%, #151717 100%)',
        color: '#fff',
        padding: '14rem 0 10rem',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 0 1px, transparent 1.4px), radial-gradient(circle at 78% 64%, rgba(255,255,255,0.03) 0 1px, transparent 1.6px)',
          backgroundSize: '9px 9px, 14px 14px',
          pointerEvents: 'none',
        }} />
        <div className="container_container__v5gtR" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '72rem' }}>
            <div style={{ color: 'rgba(255,255,255,0.45)', fontSize: '1.35rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2rem' }}>
              About Rootspace
            </div>
            <h1 style={{
              margin: 0,
              fontSize: 'clamp(4.8rem, 8vw, 10rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.02em',
              fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}>
              Where Bhopal<br />
              <span style={{ color: 'rgba(255,255,255,0.42)' }}>comes to work.</span>
            </h1>
            <p style={{
              marginTop: '3.2rem',
              fontSize: 'clamp(1.8rem, 1.6vw, 2.2rem)',
              fontWeight: 500,
              lineHeight: 1.55,
              color: 'rgba(255,255,255,0.78)',
              maxWidth: '52rem',
            }}>
              Rootspace is Bhopal's largest and most vibrant co-working space — built for freelancers, startups, and businesses who want to work smarter, grow faster, and connect deeper.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section style={{ background: '#fff', padding: '8rem 0', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
        <div className="container_container__v5gtR">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(18rem, 1fr))',
            gap: '4rem',
          }}>
            {stats.map(s => (
              <div key={s.label}>
                <div style={{
                  fontSize: 'clamp(4rem, 5vw, 6.4rem)',
                  fontWeight: 800,
                  lineHeight: 1,
                  letterSpacing: '-0.02em',
                  fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
                  color: '#151717',
                }}>
                  {s.value}
                </div>
                <div style={{ marginTop: '0.8rem', fontSize: '1.6rem', fontWeight: 500, color: 'rgba(0,0,0,0.5)' }}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section style={{ background: '#fff', padding: '10rem 0' }}>
        <div className="container_container__v5gtR">
          <div className="about-two-col" style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
            gap: '8rem',
            alignItems: 'center',
          }}>
            <div>
              <div style={{ color: 'rgba(0,0,0,0.38)', fontSize: '1.35rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '2rem' }}>
                Our Story
              </div>
              <h2 style={{
                margin: '0 0 2.4rem',
                fontSize: 'clamp(3.6rem, 3.6vw, 5.6rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}>
                Built for the <br />
                <span style={{ color: 'rgba(0,0,0,0.3)' }}>builders of Bhopal</span>
              </h2>
              <p style={{ fontSize: '1.85rem', lineHeight: 1.6, color: '#444', marginBottom: '2rem' }}>
                We started Rootspace with one simple belief: people do their best work when their environment inspires them. Bhopal's entrepreneurial spirit was growing fast — but the infrastructure wasn't keeping up.
              </p>
              <p style={{ fontSize: '1.85rem', lineHeight: 1.6, color: '#444', marginBottom: '3.2rem' }}>
                So we built A-46, Manipuram Colony — over 10,000 sq ft of thoughtfully designed workspace in the heart of Bhopal. From a single desk to an executive cabin, Rootspace meets you where you are and scales as you grow.
              </p>
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1.3rem 2.8rem',
                  borderRadius: '999px',
                  background: '#151717',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1.55rem',
                  textDecoration: 'none',
                  transition: 'transform 200ms, box-shadow 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                View Our Plans →
              </Link>
            </div>

            <div style={{
              borderRadius: '2.4rem',
              overflow: 'hidden',
              aspectRatio: '4/3',
              background: '#f0f0f0',
            }}>
              <img
                src="/assets/collage-home/day-01-photo-00770.jpg"
                alt="Rootspace interior"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{
        background: 'linear-gradient(180deg, #f7f7f7 0%, #fff 100%)',
        padding: '10rem 0',
        borderTop: '1px solid rgba(0,0,0,0.06)',
      }}>
        <div className="container_container__v5gtR">
          <div style={{ marginBottom: '6rem' }}>
            <div style={{ color: 'rgba(0,0,0,0.38)', fontSize: '1.35rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1.6rem' }}>
              What We Stand For
            </div>
            <h2 style={{
              margin: 0,
              fontSize: 'clamp(3.6rem, 4vw, 6rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              maxWidth: '52rem',
            }}>
              Our values shape your workspace.
            </h2>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(26rem, 1fr))',
            gap: '2.4rem',
          }}>
            {values.map(v => (
              <div
                key={v.title}
                style={{
                  padding: '3.2rem',
                  borderRadius: '2rem',
                  background: '#fff',
                  border: '1px solid rgba(0,0,0,0.08)',
                  transition: 'box-shadow 250ms ease, transform 250ms ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.1)'; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'none'; }}
              >
                <div style={{ fontSize: '3.2rem', marginBottom: '1.6rem' }}>{v.emoji}</div>
                <div style={{ fontWeight: 700, fontSize: '2rem', marginBottom: '1rem', letterSpacing: '-0.01em' }}>{v.title}</div>
                <p style={{ margin: 0, fontSize: '1.65rem', lineHeight: 1.55, color: 'rgba(0,0,0,0.6)' }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section style={{ background: '#151717', padding: '10rem 0' }}>
        <div className="container_container__v5gtR">
          <div className="about-two-col" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <h2 style={{
                margin: '0 0 2.4rem',
                fontSize: 'clamp(3.6rem, 3.6vw, 5.6rem)',
                fontWeight: 700,
                lineHeight: 1.08,
                letterSpacing: '-0.02em',
                color: '#fff',
                fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
              }}>
                See Rootspace in action
              </h2>
              <p style={{ fontSize: '1.9rem', lineHeight: 1.55, color: 'rgba(255,255,255,0.65)', marginBottom: '3.2rem' }}>
                Take a virtual walk through Bhopal's finest co-working space. Designed for focus. Built for community. Ready for you.
              </p>
              <a
                href="#lets-connect"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  padding: '1.3rem 2.8rem',
                  borderRadius: '999px',
                  background: '#fff',
                  color: '#151717',
                  fontWeight: 600,
                  fontSize: '1.55rem',
                  textDecoration: 'none',
                  transition: 'transform 200ms, box-shadow 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(255,255,255,0.2)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Book a Tour
              </a>
            </div>
            <div style={{ borderRadius: '2rem', overflow: 'hidden', aspectRatio: '16/10', background: '#000' }}>
              <video
                src="/videos/why-us.mp4"
                autoPlay
                playsInline
                loop
                muted
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section style={{
        background: '#fff',
        padding: '10rem 0',
        textAlign: 'center',
      }}>
        <div className="container_container__v5gtR">
          <div style={{ maxWidth: '64rem', margin: '0 auto' }}>
            <h2 style={{
              margin: '0 0 2rem',
              fontSize: 'clamp(4rem, 5vw, 7.2rem)',
              fontWeight: 800,
              lineHeight: 1.0,
              letterSpacing: '-0.02em',
              fontFamily: "'Helvetica Now Display', 'Helvetica Neue', Helvetica, Arial, sans-serif",
            }}>
              Ready to join the Rootspace community?
            </h2>
            <p style={{ fontSize: '2rem', lineHeight: 1.5, color: 'rgba(0,0,0,0.55)', marginBottom: '4rem' }}>
              Start with a free tour — no commitment, no pressure. Just come and see for yourself.
            </p>
            <div style={{ display: 'flex', gap: '1.4rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="#lets-connect"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '1.5rem 3.2rem',
                  borderRadius: '999px',
                  background: '#151717',
                  color: '#fff',
                  fontWeight: 600,
                  fontSize: '1.7rem',
                  textDecoration: 'none',
                  transition: 'transform 200ms, box-shadow 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 28px rgba(0,0,0,0.22)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                Book a Free Tour
              </a>
              <Link
                to="/services"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  padding: '1.5rem 3.2rem',
                  borderRadius: '999px',
                  background: 'transparent',
                  color: '#151717',
                  fontWeight: 600,
                  fontSize: '1.7rem',
                  textDecoration: 'none',
                  border: '1.5px solid rgba(0,0,0,0.2)',
                  transition: 'background 200ms, border-color 200ms',
                }}
                onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,0,0,0.04)'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.4)'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(0,0,0,0.2)'; }}
              >
                Explore Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
