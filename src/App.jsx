import React from 'react'

function App() {
  return (
    <div className="container">
      <header className="navbar">
        <h1>Oracle Digital Service</h1>
        <nav>
          <a href="#">Home</a>
          <a href="#">Services</a>
          <a href="#">Portfolio</a>
          <a href="#">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <h2>We Build Modern Apps & Websites</h2>
        <p>
          Oracle Digital Service is a tech agency focused on building scalable
          web applications, mobile apps, and digital solutions for businesses.
        </p>
        <button>Get Started</button>
      </section>

      <section className="services">
        <h2>Our Services</h2>
        <div className="grid">
          <div className="card">
            <h3>Web Development</h3>
            <p>Modern responsive websites and web apps.</p>
          </div>
          <div className="card">
            <h3>Mobile Apps</h3>
            <p>Android & iOS applications for startups and companies.</p>
          </div>
          <div className="card">
            <h3>UI/UX Design</h3>
            <p>Clean and user-friendly product design.</p>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <h2>Recent Projects</h2>
        <p>We have built several digital products for clients worldwide.</p>
      </section>

      <footer className="footer">
        <p>© 2026 Oracle Digital Service. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
