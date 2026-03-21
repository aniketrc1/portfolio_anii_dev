import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub } from 'react-icons/fi';
import diploma2degreeImg from '../assets/Diploma2Degree.jpeg';
import bulkEmailImg from '../assets/Automated Bulk Email Sender.jpg';
import farmerLeaseImg from '../assets/Farmer Lease Management.jpg';
import './Projects.css';

const projects = [
  {
    title: 'Diploma2Degree',
    emoji: '🎓',
    image: diploma2degreeImg,
    type: 'Production Android App',
    description: 'Production Android application serving 1,000+ active users with a subscription-based monetization model. 99.5% crash-free sessions achieved through Firebase Crashlytics.',
    highlights: [
      '1,000+ active users on Play Store',
      'Razorpay payment gateway integration',
      'Firebase Realtime Database + Firestore',
      '99.5% crash-free sessions',
    ],
    tags: ['Android', 'Java', 'Firebase', 'Razorpay'],
    color: '#00d4ff',
    links: [
      { label: 'Website', icon: <FiExternalLink />, href: 'https://diploma2degree.co.in/' },
      { label: 'Play Store', icon: <FiExternalLink />, href: 'https://play.google.com/store/apps/details?id=com.d2d.diploma2degree&pcampaignid=web_share' },
    ],
    sticker: '🚀',
  },
  {
    title: 'Automated Bulk Email Sender',
    emoji: '📧',
    image: bulkEmailImg,
    type: 'Android App',
    description: 'Android app for scheduling and sending bulk emails with 95% delivery success rate. Multi-threaded email processing handling 100+ concurrent operations efficiently.',
    highlights: [
      '95% delivery success rate',
      '100+ concurrent email operations',
      'Java Executors multi-threading',
      '60% faster task completion',
    ],
    tags: ['Android', 'Java', 'SMTP', 'JavaMail API'],
    color: '#7c3aed',
    links: [{ label: 'GitHub', icon: <FiGithub />, href: '#' }],
    sticker: '⚡',
  },
  {
    title: 'Farmer Lease Management',
    emoji: '🌾',
    image: farmerLeaseImg,
    type: 'Full-Stack Web App',
    description: 'Full-stack web application managing 200+ lease records with automated payment tracking and reminder system. MySQL optimization reduced response time by 50%.',
    highlights: [
      '200+ lease records managed',
      '50% query response time reduction',
      'RESTful APIs with SQL injection prevention',
      'Automated payment reminders',
    ],
    tags: ['PHP', 'MySQL', 'JavaScript', 'REST API'],
    color: '#ec4899',
    links: [{ label: 'GitHub', icon: <FiGithub />, href: '#' }],
    sticker: '🌟',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Featured Projects 💼</h2>
          <p className="section-subtitle">Production apps that make a real difference</p>
        </motion.div>

        <div className="projects-list">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              className="glass-card project-card"
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              style={{ '--accent': proj.color }}
            >
              <div className="project-left">
                <div className="project-logo-wrap" style={{ borderColor: proj.color + '40', background: proj.color + '08' }}>
                  <img src={proj.image} alt={proj.title} className="project-logo-img" />
                </div>

                <div className="project-meta">
                  <span className="project-type" style={{ color: proj.color, background: proj.color + '15', border: `1px solid ${proj.color}40` }}>
                    {proj.type}
                  </span>
                  <h3 className="project-name">{proj.title}</h3>
                  <p className="project-desc">{proj.description}</p>
                </div>
              </div>

              <div className="project-right">
                <div className="project-highlights">
                  {proj.highlights.map((h, hi) => (
                    <div key={hi} className="highlight-item">
                      <span className="highlight-dot" style={{ background: proj.color }} />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="project-tags">
                  {proj.tags.map((t) => (
                    <span key={t} className="tag project-tag" style={{ background: proj.color + '12', color: proj.color, border: `1px solid ${proj.color}30` }}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  {proj.links.map((l) => (
                    <motion.a
                      key={l.label}
                      href={l.href}
                      className="project-link-btn"
                      style={{ color: proj.color, borderColor: proj.color + '50' }}
                      whileHover={{ scale: 1.05, backgroundColor: proj.color + '15' }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {l.icon} {l.label}
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Glow bar */}
              <div className="project-glow" style={{ background: proj.color }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
