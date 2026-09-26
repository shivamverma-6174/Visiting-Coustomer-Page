import { useState, useEffect, useRef } from "react";
import "./App.css";

// ── Real SVG Icons ──────────────────────────────────────────
const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.61 21 3 13.39 3 4a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.45.57 3.58a1 1 0 01-.24 1.01l-2.21 2.2z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.557 4.117 1.528 5.845L.057 23.427a.5.5 0 00.624.601l5.747-1.502A11.953 11.953 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22a9.955 9.955 0 01-5.064-1.383l-.361-.215-3.755.981.999-3.648-.235-.374A9.961 9.961 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
  </svg>
);
const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);
const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" width="22" height="22">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z" />
  </svg>
);

// ── Data ────────────────────────────────────────────────────
const SLIDES = [
  "/images/slide1.jpg",
  "/images/slide2.jpg",
  "/images/slide3.jpg",
  "/images/slide4.jpg",
];

const SERVICES = [
  {
    icon: "🎧",
    title: "DJ (डीजे)",
    desc: "लेटेस्ट गानों के साथ दमदार साउंड सिस्टम",
  },
  {
    icon: "🥁",
    title: "Band Baggi (बैंड बग्गी)",
    desc: "पारंपरिक बैंड बाजे के साथ शानदार बारात",
  },
  {
    icon: "💃",
    title: "Bhangada (भांगड़ा)",
    desc: "जोश भरे भांगड़ा डांसर — बारात को जीवंत बनाएं",
  },
  {
    icon: "🛕",
    title: "Rath (रथ)",
    desc: "सजा-धजा रथ — दूल्हे की शाही एंट्री के लिए",
  },
  {
    icon: "💡",
    title: "Road Light (रोड लाइट)",
    desc: "रंगबिरंगी LED लाइटों से बारात को चमकाएं",
  },
  {
    icon: "🚗",
    title: "Vintage Car (विंटेज कार)",
    desc: "क्लासिक विंटेज कार — रॉयल एंट्री के लिए",
  },
  {
    icon: "🚌",
    title: "Baraat on Wheel (बारात ऑन व्हील)",
    desc: "2 गाड़ियां — चलती बारात के साथ पूरा DJ सेटअप",
  },
  {
    icon: "🚎",
    title: "Double Decker (डबल डेकर)",
    desc: "विशाल डबल डेकर बस — अल्टीमेट एंटरटेनमेंट",
  },
  {
    icon: "🎉",
    title: "Road Show (रोड शो)",
    desc: "राजनीतिक व प्रचार रोड शो के लिए पूरा सेटअप",
  },
  {
    icon: "✨",
    title: "Event Full Setup (इवेंट)",
    desc: "साउंड, लाइटिंग व डेकोरेशन — एक ही जगह से",
  },
];

const GALLERY = [
  { src: "/images/slide1.jpg", label: "बारात ऑन व्हील्स" },
  { src: "/images/slide2.jpg", label: "DJ नाइट सेटअप" },
  { src: "/images/slide3.jpg", label: "फुल रोड शो" },
  { src: "/images/slide4.jpg", label: "VIP एंट्री सेटअप" },
  { src: "/images/gallery5.jpg", label: "भव्य बारात" },
  { src: "/images/gallery6.jpg", label: "DJ गाड़ी" },
];

// ── Main App ────────────────────────────────────────────────
export default function App() {
  
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const cardRefs = useRef([]);

  useEffect(() => {
    const t = setInterval(
      () => setCurrentSlide((p) => (p + 1) % SLIDES.length),
      4500,
    );
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting)
            setVisibleCards((p) => new Set([...p, e.target.dataset.index]));
        }),
      { threshold: 0.12 },
    );
    cardRefs.current.forEach((r) => r && obs.observe(r));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site-wrapper">
      {/* ── ANNOUNCEMENT TICKER ─────────────────────────── */}
      <div className="announcement-bar">
        <div className="announcement-track">
          🙏&nbsp;अपनी बारात को यादगार बनाने के लिए आज ही विजिट करें&nbsp;🙏
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 📍&nbsp;JMD DJ Maghar — हमारी
          कोई अन्य शाखा नहीं है &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          📞&nbsp;+91 94522 11014 &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          🎉&nbsp;VIP बारात के लिए अभी बुकिंग करें&nbsp;🎉
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 🙏&nbsp;अपनी बारात को यादगार
          बनाने के लिए आज ही विजिट करें&nbsp;🙏
          &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; 📍&nbsp;JMD DJ Maghar — हमारी
          कोई अन्य शाखा नहीं है &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
          📞&nbsp;+91 94522 11014 , +91 7054075703
        </div>
      </div>

      {/* ── NAVBAR ──────────────────────────────────────── */}
      <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-brand" onClick={() => scrollTo("home")}>
          <img
            src="/images/jmd_logo_real.jpg"
            alt="JMD DJ Logo"
            className="nav-logo"
            style={{ objectFit: "contain", background: "#000" }}
          />
          <div className="nav-brand-text">
            <span className="nav-title">
              JMD <span className="gold">DJ</span>
            </span>
            <span className="nav-subtitle">Maghar, S.K.N</span>
          </div>
        </div>

        <div className="nav-links desktop-only">
          {[
            ["home", "होम"],
            ["about", "हमारे बारे में"],
            ["services", "सेवाएं"],
            ["gallery", "गैलरी"],
            ["contact", "संपर्क"],
          ].map(([id, label]) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>
              {label}
            </button>
          ))}
        </div>

        <div className="nav-right">
          <a href="tel:+919452211014" className="btn-call">
            <PhoneIcon /> Call Now
          </a>
          <button className="hamburger" onClick={() => setMenuOpen((o) => !o)}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {[
              ["home", "होम"],
              ["about", "हमारे बारे में"],
              ["services", "सेवाएं"],
              ["gallery", "गैलरी"],
              ["contact", "संपर्क"],
            ].map(([id, label]) => (
              <button
                key={id}
                className="mobile-link"
                onClick={() => scrollTo(id)}
              >
                {label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* ── HERO ────────────────────────────────────────── */}
      <section id="home" className="hero">
        {SLIDES.map((src, i) => (
          <div
            key={i}
            className={`hero-slide ${i === currentSlide ? "active" : ""}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className="hero-overlay" />

        <div className="hero-content">
          {/* Real JMD Logo */}
          <div className="hero-logo-wrap">
            <img
              src="/images/jmd_logo_real.jpg"
              alt="JMD DJ Maghar Logo"
              className="hero-logo"
            />
          </div>

          <div className="hero-badge">
            📍 JMD DJ & BAND Maghar &nbsp;|&nbsp; Prop: Ajay Verma
          </div>

          <h1 className="hero-title">
            आपकी बारात का
            <br />
            <span className="hero-highlight">VIP अनुभव</span>
          </h1>
          <p className="hero-sub">
            Baarat on Wheels • Event Full Setup • Road Show
          </p>

          <div className="hero-notice">
            ⚠️ <strong>हमारी कोई अन्य शाखा नहीं है</strong> — केवल JMD DJ Maghar
          </div>

          <div className="hero-btns">
            <button
              className="btn-primary"
              onClick={() => scrollTo("services")}
            >
              🎉 हमारी सेवाएं देखें
            </button>
            <a
              href="https://maps.app.goo.gl/Yb4f1cTB7xAJdKDR7"
              target="_blank"
              rel="noreferrer"
              className="btn-outline"
            >
              <MapPinIcon /> लोकेशन देखें
            </a>
          </div>

          <div className="hero-numbers">
            <a href="tel:+919452211014" className="hero-phone">
              <PhoneIcon /> +91 94522 11014
            </a>
            <span className="num-divider">|</span>
            <a href="tel:+917054075703" className="hero-phone">
              <PhoneIcon /> +91 70540 75703
            </a>
          </div>
        </div>

        <div className="slide-dots">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(i)}
            />
          ))}
        </div>

        <div className="scroll-hint">
          <span>Scroll Down</span>
          <div className="scroll-arrow">▼</div>
        </div>
      </section>

      {/* ── ABOUT / GADIYAN ─────────────────────────────── */}
      <section id="about" className="section about-section">
        <div className="section-inner">
          <div className="tag">हमारे बारे में</div>
          <h2 className="section-title">
            हमारी <span>3 गाड़ियां</span>
          </h2>
          <p className="section-sub">
            JMD DJ Maghar के पास 3 premium vehicles हैं — आपकी VIP बारात को और
            यादगार बनाने के लिए।
          </p>

          {/* Owner Card */}
          <div className="owner-card">
            <div className="owner-photo-wrap">
              <img
                src="/images/owner_ajay.jpeg"
                alt="Ajay Verma"
                className="owner-photo"
              />
            </div>
            <div className="owner-info">
              <div className="owner-badge">👑 Proprietor</div>
              <h3 className="owner-name">Ajay Verma</h3>
              <p className="owner-title">Prop. JMD DJ Maghar</p>
              <p className="owner-sub">हमारी कोई अन्य शाखा नहीं है</p>
              <a href="tel:+919452211014" className="owner-call">
                <PhoneIcon /> +91 94522 11014
              </a>
            </div>
          </div>
          <div className="vehicles-grid">
            <div className="vehicle-card">
              <div className="vehicle-icon">🚌</div>
              <h3>बारात ऑन व्हील्स #1</h3>
              <p>
                पहली गाड़ी — फुल DJ + लाइटिंग सेटअप, बारात के साथ चलती है, सबके
                चेहरे पर मुस्कान लाती है!
              </p>
            </div>
            <div className="vehicle-card featured">
              <div className="vehicle-icon">🎊</div>
              <h3>इवेंट फुल सेटअप गाड़ी</h3>
              <p>
                डेडिकेटेड event vehicle — शादी या किसी भी function के लिए पूरा
                sound, light और decoration setup।
              </p>
            </div>
            <div className="vehicle-card">
              <div className="vehicle-icon">🚎</div>
              <h3>बारात ऑन व्हील्स #2</h3>
              <p>
                दूसरी गाड़ी — Double Decker style, maximum entertainment, पूरी
                crowd को हिला के रख देती है!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── VIDEO SECTION ───────────────────────────────── */}
      <section className="video-section">
        <div className="section-inner">
          <div className="tag gold-tag">Live Action</div>
          <h2 className="section-title dark-title">
            देखो हमारा <span className="gold">धमाका!</span>
          </h2>
          <p className="section-sub light-sub">
            तीनों गाड़ियां एक साथ — और कैसा होता है हमारा VIP Baarat setup!
          </p>
          <div className="video-wrapper">
            <iframe
              src="https://www.instagram.com/p/DXobtwOEvrK/embed/"
              frameBorder="0"
              allowTransparency="true"
              allowFullScreen
              scrolling="no"
              title="JMD DJ Reel"
            />
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────── */}
      <section id="services" className="section services-section">
        <div className="section-inner">
          <div className="tag">हमारी सेवाएं</div>
          <h2 className="section-title">
            VIP बारात के लिए <span>सब कुछ</span>
          </h2>
          <p className="section-sub">
            एक ही जगह से पूरी बारात का इंतज़ाम — DJ से लेकर Vintage Car तक!
          </p>
          <div className="services-grid">
            {SERVICES.map((s, i) => (
              <div
                key={i}
                className={`service-card ${visibleCards.has(String(i)) ? "visible" : ""}`}
                data-index={i}
                ref={(el) => (cardRefs.current[i] = el)}
                style={{ transitionDelay: `${(i % 4) * 80}ms` }}
              >
                <div className="service-emoji">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GALLERY ─────────────────────────────────────── */}
      <section id="gallery" className="section gallery-section">
        <div className="section-inner">
          <div className="tag gold-tag">Photo Gallery</div>
          <h2 className="section-title dark-title">
            हमारी <span className="gold">झलकियां</span>
          </h2>
          <p className="section-sub light-sub">
            कुछ यादगार पल — हमारे setups की तस्वीरें
          </p>
          <div className="gallery-grid">
            {GALLERY.map((item, i) => (
              <div key={i} className="gallery-item">
                <img src={item.src} alt={item.label} loading="lazy" />
                <div className="gallery-label">{item.label}</div>
              </div>
            ))}
          </div>
          <div className="gallery-cta">
            <a
              href="https://www.instagram.com/jmd_dj_maghar?stkn=MXB5c251MGtxaTczYQ=="
              target="_blank"
              rel="noreferrer"
              className="btn-instagram"
            >
              <InstagramIcon />
              Instagram पर और Photos देखें
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────── */}
      <section id="contact" className="section contact-section">
        <div className="section-inner">
          <div className="tag">संपर्क करें</div>
          <h2 className="section-title">
            हमसे <span>जुड़ें</span>
          </h2>
          <p className="section-sub">
            Booking या inquiry के लिए सीधे call करें या map पर location देखें।
          </p>

          <div className="contact-grid">
            <div className="contact-info-box">
              <img
                src="/images/jmd_logo_real.jpg"
                alt="JMD DJ"
                className="contact-logo"
              />
              <h3>JMD DJ & BAND Maghar</h3>
              <p className="prop-name">Prop: Ajay Verma</p>
              <p className="branch-note">⚠️ हमारी कोई अन्य शाखा नहीं है</p>

              <div className="contact-items">
                <a href="tel:+919452211014" className="contact-item">
                  <span className="c-icon">
                    <PhoneIcon />
                  </span>
                  <div>
                    <small>Ajay Verma</small>
                    <strong>+91 94522 11014</strong>
                  </div>
                </a>
                <a href="tel:+917054075703" className="contact-item">
                  <span className="c-icon">
                    <PhoneIcon />
                  </span>
                  <div>
                    <small>Satyam Verma</small>
                    <strong>+91 70540 75703</strong>
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/Yb4f1cTB7xAJdKDR7"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <span className="c-icon">
                    <MapPinIcon />
                  </span>
                  <div>
                    <small>Location</small>
                    <strong>Maghar, Sant Kabir Nagar, Uttar Pradesh</strong>
                  </div>
                </a>
                <a
                  href="https://www.instagram.com/jmd_dj_maghar?stkn=MXB5c251MGtxaTczYQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="contact-item"
                >
                  <span className="c-icon">
                    <InstagramIcon />
                  </span>
                  <div>
                    <small>Instagram</small>
                    <strong>@jmd_dj_maghar</strong>
                  </div>
                </a>
              </div>

              <a
                href="https://wa.me/919452211014"
                target="_blank"
                rel="noreferrer"
                className="btn-whatsapp"
              >
                <WhatsAppIcon />
                WhatsApp पर बात करें 💬
              </a>
            </div>

            <div className="map-box">
              <iframe
                src="https://maps.google.com/maps?q=Maghar,+Uttar+Pradesh&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "420px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="JMD DJ Location"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────── */}
      <footer className="footer">
        <div className="footer-logo-row">
          <img
            src="/images/jmd_logo_real.jpg"
            alt="JMD DJ"
            className="footer-logo-img"
          />
          <div>
            <div className="footer-brand">
              JMD DJ & Band Maghar, Sant Kabir Nagar
            </div>
            <div className="footer-prop">Prop: Ajay Verma</div>
          </div>
        </div>
        <p className="footer-notice">⚠️ हमारी कोई अन्य शाखा नहीं है</p>
        <div className="footer-social">
          <a
            href="tel:+919452211014"
            className="social-icon phone-icon"
            title="Call"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://wa.me/919452211014"
            target="_blank"
            rel="noreferrer"
            className="social-icon wa-icon"
            title="WhatsApp"
          >
            <WhatsAppIcon />
          </a>
          <a
            href="https://www.instagram.com/jmd_dj_maghar?stkn=MXB5c251MGtxaTczYQ=="
            target="_blank"
            rel="noreferrer"
            className="social-icon insta-icon"
            title="Instagram"
          >
            <InstagramIcon />
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} <strong>JMD DJ Maghar</strong> — The
          Complete Solution for Your VIP Baarat 🎉
        </p>
        <p className="footer-dev">
          Designed &amp; Developed by <strong>Shivam Verma</strong>
        </p>
      </footer>

      {/* ── FLOATING BUTTONS ────────────────────────────── */}
      <div className="float-btns">
        <a
          href="https://www.instagram.com/jmd_dj_maghar?stkn=MXB5c251MGtxaTczYQ=="
          target="_blank"
          rel="noreferrer"
          className="fab fab-insta"
          title="Instagram"
        >
          <InstagramIcon />
        </a>
        <a
          href="https://wa.me/919452211014"
          target="_blank"
          rel="noreferrer"
          className="fab fab-wa"
          title="WhatsApp"
        >
          <WhatsAppIcon />
        </a>
        <a href="tel:+919452211014" className="fab fab-call" title="Call">
          <PhoneIcon />
        </a>
      </div>
    </div>
  );
}
