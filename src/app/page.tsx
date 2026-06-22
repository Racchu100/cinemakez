"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    document.querySelectorAll(".reveal").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = document.querySelector(".portfolio-scroll") as HTMLElement;
    if (!scrollContainer) return;

    let intervalId: any;

    const startAutoScroll = () => {
      if (window.innerWidth >= 768) return;

      intervalId = setInterval(() => {
        const cardWidth = 220 + 16; // card width (220px) + gap (1rem/16px)
        const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
        
        if (scrollContainer.scrollLeft >= maxScroll - 10) {
          scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
        } else {
          scrollContainer.scrollBy({ left: cardWidth, behavior: "smooth" });
        }
      }, 3000);
    };

    startAutoScroll();

    const handleTouch = () => {
      clearInterval(intervalId);
    };

    scrollContainer.addEventListener("touchstart", handleTouch, { passive: true });

    return () => {
      clearInterval(intervalId);
      scrollContainer.removeEventListener("touchstart", handleTouch);
    };
  }, []);

  return (
    <>
      {/* NAV */}
      <nav>
        <div className="nav-logo" style={{ display: "flex", alignItems: "center" }}>
          <img src="/logo.jpg" alt="Cinemakez" style={{ height: "40px", width: "auto" }} />
        </div>
        <a href="https://wa.me/919108640935" className="nav-cta" target="_blank" rel="noopener noreferrer">📞 Book Now</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="grain"></div>
        <div className="letterbox-top"></div>
        <div className="letterbox-bottom"></div>
        <div className="hero-content reveal">
          <div className="hero-eyebrow">✦ Cinematic Reels · Shot on iPhone ✦</div>
          <h1 className="hero-title">
            <span className="line1">MOMENTS</span><br />
            <span className="line2">INTO</span><br />
            <span className="line3">MOTION</span>
          </h1>
          <p className="hero-sub">We Shoot. You Inspire.<br /><strong>Cinematic reels shot on iPhone</strong></p>
          <div className="hero-actions">
            <a href="https://wa.me/919108640935" className="btn-primary" target="_blank" rel="noopener noreferrer">
              🎬 Book Now
            </a>
            <a href="https://instagram.com" className="btn-ghost" target="_blank" rel="noopener noreferrer">
              📽 View Portfolio
            </a>
          </div>
          <div className="badge-same-day">⏱ Same Day Delivery · Fast Edits. On Time. Every Time.</div>
        </div>
      </section>

      {/* GALLERY STRIP */}
      <div className="gallery-strip">
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&q=80&auto=format" alt="Wedding reel" loading="lazy"/>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=400&q=80&auto=format" alt="Cinematic reel" loading="lazy"/>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=400&q=80&auto=format" alt="Fashion reel" loading="lazy"/>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&q=80&auto=format" alt="Birthday reel" loading="lazy"/>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400&q=80&auto=format" alt="Corporate reel" loading="lazy"/>
        </div>
        <div className="gallery-item">
          <img src="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=400&q=80&auto=format" alt="Concert reel" loading="lazy"/>
        </div>
      </div>

      {/* ABOUT / STATS */}
      <section style={{ background: "var(--deep)" }}>
        <div className="reveal">
          <div className="section-label">About Cinemakez</div>
          <h2 className="section-title">Grand Opening</h2>
          <div className="divider"></div>
          <p className="section-sub">We're Cinemakez — a premium cinematic reel agency based in India. We blend storytelling, tech, and art to craft scroll-stopping reels for brands, businesses, and special moments. Shot on iPhone. Powered by DJI Osmo Gimbal.</p>
        </div>
        <div className="stats-row reveal" style={{ marginTop: "2rem" }}>
          <div className="stat-cell">
            <span className="stat-num">200+</span>
            <span className="stat-lbl">Reels Delivered</span>
          </div>
          <div className="stat-cell">
            <span className="stat-num">48H</span>
            <span className="stat-lbl">Avg Turnaround</span>
          </div>
          <div className="stat-cell">
            <span className="stat-num">4.9★</span>
            <span className="stat-lbl">Client Rating</span>
          </div>
        </div>
      </section>

      {/* FEATURES / HOW WE SHOOT */}
      <section>
        <div className="reveal">
          <div className="section-label">Our Technology</div>
          <h2 className="section-title">Cinematic Toolkit</h2>
          <div className="divider"></div>
        </div>
        <div className="features-grid reveal">
          <div className="feature-cell">
            <div className="feature-icon">📱</div>
            <div className="feature-name">Shot on iPhone</div>
            <div className="feature-desc">Pro-grade cinema quality from the world's most advanced mobile camera</div>
          </div>
          <div className="feature-cell">
            <div className="feature-icon">🎥</div>
            <div className="feature-name">DJI Osmo Gimbal</div>
            <div className="feature-desc">Ultra-smooth stabilized shots for that buttery Hollywood look</div>
          </div>
          <div className="feature-cell">
            <div className="feature-icon">🎞</div>
            <div className="feature-name">Cinematic Reels</div>
            <div className="feature-desc">Colour graded, rhythm-cut, music-synced short-form video</div>
          </div>
          <div className="feature-cell">
            <div className="feature-icon">✨</div>
            <div className="feature-name">Creative Storytelling</div>
            <div className="feature-desc">Every frame tells a story. We direct, shoot, and edit with intent</div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "var(--deep)" }}>
        <div className="reveal">
          <div className="section-label">What We Create</div>
          <h2 className="section-title">Our Services</h2>
          <div className="divider"></div>
        </div>
        <div className="services-grid reveal">
          <div className="service-card">
            <div className="svc-icon">🚗</div>
            <div className="svc-name">Vehicle Delivery Reels</div>
          </div>
          <div className="service-card">
            <div className="svc-icon">💍</div>
            <div className="svc-name">Wedding Reels</div>
          </div>
          <div className="service-card">
            <div className="svc-icon">🎂</div>
            <div className="svc-name">Birthday Reels</div>
          </div>
          <div className="service-card">
            <div className="svc-icon">🏪</div>
            <div className="svc-name">Shop Opening Reels</div>
          </div>
          <div className="service-card">
            <div className="svc-icon">📢</div>
            <div className="svc-name">Promotional Reels</div>
          </div>
          <div className="service-card">
            <div className="svc-icon">💼</div>
            <div className="svc-name">Business & Product Reels</div>
          </div>
          <div className="service-card">
            <div className="svc-icon">🏢</div>
            <div className="svc-name">Corporate Reels</div>
          </div>
          <div className="service-card">
            <div className="svc-icon">👗</div>
            <div className="svc-name">Fashion & Beauty Reels</div>
          </div>
          <div className="service-card">
            <div className="svc-icon">⭐</div>
            <div className="svc-name">Custom Reels For Any Occasion</div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO SCROLL */}
      <section>
        <div className="reveal">
          <div className="section-label">Our Work</div>
          <h2 className="section-title">Portfolio</h2>
          <div className="divider"></div>
          <p className="section-sub">A glimpse of the stories we've told. Every reel is a moment made unforgettable.</p>
        </div>
        <div className="portfolio-scroll">
          <div className="portfolio-thumb">
            <img src="https://images.unsplash.com/photo-1583939003579-730e3918a45a?w=440&q=80&auto=format" alt="Wedding"/>
            <div className="portfolio-thumb-label">Wedding Reel</div>
          </div>
          <div className="portfolio-thumb">
            <img src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=440&q=80&auto=format" alt="Birthday"/>
            <div className="portfolio-thumb-label">Birthday Reel</div>
          </div>
          <div className="portfolio-thumb">
            <img src="https://images.unsplash.com/photo-1487528278747-ba99ed528ebc?w=440&q=80&auto=format" alt="Corporate"/>
            <div className="portfolio-thumb-label">Corporate Reel</div>
          </div>
          <div className="portfolio-thumb">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=440&q=80&auto=format" alt="Fashion"/>
            <div className="portfolio-thumb-label">Fashion Reel</div>
          </div>
          <div className="portfolio-thumb">
            <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=440&q=80&auto=format" alt="Business"/>
            <div className="portfolio-thumb-label">Business Reel</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "var(--deep)" }}>
        <div className="reveal">
          <div className="section-label">The Process</div>
          <h2 className="section-title">How It Works</h2>
          <div className="divider"></div>
        </div>
        <div className="process-steps reveal">
          <div className="process-step">
            <div className="step-num">01</div>
            <div className="step-body">
              <div className="step-title">Book via WhatsApp or Instagram</div>
              <div className="step-desc">DM us or call 9108640935 to discuss your vision, date, and requirements.</div>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num">02</div>
            <div className="step-body">
              <div className="step-title">We Shoot On Location</div>
              <div className="step-desc">Our team arrives with iPhone + DJI Osmo Gimbal for cinema-quality capture.</div>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num">03</div>
            <div className="step-body">
              <div className="step-title">Cinematic Editing</div>
              <div className="step-desc">Colour grading, music sync, cuts — crafted to make every second land.</div>
            </div>
          </div>
          <div className="process-step">
            <div className="step-num">04</div>
            <div className="step-body">
              <div className="step-title">Same Day Delivery</div>
              <div className="step-desc">Your reel, delivered on time — every time. Ready to post, ready to wow.</div>
            </div>
          </div>
        </div>
      </section>



      {/* PRICING */}
      <section style={{ background: "var(--deep)" }}>
        <div className="reveal">
          <div className="section-label">Investment</div>
          <h2 className="section-title">Pricing Plans</h2>
          <div className="divider"></div>
          <p className="section-sub">Simple, transparent pricing. Contact us for custom packages and bulk deals.</p>
        </div>
        <div className="pricing-cards reveal">
          <div className="price-card">
            <div className="price-name">Basic</div>
            <div className="price-tag"><span className="currency">₹</span>1,999</div>
            <p className="price-desc">Perfect for birthdays, small events, and solo promotions.</p>
            <ul className="price-features">
              <li>1-2 hr shoot</li>
              <li>1 edited reel</li>
              <li>Same day delivery</li>
            </ul>
            <a href="https://wa.me/919108640935" className="btn-ghost" style={{ width: "100%", justifyContent: "center", textAlign: "center", fontSize: "0.8rem", padding: "0.7rem" }} target="_blank" rel="noopener noreferrer">Book Basic</a>
          </div>
          <div className="price-card popular">
            <div className="price-name">Standard</div>
            <div className="price-tag"><span className="currency">₹</span>2,999</div>
            <p className="price-desc">Perfect for brand shoots, weddings, and corporate events.</p>
            <ul className="price-features">
              <li>Half day coverage (up to 5 hr)</li>
              <li>1 edited reel</li>
              <li>Same day delivery</li>
              <li>Complimentary Photos</li>
            </ul>
            <a href="https://wa.me/919108640935" className="btn-primary" style={{ width: "100%", justifyContent: "center", textAlign: "center", fontSize: "0.8rem", padding: "0.75rem" }} target="_blank" rel="noopener noreferrer">🎬 Book Standard</a>
          </div>
          <div className="price-card">
            <div className="price-name">Premium</div>
            <div className="price-tag"><span className="currency">₹</span>4,999</div>
            <p className="price-desc">Full day coverage for high-end events and content series.</p>
            <ul className="price-features">
              <li>Full day coverage (up to 8 hr)</li>
              <li>2 edited reels</li>
              <li>Same day delivery</li>
              <li>Complimentary photos</li>
            </ul>
            <a href="https://wa.me/919108640935" className="btn-ghost" style={{ width: "100%", justifyContent: "center", textAlign: "center", fontSize: "0.8rem", padding: "0.7rem" }} target="_blank" rel="noopener noreferrer">Book Premium</a>
          </div>
          <div className="price-card" style={{ borderColor: "var(--gold)" }}>
            <div className="price-name" style={{ color: "var(--gold)" }}>Wedding Package (Limited offer)</div>
            <div className="price-tag"><span className="currency">₹</span>7,999</div>
            <p className="price-desc">Complete cinematic coverage for your big day.</p>
            <ul className="price-features">
              <li>3 events covered</li>
              <li>3 edited reels</li>
              <li>Same day delivery</li>
              <li>Complimentary photos</li>
            </ul>
            <a href="https://wa.me/919108640935" className="btn-primary" style={{ width: "100%", justifyContent: "center", textAlign: "center", fontSize: "0.8rem", padding: "0.75rem", background: "linear-gradient(135deg, var(--gold) 0%, var(--violet) 100%)", boxShadow: "0 4px 30px rgba(245, 158, 11, 0.3)" }} target="_blank" rel="noopener noreferrer">🎬 Book Wedding</a>
          </div>
        </div>
      </section>

      {/* MAIN CTA */}
      <section>
        <div className="cta-block reveal">
          <div className="section-label" style={{ textAlign: "center" }}>Ready to go viral?</div>
          <h2 className="cta-title">Let's Make Your<br />Reel Unforgettable</h2>
          <p className="cta-sub">Contact us today. Your moment is waiting to go into motion.</p>
          <div className="cta-actions">
            <a href="https://wa.me/919108640935" className="btn-wa" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              WhatsApp: 9108640935
            </a>
            <a href="https://instagram.com" className="btn-ig" target="_blank" rel="noopener noreferrer">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="#fff" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              DM Us on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="footer-logo" style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }}>
          <img src="/logo.jpg" alt="Cinemakez" style={{ height: "60px", width: "auto", borderRadius: "6px" }} />
        </div>
        <p>Moments Into Motion<br />Cinematic reels shot on iPhone · Bengaluru, India</p>
        <div className="footer-contact">
          <a href="tel:+919108640935">📞 +91 9108640935</a>
          <a href="https://wa.me/919108640935" target="_blank" rel="noopener noreferrer">💬 WhatsApp Us</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">📸 Instagram — DM to Get Started</a>
        </div>
        <p className="footer-note">© 2025 Cinemakez. All rights reserved. · Fast Edits. On Time. Every Time.<br />Done by Graphitex Digitals</p>
      </footer>


    </>
  );
}
