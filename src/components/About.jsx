import { motion } from 'framer-motion';
import logo from '../assets/logo.jpg';
import './About.css';

const funFacts = [
  { emoji: '📱', label: 'Apps Built', value: '3+' },
  { emoji: '👥', label: 'Active Users', value: '1K+' },
  { emoji: '🏆', label: 'Competitions Won', value: '3' },
  { emoji: '☕', label: 'Lines of Java', value: '∞' },
];

export default function About() {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">About Me 👨‍💻</h2>
          <p className="section-subtitle">The story behind the code</p>
        </motion.div>

        <div className="about-grid">
          {/* Avatar side */}
          <motion.div
            className="about-avatar-side"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="avatar-wrapper">
              <div className="avatar-glow" />
              <img src={logo} alt="Aniket Chavan" className="about-logo" />
              <motion.div
                className="avatar-ring"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              />
              {/* sticker badges */}
              <motion.div
                className="badge-sticker gdg"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <span>🤖</span> GDG Android Lead
              </motion.div>
              <motion.div
                className="badge-sticker student"
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 0.3 }}
              >
                <span>🎓</span> AISSMS COE
              </motion.div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            className="about-text-side"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="about-greeting">
              Hey there! I'm <span className="gradient-text">Aniket Chavan</span> 🚀
            </h3>

            <p className="about-para">
              I'm a <strong>Computer Engineering student</strong> at AISSMS College of Engineering, Pune,
              with a passion for building Android apps that real people use every day.
              My flagship app <strong>Diploma2Degree</strong> has crossed <strong>1,000+ active users</strong>{' '}
              on the Play Store — that's real impact! 🎉
            </p>

            <p className="about-para">
              I serve as the <strong>Android Lead at Google Developer Groups (GDG)</strong> on campus,
              where I mentor fellow students and organize Android development workshops.
              I thrive at the intersection of <span className="gradient-text">elegant UI</span>,{' '}
              <span className="gradient-text">robust backend</span>, and{' '}
              <span className="gradient-text">smart monetization</span>.
            </p>

            <p className="about-para">
              When I'm not coding, you'll find me competing in coding competitions 🏆 (and winning!),
              exploring new Android features, or mentoring peers on Firebase & Java best practices.
            </p>

            <div className="about-facts">
              {funFacts.map((f, i) => (
                <motion.div
                  key={i}
                  className="glass-card fact-card"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ scale: 1.06, y: -4 }}
                >
                  <span className="fact-emoji">{f.emoji}</span>
                  <span className="fact-value">{f.value}</span>
                  <span className="fact-label">{f.label}</span>
                </motion.div>
              ))}
            </div>

            <div className="about-actions">
              <a href="#contact" className="btn-primary">Hire Me 🚀</a>
              <a href="#projects" className="btn-outline">See Projects →</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
