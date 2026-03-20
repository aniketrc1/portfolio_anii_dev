import { motion } from 'framer-motion';
import { FiMail, FiPhoneCall, FiMapPin, FiGithub, FiLinkedin, FiSend } from 'react-icons/fi';
import './Contact.css';

const contactInfo = [
  { icon: <FiMail size={22} />, label: 'Email', value: 'aniketrchavan1@gmail.com', href: 'mailto:aniketrchavan1@gmail.com', color: '#00d4ff' },
  { icon: <FiPhoneCall size={22} />, label: 'Phone', value: '+91 87678 84789', href: 'tel:+918767884789', color: '#7c3aed' },
  { icon: <FiMapPin size={22} />, label: 'Location', value: 'Pune, India 🇮🇳', href: '#', color: '#ec4899' },
  { icon: <FiGithub size={22} />, label: 'GitHub', value: 'github.com/aniket', href: 'https://github.com', color: '#10b981' },
  { icon: <FiLinkedin size={22} />, label: 'LinkedIn', value: 'Aniket Chavan', href: 'https://linkedin.com', color: '#0ea5e9' },
];

export default function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Let's Connect 🤝</h2>
          <p className="section-subtitle">Have a project in mind? I'd love to work with you!</p>
        </motion.div>

        <div className="contact-grid">
          {/* Info side */}
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card info-card">
              <h3 className="info-heading">
                <motion.span
                  animate={{ rotate: [0, 20, -20, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ display: 'inline-block' }}
                >
                  👋
                </motion.span>{' '}
                Get in Touch
              </h3>
              <p className="info-text">
                I'm currently open to <strong>internships</strong>, <strong>freelance projects</strong>, and <strong>collaborations</strong>.
                Whether it's a production Android app or a quick consultation — let's chat!
              </p>

              <div className="contact-links">
                {contactInfo.map((c, i) => (
                  <motion.a
                    key={i}
                    href={c.href}
                    className="contact-link-item"
                    target={c.href.startsWith('http') ? '_blank' : '_self'}
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    whileHover={{ x: 6 }}
                  >
                    <span className="contact-icon" style={{ color: c.color, background: c.color + '15', border: `1px solid ${c.color}30` }}>
                      {c.icon}
                    </span>
                    <div>
                      <p className="ci-label">{c.label}</p>
                      <p className="ci-value" style={{ color: c.color }}>{c.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* CTA side */}
          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="glass-card cta-card">
              <div className="cta-icon-wrap">
                <motion.div
                  className="cta-big-icon"
                  animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  🤖
                </motion.div>
                <div className="cta-rings">
                  <div className="ring ring-1" />
                  <div className="ring ring-2" />
                  <div className="ring ring-3" />
                </div>
              </div>

              <h3 className="cta-heading">Ready to build something amazing?</h3>
              <p className="cta-text">
                I bring production-grade Android development experience with real users, real payments, and real Firebase scale.
              </p>

              <div className="cta-badges">
                {['Android Lead @ GDG', '1000+ Users', '8.67 CGPA', '99.5% Crash-Free'].map((b) => (
                  <motion.span
                    key={b}
                    className="cta-badge"
                    whileHover={{ scale: 1.08 }}
                  >
                    ✅ {b}
                  </motion.span>
                ))}
              </div>

              <motion.a
                href="mailto:aniketrchavan1@gmail.com"
                className="btn-primary cta-btn"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <FiSend /> Send Me an Email 🚀
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="footer">
        <p>Made with <span className="heart">❤️</span> by <strong>Aniket Chavan</strong> · Android Developer · Pune, India 🇮🇳</p>
        <p className="footer-sub">© 2025 All rights reserved</p>
      </div>
    </section>
  );
}
