import React, { useRef } from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.9, ease: "easeOut" } 
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function OracleDigitalService() {
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
  };

  return (
    <div className="oracle-app">
      {/* Animated Background */}
      <div className="background">
        <div className="glow1"></div>
        <div className="glow2"></div>
        <div className="glow3"></div>
      </div>

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">
            {/* <span className="logo-icon">Oracle</span> */}
            Oracle<span className="dot">digitalservice</span>
          </div>

          <div className="nav-links">
            {Object.keys(sections).map((key) => (
              <button
                key={key}
                onClick={() => scrollTo(sections[key])}
                className="nav-link"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </button>
            ))}
          </div>

          <button 
            onClick={() => scrollTo(sections.contact)}
            className="cta-button"
          >
            Start Project
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section ref={sections.home} className="hero">
        <div className="hero-content">
          <motion.div
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="hero-text"
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
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo(sections.contact)}
                className="primary-btn"
              >
                Launch Your Project
              </motion.button>
              
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => scrollTo(sections.portfolio)}
                className="secondary-btn"
              >
                See Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>

        <div className="scroll-indicator">
          SCROLL TO EXPLORE
        </div>
      </section>

      {/* TEAM SECTION */}
      <section ref={sections.team} className="section team-section">
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
            className="team-grid"
          >
            {[
              "UI/UX Designers",
              "Frontend Engineers",
              "Backend & Cloud Architects",
              "Mobile Specialists",
              "AI & Automation Experts",
              "DevOps & QA",
              "Product Strategists",
              "Creative Technologists"
            ].map((role, index) => (
              <motion.div 
                key={index}
                variants={fadeUp}
                whileHover={{ y: -15 }}
                className="team-card"
              >
                <h3>{role}</h3>
                <p>World-class talent delivering pixel-perfect, battle-tested solutions.</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES SECTION */}
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

          <div className="services-grid">
            {["Web Platforms", "Mobile Apps", "SaaS Systems", "Enterprise Software", "Startup MVPs", "AI & Automation"].map((service, i) => (
              <motion.div 
                key={i}
                variants={fadeUp}
                whileHover={{ scale: 1.05 }}
                className="service-card"
              >
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
          
          <div className="process-grid">
            {["Research", "Design", "Development", "Launch & Scale"].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.08 }}
                className="process-card"
              >
                <div className="step-number">{i + 1}</div>
                <h3>{step}</h3>
                <p>Structured and efficient delivery</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section ref={sections.portfolio} className="section portfolio-section">
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

          <div className="portfolio-grid">
            {[
              { title: "Fintech Dashboard", img: "https://picsum.photos/id/1015/600/400" },
              { title: "Mobile Banking App", img: "https://picsum.photos/id/106/600/400" },
              { title: "SaaS Analytics Platform", img: "https://picsum.photos/id/201/600/400" }
            ].map((project, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.04 }}
                className="portfolio-card"
              >
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
          <motion.div 
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
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
          overflow-x: hidden;
        }

        /* Background */
        .background {
          position: fixed;
          inset: 0;
          z-index: -1;
          background: #070b14;
        }
        .glow1, .glow2, .glow3 {
          position: absolute;
          border-radius: 50%;
          filter: blur(120px);
          opacity: 0.15;
          animation: pulse 25s infinite alternate ease-in-out;
        }
        .glow1 {
          width: 800px;
          height: 800px;
          background: #34d399;
          top: -200px;
          left: -200px;
        }
        .glow2 {
          width: 700px;
          height: 700px;
          background: #3b82f6;
          bottom: -150px;
          right: -150px;
          animation-delay: 8s;
        }
        .glow3 {
          width: 500px;
          height: 500px;
          background: #fbbf24;
          top: 40%;
          left: 40%;
          animation-delay: 15s;
        }
        @keyframes pulse {
          0% { transform: scale(1); }
          100% { transform: scale(1.15); }
        }

        /* Navbar */
        .navbar {
          position: fixed;
          top: 0;
          width: 100%;
          background: rgba(7, 11, 20, 0.85);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(255,255,255,0.08);
          z-index: 1000;
        }
        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-size: 1.8rem;
          font-weight: 700;
          letter-spacing: -1px;
        }
        .logo-icon {
          color: #34d399;
          margin-right: 4px;
        }
        .dot { color: #34d399; }
        .nav-links {
          display: none;
          gap: 2.5rem;
          font-size: 1.05rem;
        }
        .nav-link {
          background: none;
          border: none;
          color: #ccc;
          cursor: pointer;
          transition: color 0.3s;
        }
        .nav-link:hover {
          color: white;
        }
        .cta-button {
          background: white;
          color: black;
          border: none;
          padding: 0.75rem 1.8rem;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s;
        }
        .cta-button:hover {
          background: #34d399;
          color: white;
          transform: translateY(-2px);
        }

        /* Responsive Nav */
        @media (min-width: 768px) {
          .nav-links { display: flex; }
        }

        /* Hero */
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          background: linear-gradient(135deg, #0a0f1c 0%, #070b14 100%);
        }
        .hero-content {
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 2rem;
          text-align: center;
        }
        .badge {
          display: inline-block;
          padding: 8px 20px;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(52, 211, 153, 0.3);
          border-radius: 50px;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }
        .hero-title {
          font-size: clamp(2.8rem, 8vw, 5.5rem);
          font-weight: 800;
          line-height: 1.05;
          letter-spacing: -2px;
          margin-bottom: 1.5rem;
        }
        .highlight {
          background: linear-gradient(90deg, #34d399, #60a5fa, #fbbf24);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .hero-subtitle {
          font-size: 1.35rem;
          max-width: 680px;
          margin: 0 auto 3rem;
          color: #aaa;
          line-height: 1.5;
        }
        .hero-buttons {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }
        .primary-btn, .secondary-btn {
          padding: 1rem 2.5rem;
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
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -10px rgba(52, 211, 153, 0.4);
        }
        .secondary-btn {
          background: transparent;
          color: white;
          border: 2px solid #666;
        }
        .secondary-btn:hover {
          border-color: white;
          background: rgba(255,255,255,0.05);
        }

        /* Scroll Indicator */
        .scroll-indicator {
          position: absolute;
          bottom: 40px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 0.85rem;
          letter-spacing: 3px;
          opacity: 0.6;
        }

        /* Sections */
        .section {
          padding: 120px 0;
        }
        .section-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 2rem;
        }
        .section-title {
          font-size: 3.2rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 4rem;
          background: linear-gradient(90deg, #34d399, #60a5fa);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Team & Services Grid */
        .team-grid, .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.8rem;
        }
        .team-card, .service-card {
          background: rgba(255,255,255,0.06);
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          padding: 2.2rem 1.8rem;
          transition: all 0.5s ease;
        }
        .team-card:hover, .service-card:hover {
          transform: translateY(-15px);
          border-color: #34d399;
          box-shadow: 0 25px 50px -15px rgba(52, 211, 153, 0.25);
        }

        /* Process */
        .process-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
          gap: 2rem;
        }
        .process-card {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          padding: 2.5rem 1.5rem;
          border-radius: 20px;
          text-align: center;
          transition: all 0.4s;
        }
        .step-number {
          width: 50px;
          height: 50px;
          background: #34d399;
          color: black;
          font-weight: bold;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
        }

        /* Portfolio */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
          gap: 2rem;
        }
        .portfolio-card {
          border-radius: 20px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          transition: all 0.5s;
        }
        .portfolio-card img {
          width: 100%;
          height: 240px;
          object-fit: cover;
        }
        .portfolio-info {
          padding: 1.8rem;
        }

        /* Contact */
        .contact-section {
          background: linear-gradient(135deg, #0a0f1c, #1a2338);
          padding: 140px 0;
        }
        .contact-container {
          max-width: 700px;
          margin: 0 auto;
          text-align: center;
          padding: 0 1.5rem;
        }
        .contact-title {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        .contact-form {
          display: flex;
          gap: 1rem;
          margin-top: 3rem;
          flex-wrap: wrap;
          justify-content: center;
        }
        .email-input {
          flex: 1;
          min-width: 280px;
          padding: 1.1rem 1.8rem;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 50px;
          color: white;
          font-size: 1.05rem;
        }
        .submit-btn {
          padding: 1.1rem 3rem;
          background: #34d399;
          color: black;
          border: none;
          border-radius: 50px;
          font-weight: 600;
          cursor: pointer;
        }

        .footer {
          text-align: center;
          padding: 3rem 1rem;
          color: #666;
          font-size: 0.95rem;
        }

        /* Mobile Responsiveness */
        @media (max-width: 768px) {
          .nav-container {
            padding: 1rem 1.5rem;
          }
          .hero-title {
            font-size: 2.8rem;
          }
          .section {
            padding: 80px 0;
          }
          .hero-buttons {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}