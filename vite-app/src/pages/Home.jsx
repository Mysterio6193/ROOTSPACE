import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PLANS = [
  {
    title: 'Common Workstation',
    price: '₹5,000',
    tagline: 'Flexible, no-commitment seating',
    img: '/assets/services/common_work.jpg',
    bullets: ['Clean table & chair', 'High-speed internet', 'Unlimited coffee & water', 'Housekeeping', '24/7 security'],
  },
  {
    title: 'Dedicated Workstation',
    price: '₹10,000',
    tagline: 'Your own reserved desk',
    img: '/assets/services/dedicated_workstation.jpg',
    bullets: ['Reserved desk & chair', 'Storage cabinet', 'Free 20 prints/month', 'PS5 gaming – 5 hrs/mo', 'All common amenities'],
  },
  {
    title: 'Dedicated Cabin',
    price: '₹20,000',
    tagline: 'Fully enclosed private space',
    img: '/assets/services/dedicated_cabin.jpg',
    bullets: ['Private cabin', 'Dedicated telecom', 'Large storage', 'Free 50 prints/month', 'PS5 gaming – 10 hrs/mo', 'Common assistant'],
    popular: true,
  },
  {
    title: 'Executive Cabin',
    price: '₹40,000',
    tagline: 'Elite setup for teams',
    img: '/assets/services/executive_cabin.jpg',
    bullets: ['Boss table + chair', '2 staff workstations', 'Couches & side table', 'Dedicated telecom', 'All cabin perks'],
  },
];

const GALLERY = [
  '/assets/collage-home/day-01-photo-00770.jpg',
  '/assets/collage-home/day-01-photo-01247.jpg',
  '/assets/collage-home/day-01-photo-00874.jpg',
  '/assets/collage-home/day-01-photo-1134.jpg',
  '/assets/collage-home/ks-08921.jpg',
  '/assets/collage-home/ks-08895.jpg',
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, inView];
}

export default function Home() {
  const [whyRef, whyInView] = useInView(0.1);
  const [plansRef, plansInView] = useInView(0.05);
  const [galleryRef, galleryInView] = useInView(0.1);

  return (
    <>
      <div className="rs-loading-bar" />
      <Header color="transparent" />

      {/* HERO */}
      <section
        className="rs-hero"
        style={{ backgroundImage: 'url(/assets/backdd66.jpg)' }}
      >
        <div className="rs-hero__overlay" />
        <div className="rs-hero__building">
          <img src="/assets/house8df6.png" alt="" aria-hidden="true" />
        </div>
        <div className="rs-hero__content">
          <div className="rs-container">
            <p className="rs-hero__eyebrow">Bhopal, Madhya Pradesh</p>
            <h1 className="rs-hero__title">
              Bhopal&apos;s Biggest<br />
              <span>Co-working Space</span>
            </h1>
            <p className="rs-hero__sub">
              10,000+ sq ft of premium workspace — designed for focus, built for community.
            </p>
            <div className="rs-hero__cta">
              <a href="#lets-connect" className="rs-btn rs-btn--light">Book a Free Tour</a>
              <Link to="/services" className="rs-btn rs-btn--ghost">View Plans →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="rs-stats">
        <div className="rs-container rs-stats__grid">
          {[
            ['10,000+', 'sq ft of workspace'],
            ['200+', 'active members'],
            ['4', 'workspace types'],
            ['24/7', 'security & access'],
          ].map(([v, l]) => (
            <div key={l} className="rs-stats__item">
              <span className="rs-stats__val">{v}</span>
              <span className="rs-stats__label">{l}</span>
            </div>
          ))}
        </div>
      </div>

      {/* WHY ROOTSPACE */}
      <section ref={whyRef} className="rs-why">
        <div className="rs-container rs-why__inner">
          <div className={`rs-why__text${whyInView ? ' rs-visible' : ''}`}>
            <p className="rs-eyebrow">Why Rootspace?</p>
            <h2>More than a desk.<br /><em>A place to grow.</em></h2>
            <p className="rs-body">
              Rootspace is Bhopal&apos;s largest co-working space — a thriving community of founders,
              freelancers, and teams. We&apos;ve designed every corner for deep focus, creative energy,
              and real momentum.
            </p>
            <a href="#lets-connect" className="rs-btn rs-btn--dark">Get Started →</a>
          </div>
          <div className={`rs-why__video${whyInView ? ' rs-visible' : ''}`}>
            <video
              src="/videos/why-us.mp4"
              autoPlay
              playsInline
              loop
              muted
              poster="/assets/backdd66.jpg"
            />
          </div>
        </div>
      </section>

      {/* PLANS */}
      <section ref={plansRef} className="rs-plans">
        <div className="rs-container">
          <p className="rs-eyebrow rs-eyebrow--light">Workspace Plans</p>
          <h2 className="rs-plans__heading">
            Find your <em>perfect space.</em>
          </h2>
          <div className="rs-plans__grid">
            {PLANS.map((plan, i) => (
              <article
                key={plan.title}
                className={`rs-plan-card${plan.popular ? ' rs-plan-card--popular' : ''}${plansInView ? ' rs-visible' : ''}`}
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="rs-plan-card__img">
                  <img src={plan.img} alt={plan.title} loading="lazy" />
                </div>
                {plan.popular && <span className="rs-plan-card__badge">Most Popular</span>}
                <div className="rs-plan-card__body">
                  <h3>{plan.title}</h3>
                  <p className="rs-plan-card__tag">{plan.tagline}</p>
                  <ul className="rs-plan-card__bullets">
                    {plan.bullets.map(b => <li key={b}>{b}</li>)}
                  </ul>
                  <div className="rs-plan-card__foot">
                    <span className="rs-plan-card__price">{plan.price}<small>/mo</small></span>
                    <a href="#lets-connect" className="rs-btn rs-btn--outline">Book Now</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="rs-plans__note">18% GST additional. Custom quotes for teams &amp; longer durations.</p>
        </div>
      </section>

      {/* AMENITIES */}
      <section className="rs-amenities">
        <div className="rs-container">
          <p className="rs-eyebrow">Included in every plan</p>
          <h2 className="rs-amenities__heading">Built for work. <em>Designed for life.</em></h2>
          <div className="rs-amenities__grid">
            {[
              ['⚡', 'High-Speed Internet', 'Dedicated fibre — no shared slowdowns.'],
              ['☕', 'Unlimited Coffee', 'Fuel your focus all day, every day.'],
              ['🎮', 'PS5 Gaming Zone', 'Recharge and play between work sessions.'],
              ['🔒', '24/7 Security', 'CCTV and secure access round the clock.'],
              ['🖨️', 'Printing & Scanning', 'Free monthly prints with every plan.'],
              ['🤝', 'Conference Rooms', 'Book meeting rooms for your team or clients.'],
              ['📚', 'Quiet Library', 'A distraction-free zone for deep work.'],
              ['🌱', 'Chill Zones', 'Lounge areas to reset and get inspired.'],
            ].map(([icon, title, desc]) => (
              <div key={title} className="rs-amenity">
                <span className="rs-amenity__icon">{icon}</span>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section ref={galleryRef} className="rs-gallery">
        <div className="rs-container">
          <p className="rs-eyebrow rs-eyebrow--light">A closer look</p>
          <h2 className="rs-gallery__heading">Life at <em>Rootspace.</em></h2>
        </div>
        <div className={`rs-gallery__grid${galleryInView ? ' rs-visible' : ''}`}>
          {GALLERY.map((src, i) => (
            <figure key={src} className={`rs-gallery__tile rs-gallery__tile--${i + 1}`}>
              <img src={src} alt="Rootspace workspace" loading="lazy" />
            </figure>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
