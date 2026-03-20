import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './Skills.css';

// Map skill names to their devicon SVG path inside /public/icons/
const iconMap = {
  'Android SDK':      '/icons/android/android-original.svg',
  'Android Studio':   '/icons/androidstudio/androidstudio-original.svg',
  'Java':             '/icons/java/java-original.svg',
  'Kotlin':           '/icons/kotlin/kotlin-original.svg',
  'Material Design':  '/icons/materialui/materialui-original.svg',
  'XML Layouts':      '/icons/xml/xml-original.svg',
  'Firebase':         '/icons/firebase/firebase-original.svg',
  'Firestore':        '/icons/firebase/firebase-original.svg',
  'Razorpay SDK':     null,
  'REST APIs':        '/icons/postman/postman-original.svg',
  'MySQL':            '/icons/mysql/mysql-original.svg',
  'PHP':              '/icons/php/php-original.svg',
  'Python':           '/icons/python/python-original.svg',
  'JavaScript':       '/icons/javascript/javascript-original.svg',
  'C++':              '/icons/cplusplus/cplusplus-original.svg',
  'Git & GitHub':     '/icons/git/git-original.svg',
  'HTML/CSS':         '/icons/html5/html5-original.svg',
  // badge-level extras
  'Android':          '/icons/android/android-original.svg',
  'Git':              '/icons/git/git-original.svg',
  'React':            '/icons/react/react-original.svg',
  'TypeScript':       '/icons/typescript/typescript-original.svg',
};

const skillCategories = [
  {
    title: 'Mobile Development',
    emoji: '📱',
    color: '#00d4ff',
    skills: [
      { name: 'Android SDK', level: 95 },
      { name: 'Java', level: 92 },
      { name: 'Kotlin', level: 75 },
      { name: 'Material Design', level: 90 },
      { name: 'Android Studio', level: 95 },
      { name: 'XML Layouts', level: 88 },
    ],
  },
  {
    title: 'Backend & Cloud',
    emoji: '☁️',
    color: '#7c3aed',
    skills: [
      { name: 'Firebase', level: 93 },
      { name: 'Razorpay SDK', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'MySQL', level: 80 },
      { name: 'PHP', level: 75 },
      { name: 'Firestore', level: 90 },
    ],
  },
  {
    title: 'Languages & Tools',
    emoji: '🛠️',
    color: '#ec4899',
    skills: [
      { name: 'Java', level: 92 },
      { name: 'Python', level: 78 },
      { name: 'JavaScript', level: 80 },
      { name: 'C++', level: 75 },
      { name: 'Git & GitHub', level: 90 },
      { name: 'HTML/CSS', level: 82 },
    ],
  },
];

function SkillBar({ name, level, color, index }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const icon = iconMap[name];

  return (
    <div ref={ref} className="skill-item">
      <div className="skill-info">
        <span className="skill-name">
          {icon && (
            <img
              src={icon}
              alt={name}
              className="skill-icon"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          )}
          {name}
        </span>
        <span className="skill-pct" style={{ color }}>{level}%</span>
      </div>
      <div className="skill-track">
        <motion.div
          className="skill-fill"
          style={{ background: `linear-gradient(90deg, ${color}, ${color}99)` }}
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1.2, delay: index * 0.1, ease: 'easeOut' }}
        />
      </div>
    </div>
  );
}

const techStickers = [
  '⚡', '🔥', '💡', '🎮', '🤖', '🔮', '💎', '🏆', '🌟', '⭐'
];

const techBadges = [
  { label: 'Android',        icon: '/icons/android/android-original.svg' },
  { label: 'Java',           icon: '/icons/java/java-original.svg' },
  { label: 'Firebase',       icon: '/icons/firebase/firebase-original.svg' },
  { label: 'Kotlin',         icon: '/icons/kotlin/kotlin-original.svg' },
  { label: 'Python',         icon: '/icons/python/python-original.svg' },
  { label: 'MySQL',          icon: '/icons/mysql/mysql-original.svg' },
  { label: 'PHP',            icon: '/icons/php/php-original.svg' },
  { label: 'Git',            icon: '/icons/git/git-original.svg' },
  { label: 'REST API',       icon: '/icons/postman/postman-original.svg' },
  { label: 'Razorpay',       icon: null },
  { label: 'Material Design',icon: '/icons/materialui/materialui-original.svg' },
  { label: 'MVVM',           icon: null },
];

export default function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="section-stickers">
            {techStickers.map((s, i) => (
              <motion.span
                key={i}
                className="mini-sticker"
                animate={{ y: [0, -8, 0], rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2 + i * 0.3, repeat: Infinity, delay: i * 0.2 }}
              >
                {s}
              </motion.span>
            ))}
          </div>
          <h2 className="section-title">Tech Arsenal 🛠️</h2>
          <p className="section-subtitle">My weapons of choice for building amazing apps</p>
        </motion.div>

        <div className="skills-grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={ci}
              className="glass-card skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="skill-card-header" style={{ borderColor: cat.color + '33' }}>
                <span className="cat-emoji">{cat.emoji}</span>
                <h3 style={{ color: cat.color }}>{cat.title}</h3>
              </div>
              <div className="skill-bars">
                {cat.skills.map((s, si) => (
                  <SkillBar key={si} {...s} color={cat.color} index={si} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tech badges with icons */}
        <motion.div
          className="tech-badges"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {techBadges.map(({ label, icon }) => (
            <motion.span
              key={label}
              className="tech-badge"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              {icon && (
                <img
                  src={icon}
                  alt={label}
                  className="badge-icon"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              )}
              {label}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
