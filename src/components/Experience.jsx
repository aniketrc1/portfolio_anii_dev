import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiMapPin } from 'react-icons/fi';
import aissmsLogo from '../assets/aissms.png';
import iitLogo from '../assets/iit.png';
import tlogic from '../assets/tlogic.png'
import './Experience.css';

const experiences = [
  {
    role: 'Android Developer Intern',
    company: 'Tlogic',
    period: 'June 2025 – July 2025',
    location: 'Remote',
    logo: tlogic,
    color: '#00d4ff',
    responsibilities: [
      'Developed Android application features using Java and Android SDK, focusing on clean UI and smooth user experience',
      'Integrated backend services and APIs, ensuring reliable data handling and real-time updates',
      'Identified and fixed UI and performance issues through debugging and testing on multiple Android devices',
    ],
  },
];

const education = [
  {
    degree: 'Bachelor of Engineering – Computer Engineering',
    school: 'AISSMS COE, Pune',
    period: 'Aug 2024 – Present',
    score: 'CGPA: 8.67 / 10',
    logo: aissmsLogo,
    color: '#7c3aed',
  },
  {
    degree: 'Diploma – Computer Engineering',
    school: 'Indira Institute of Technology, Nanded',
    period: '2021 – 2024',
    score: '89.94%',
    logo: iitLogo,
    color: '#ec4899',
  },
];

const achievements = [
  { title: 'Android Lead', org: 'GDG AISSMS COE, Pune', period: '2025 – Present', emoji: '🏅', color: '#00d4ff' },
  { title: '1st Prize – Mirror Coding', org: 'Competitive Programming Competition', period: '2024', emoji: '🥇', color: '#fbbf24' },
  { title: '1st Prize – Codera', org: 'Algorithmic Coding Competition', period: '2024', emoji: '🥇', color: '#fbbf24' },
  { title: '2nd Prize – Tech-War Coders Mania', org: 'Inter-college Coding Competition', period: '2024', emoji: '🥈', color: '#94a3b8' },
];

export default function Experience() {
  return (
    <section id="experience" className="section exp-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">Journey & Achievements 🗺️</h2>
          <p className="section-subtitle">Experience, education, and awards that shaped me</p>
        </motion.div>

        {/* Experience */}
        <div className="exp-block">
          <motion.h3
            className="block-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <FiBriefcase /> Work Experience
          </motion.h3>
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              className="glass-card timeline-card"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{ '--accent': exp.color }}
            >
              <div className="timeline-dot" style={{ background: exp.color, boxShadow: `0 0 15px ${exp.color}80`, overflow: 'hidden', padding: 0 }}>
                <img src={exp.logo} alt={exp.company} style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '4px' }} />
              </div>
              <div className="timeline-content">
                <div className="timeline-header">
                  <div>
                    <h4 className="timeline-role" style={{ color: exp.color }}>{exp.role}</h4>
                    <p className="timeline-company">{exp.company}</p>
                  </div>
                  <div className="timeline-meta">
                    <span><FiCalendar size={12} /> {exp.period}</span>
                    <span><FiMapPin size={12} /> {exp.location}</span>
                  </div>
                </div>
                <ul className="timeline-bullets">
                  {exp.responsibilities.map((r, ri) => (
                    <li key={ri}>{r}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <div className="exp-block">
          <motion.h3
            className="block-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            🎓 Education
          </motion.h3>
          <div className="edu-grid">
            {education.map((edu, i) => (
              <motion.div
                key={i}
                className="glass-card edu-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                style={{ '--accent': edu.color }}
              >
                <div className="edu-logo-wrap" style={{ borderColor: edu.color + '40', background: edu.color + '08' }}>
                  <img src={edu.logo} alt={edu.school} className="edu-logo-img" />
                </div>
                <div className="edu-info">
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-school" style={{ color: edu.color }}>{edu.school}</p>
                  <div className="edu-meta">
                    <span>{edu.period}</span>
                    <span className="edu-score">{edu.score}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="exp-block">
          <motion.h3
            className="block-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            🏆 Achievements
          </motion.h3>
          <div className="achievements-grid">
            {achievements.map((ach, i) => (
              <motion.div
                key={i}
                className="glass-card ach-card"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                whileHover={{ scale: 1.04, y: -4 }}
              >
                <motion.span
                  className="ach-emoji"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                >
                  {ach.emoji}
                </motion.span>
                <h4 className="ach-title" style={{ color: ach.color }}>{ach.title}</h4>
                <p className="ach-org">{ach.org}</p>
                <span className="ach-period">{ach.period}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
