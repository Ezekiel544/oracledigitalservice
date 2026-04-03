import React, { useRef } from "react";
import { motion } from "framer-motion";
import "./style.css";
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function App() {
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
    <div className="bg-[#070b14] text-white font-sans overflow-x-hidden">
      {/* Animated background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute w-[600px] h-[600px] bg-emerald-500/20 blur-[120px] top-[-100px] left-[-100px] animate-pulse" />
        <div className="absolute w-[600px] h-[600px] bg-blue-500/20 blur-[120px] bottom-[-100px] right-[-100px] animate-pulse" />
        <div className="absolute w-[400px] h-[400px] bg-amber-400/10 blur-[100px] top-[40%] left-[30%]" />
      </div>

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-xl border-b border-white/5 z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl font-bold tracking-wide text-emerald-400">
            Oracle Digital Service
          </h1>

          <nav className="hidden md:flex gap-8 text-sm">
            {Object.entries(sections).map(([key, ref]) => (
              <button
                key={key}
                onClick={() => scrollTo(ref)}
                className="relative group"
              >
                {key.charAt(0).toUpperCase() + key.slice(1)}
                <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-emerald-400 transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section
        ref={sections.home}
        className="min-h-screen flex items-center justify-center text-center px-6 pt-24"
      >
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          className="max-w-4xl"
        >
          <h2 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-r from-emerald-400 via-blue-400 to-amber-300 bg-clip-text text-transparent">
            Building Elite Digital Products
          </h2>

          <p className="mt-6 text-gray-300 text-lg">
            We design, engineer, and scale modern web platforms, mobile apps,
            and enterprise systems with world-class technology teams.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => scrollTo(sections.contact)}
              className="px-8 py-3 bg-emerald-500 rounded-xl hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20"
            >
              Start a Project
            </button>

            <button
              onClick={() => scrollTo(sections.services)}
              className="px-8 py-3 border border-emerald-400 rounded-xl hover:bg-emerald-500/10 transition"
            >
              Explore Services
            </button>
          </div>
        </motion.div>
      </section>

      {/* TECH TEAM */}
      <section ref={sections.team} className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Elite Tech Team
          </motion.h3>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              "UI/UX Designers",
              "Frontend Engineers",
              "Backend Engineers",
              "Mobile App Developers",
              "Cloud Engineers",
              "DevOps Engineers",
              "Product Managers",
              "QA Engineers",
            ].map((role, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                whileHover={{ scale: 1.05, rotate: 1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 hover:border-emerald-400/40 transition"
              >
                <h4 className="text-lg font-semibold">{role}</h4>
                <p className="text-gray-400 mt-2 text-sm">
                  High performance technology professionals.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section ref={sections.services} className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            What We Build
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              "Web Platforms",
              "Mobile Apps",
              "SaaS Systems",
              "Enterprise Software",
              "Startup MVPs",
              "Automation & AI",
            ].map((service, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                whileHover={{ y: -12 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-lg p-8 rounded-2xl border border-white/10 hover:border-emerald-400/40"
              >
                <h4 className="text-xl font-semibold">{service}</h4>
                <p className="text-gray-400 mt-3">
                  Scalable and secure modern technology solutions.
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section ref={sections.process} className="py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h3
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-bold mb-12"
          >
            Our Process
          </motion.h3>

          <div className="grid md:grid-cols-4 gap-6">
            {["Research", "Design", "Development", "Launch"].map(
              (step, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 bg-white/5 backdrop-blur-lg border border-white/10 rounded-xl"
                >
                  <h4 className="text-xl font-semibold">{step}</h4>
                  <p className="text-gray-400 mt-2">
                    Structured and efficient delivery process
                  </p>
                </motion.div>
              )
            )}
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section ref={sections.portfolio} className="py-24 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-12">Our Work</h3>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Fintech Dashboard",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "Mobile Banking App",
                img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=1200&auto=format&fit=crop",
              },
              {
                title: "SaaS Analytics Platform",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
              },
            ].map((project, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="rounded-2xl overflow-hidden bg-white/5 border border-white/10 hover:border-emerald-400/40"
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-56 w-full object-cover"
                />

                <div className="p-6 text-left">
                  <h4 className="text-xl font-semibold">
                    {project.title}
                  </h4>
                  <p className="text-gray-400 mt-2 text-sm">
                    High-end scalable digital solution built by Oracle Digital
                    Service engineers.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section ref={sections.contact} className="py-24 px-6 text-center">
        <h3 className="text-4xl font-bold">Start Your Project</h3>
        <p className="text-gray-400 mt-4">
          Let’s build something world-class together
        </p>

        <div className="mt-8 max-w-xl mx-auto">
          <input
            type="email"
            placeholder="Your email"
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10"
          />
          <button className="mt-4 w-full py-4 bg-emerald-500 rounded-xl hover:bg-emerald-600 transition shadow-lg shadow-emerald-500/20">
            Contact Us
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-6 text-center border-t border-white/10">
        <p className="text-gray-400">© 2026 Oracle Digital Service</p>
      </footer>
    </div>
  );
}
