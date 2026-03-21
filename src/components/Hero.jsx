import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiGithub, FiLinkedin, FiMail, FiDownload } from 'react-icons/fi';
import heroImg from '../assets/hero.png';
import './Hero.css';

const floatingStickers = [
  { emoji: '🤖', top: '15%', left: '8%', delay: 0 },
  { emoji: '⚡', top: '20%', right: '10%', delay: 0.5 },
  { emoji: '🔥', bottom: '30%', left: '5%', delay: 1 },
  { emoji: '💻', top: '60%', right: '6%', delay: 0.3 },
  { emoji: '🚀', bottom: '20%', right: '15%', delay: 0.8 },
  { emoji: '⭐', top: '40%', left: '3%', delay: 1.2 },
  { emoji: '🎯', bottom: '40%', right: '3%', delay: 0.6 },
  { emoji: '💡', top: '75%', left: '12%', delay: 0.2 },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Animated BG Orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Grid overlay */}
      <div className="grid-overlay" />

      {/* Floating stickers */}
      {floatingStickers.map((s, i) => (
        <motion.div
          key={i}
          className="floating-sticker"
          style={{ top: s.top, left: s.left, right: s.right, bottom: s.bottom }}
          animate={{ y: [0, -15, 0], rotate: [0, 5, -5, 0] }}
          transition={{ duration: 3 + i * 0.4, repeat: Infinity, delay: s.delay, ease: 'easeInOut' }}
        >
          {s.emoji}
        </motion.div>
      ))}

      <div className="hero-inner">
        <div className="hero-content">
          <motion.div
            className="hero-badge"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="badge-dot" />
            Available for opportunities
          </motion.div>

          <motion.h1
            className="hero-name"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Hi, I'm <span className="name-highlight">Aniket</span> 👋
          </motion.h1>

          <motion.div
            className="hero-title"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TypeAnimation
              sequence={[
                'Android Developer 🤖',
                2000,
                'Java Enthusiast ☕',
                2000,
                'An Engineer🔥',
                2000,
                'Built To Scale 🔥',
                2000,
                'Open Source Builder 🚀',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>

          <motion.p
            className="hero-desc"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Computer Engineering student at <strong>AISSMS COE, Pune</strong> crafting{' '}
            <span className="gradient-text">production-grade Android apps</span> that scale to thousands of users.
            From elegant UI to robust backends — I build it all. 💪
          </motion.p>

          <motion.div
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="stat">
              <span className="stat-num">1K+</span>
              <span className="stat-label">Active Users</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">8.67</span>
              <span className="stat-label">CGPA</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Awards Won</span>
            </div>
            <div className="stat-divider" />
            <div className="stat">
              <span className="stat-num">99.5%</span>
              <span className="stat-label">Crash-Free</span>
            </div>
          </motion.div>

          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <a href="#projects" className="btn-primary">
              View Projects 🚀
            </a>
            <a href="#contact" className="btn-outline">
              Contact Me 📬
            </a>
            <a
              href="https://drive.google.com/file/d/1pfngAkjj9wEoxoaHJaRRJ_XVznEg8sfh/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-resume"
            >
              <FiDownload /> View Resume
            </a>
          </motion.div>

          <motion.div
            className="hero-socials"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            {[
              { icon: <FiGithub />, href: 'https://github.com/aniketrc1', label: 'GitHub' },
              { icon: <FiLinkedin />, href: 'www.linkedin.com/in/aniket-chavan-b87853281', label: 'LinkedIn' },
              { icon: <FiMail />, href: 'mailto:aniketrchavan1@gmail.com', label: 'Email' },
            ].map((s) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-btn"
                aria-label={s.label}
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Hero Image */}
        <motion.div
          className="hero-image-side"
          initial={{ opacity: 0, x: 60, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <div className="hero-img-glow" />
          <motion.img
            src={heroImg}
            alt="Aniket Chavan"
            className="hero-img"
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.div>
      </div>

      <div className="scroll-indicator">
        <motion.div
          className="scroll-dot"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
      </div>
    </section>
  );
}
