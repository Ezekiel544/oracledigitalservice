import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: "easeOut" } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function OracleDigitalService() {
  const [menuOpen, setMenuOpen] = useState(false);

  const sections = {
    home: useRef(null),
    team: useRef(null),
    services: useRef(null),
    process: useRef(null),
    portfolio: useRef(null),
    contact: useRef(null),
  };

  const scrollTo = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="oracle-app">
      {/* Background */}
      <div className="background">
        <div className="glow1"></div>
        <div className="glow2"></div>
        <div className="glow3"></div>
      </div>

      {/* NAVBAR with Hamburger */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            <span className="logo-icon">O</span>
            Oracle<span className="dot">.</span>
          </div>

          <div className="nav-links desktop">
            {Object.keys(sections).map((key) => (
              <button key={key} onClick={() => scrollTo(sections[key])} className="nav-link">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <button onClick={() => scrollTo(sections.contact)} className="cta-button desktop">
            Start Project
          </button>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
            <span className={menuOpen ? "open" : ""}></span>
          </button>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            {Object.keys(sections).map((key) => (
              <button key={key} onClick={() => scrollTo(sections[key])} className="mobile-link">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
            <button onClick={() => scrollTo(sections.contact)} className="mobile-cta">
              Start Project
            </button>
          </div>
        )}
      </nav>

      {/* HERO - Now Much Better on Mobile */}
      <section ref={sections.home} className="hero">
        <div className="hero-content">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <div className="badge">Elite Digital Craftsmanship</div>

            <h1 className="hero-title">
              We build <span className="highlight">digital excellence</span>
            </h1>

            <p className="hero-subtitle">
              Oracle Digital Service crafts world-class web platforms, mobile experiences, 
              and enterprise systems that dominate markets.
            </p>

            <div className="hero-buttons">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo(sections.contact)}
                className="primary-btn"
              >
                Launch Your Project
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => scrollTo(sections.portfolio)}
                className="secondary-btn"
              >
                See Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">SCROLL TO EXPLORE ↓</div>
      </section>

      {/* TEAM SECTION */}
      <section ref={sections.team} className="section">
        <div className="section-container">
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="section-title"
          >
            Built by Elite Minds
          </motion.h2>

          <motion.div 
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid team-grid"
          >
            {[
              "UI/UX Designers", "Frontend Engineers", "Backend & Cloud Architects",
              "Mobile Specialists", "AI & Automation Experts", "DevOps & QA",
              "Product Strategists", "Creative Technologists"
            ].map((role, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ y: -12 }} className="card">
                <h3>{role}</h3>
                <p>World-class talent delivering pixel-perfect, battle-tested solutions.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={sections.services} className="section">
        <div className="section-container">
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="section-title"
          >
            What We Build
          </motion.h2>
          <div className="grid services-grid">
            {["Web Platforms", "Mobile Apps", "SaaS Systems", "Enterprise Software", "Startup MVPs", "AI & Automation"].map((service, i) => (
              <motion.div key={i} variants={fadeUp} whileHover={{ scale: 1.05 }} className="card">
                <h3>{service}</h3>
                <p>Scalable, secure, and beautifully crafted digital solutions.</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section ref={sections.process} className="section">
        <div className="section-container">
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="section-title"
          >
            Our Process
          </motion.h2>
          <div className="grid process-grid">
            {["Research", "Design", "Development", "Launch & Scale"].map((step, i) => (
              <motion.div key={i} whileHover={{ scale: 1.05 }} className="card process-card">
                <div className="step-number">{i + 1}</div>
                <h3>{step}</h3>
                <p>Structured and efficient delivery</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section ref={sections.portfolio} className="section">
        <div className="section-container">
          <motion.h2 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="section-title"
          >
            Our Work
          </motion.h2>
          <div className="grid portfolio-grid">
            {[
              { title: "Fintech Dashboard", img: "https://picsum.photos/id/1015/600/400" },
              { title: "Mobile Banking App", img: "https://picsum.photos/id/106/600/400" },
              { title: "SaaS Analytics Platform", img: "https://picsum.photos/id/201/600/400" }
            ].map((project, i) => (
              <motion.div key={i} whileHover={{ scale: 1.04 }} className="portfolio-card card">
                <img src={project.img} alt={project.title} />
                <div className="portfolio-info">
                  <h3>{project.title}</h3>
                  <p>High-performance digital solution</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={sections.contact} className="contact-section">
        <div className="contact-container">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2 className="contact-title">Ready to build something extraordinary?</h2>
            <p className="contact-subtitle">Let’s create the next big thing together.</p>
            <div className="contact-form">
              <input type="email" placeholder="Your email address" className="email-input" />
              <button className="submit-btn">Get In Touch</button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 Oracle Digital Service • Crafting the future, one elite product at a time.</p>
      </footer>

      <style jsx>{`
        .oracle-app {
          font-family: 'Inter', system-ui, sans-serif;
          color: white;
          background: #070b14;
          overflow-x: hidden;
        }

        /* Background Glows */
        .background { position: fixed; inset: 0; z-index: -1; background: #070b14; }
        .glow1, .glow2, .glow3 {
          position: absolute;
          border-radius: 50%;
          filter: blur(130px);
          opacity: 0.12;
          animation: slowPulse 28s infinite alternate ease-in-out;
        }
        .glow1 { width: 850px; height: 850px; background: #34d399; top: -250px; left: -200px; }
        .glow2 { width: 750px; height: 750px; background: #3b82f6; bottom: -180px; right: -180px; animation-delay: 10s; }
        .glow3 { width: 550px; height: 550px; background: #fbbf24; top: 45%; left: 35%; animation-delay: 18s; }
        @keyframes slowPulse { from { transform: scale(0.95); } to { transform: scale(1.12); } }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(7,11,20,0.95);
          backdrop-filter: blur(16px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          z-index: 1000;
        }
        .nav-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 1rem 1.5rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo { font-size: 1.75rem; font-weight: 700; letter-spacing: -1px; }
        .logo-icon, .dot { color: #34d399; }

        .nav-links.desktop { display: none; gap: 2rem; font-size: 1.05rem; }
        .nav-link { background: none; border: none; color: #ddd; cursor: pointer; }
        .nav-link:hover { color: white; }

        .cta-button.desktop { display: none; background: white; color: black; border: none; padding: 0.7rem 1.8rem; border-radius: 50px; font-weight: 600; }

        .hamburger {
          display: block;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
        }
        .hamburger span {
          display: block;
          width: 28px;
          height: 3px;
          background: white;
          margin: 6px 0;
          transition: all 0.3s ease;
        }
        .hamburger span.open:nth-child(1) { transform: rotate(45deg) translate(6px, 6px); }
        .hamburger span.open:nth-child(2) { opacity: 0; }
        .hamburger span.open:nth-child(3) { transform: rotate(-45deg) translate(5px, -6px); }

        .mobile-menu {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          background: rgba(7,11,20,0.98);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        .mobile-link { background: none; border: none; color: #ddd; font-size: 1.2rem; text-align: left; padding: 12px 0; }
        .mobile-cta {
          background: #34d399;
          color: black;
          border: none;
          padding: 1rem;
          border-radius: 50px;
          font-weight: 600;
          margin-top: 1rem;
        }

        /* ==================== HERO - IMPROVED FOR MOBILE ==================== */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          padding: 100px 0 80px;
        }
        .hero-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 1.5rem;
          text-align: center;
        }
        .badge {
          display: inline-block;
          padding: 10px 24px;
          background: rgba(255,255,255,0.07);
          border: 1px solid rgba(52,211,153,0.4);
          border-radius: 50px;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-size: clamp(2.4rem, 8.5vw, 5.2rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 1.2rem;
        }
        .highlight {
          background: linear-gradient(90deg, #34d399, #60a5fa, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: clamp(1.05rem, 4.2vw, 1.35rem);
          max-width: 680px;
          margin: 0 auto 2.8rem;
          color: #bbb;
          line-height: 1.55;
        }
        .hero-buttons {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          align-items: center;
        }
        .primary-btn, .secondary-btn {
          width: 100%;
          max-width: 340px;
          padding: 1.15rem 2rem;
          font-size: 1.1rem;
          font-weight: 600;
          border-radius: 50px;
          cursor: pointer;
          transition: all 0.4s;
        }
        .primary-btn {
          background: #34d399;
          color: black;
          border: none;
        }
        .primary-btn:hover {
          background: #10b981;
          box-shadow: 0 15px 35px -10px rgba(52, 211, 153, 0.5);
        }
        .secondary-btn {
          background: transparent;
          color: white;
          border: 2px solid #777;
        }
        .secondary-btn:hover {
          border-color: #fff;
          background: rgba(255,255,255,0.08);
        }

        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.85rem;
          letter-spacing: 2px;
          opacity: 0.7;
        }

        /* Other Sections */
        .section { padding: 100px 0; }
        .section-container { max-width: 1280px; margin: 0 auto; padding: 0 1.5rem; }
        .section-title {
          font-size: clamp(2.2rem, 6vw, 3.2rem);
          font-weight: 700;
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(90deg, #34d399, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .grid { display: grid; gap: 1.8rem; }
        .team-grid, .services-grid { grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); }
        .process-grid { grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); }
        .portfolio-grid { grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); }

        .card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 22px;
          padding: 2rem 1.6rem;
          transition: all 0.5s;
        }
        .card:hover {
          transform: translateY(-12px);
          border-color: #34d399;
          box-shadow: 0 25px 50px -15px rgba(52,211,153,0.25);
        }

        .process-card { text-align: center; }
        .step-number {
          width: 55px;
          height: 55px;
          background: #34d399;
          color: black;
          font-weight: bold;
          font-size: 1.4rem;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        .portfolio-card { overflow: hidden; border-radius: 22px; }
        .portfolio-card img { width: 100%; height: 220px; object-fit: cover; }
        .portfolio-info { padding: 1.6rem; }

        .contact-section {
          background: linear-gradient(135deg, #0a0f1c, #1a2338);
          padding: 120px 0;
        }
        .contact-container {
          max-width: 720px;
          margin: 0 auto;
          text-align: center;
          padding: 0 1.5rem;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 1rem;
          margin-top: 3rem;
        }
        .email-input {
          padding: 1.2rem 1.8rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
        }
        .submit-btn {
          padding: 1.2rem 3rem;
          background: #34d399;
          color: black;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
        }

        .footer {
          text-align: center;
          padding: 3rem 1rem 2rem;
          color: #777;
          font-size: 0.95rem;
        }

        /* Desktop Enhancements */
        @media (min-width: 768px) {
          .nav-links.desktop { display: flex; }
          .cta-button.desktop { display: block; }
          .hamburger { display: none; }

          .hero-buttons { flex-direction: row; justify-content: center; }
          .primary-btn, .secondary-btn { width: auto; max-width: none; }

          .contact-form { flex-direction: row; }
          .email-input { flex: 1; }
        }

        @media (min-width: 1024px) {
          .section { padding: 140px 0; }
          .hero { padding: 120px 0 100px; }
        }
      `}</style>
    </div>
  );
}