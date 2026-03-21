import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import babyGif from '../assets/baby.webp';
import './StalkerModal.css';

export default function StalkerModal({ onClose }) {
  const [answer, setAnswer] = useState(null); // null | 'yes' | 'no'

  const handleYes = () => setAnswer('yes');
  const handleNo  = () => setAnswer('no');

  // Auto-close 1.5s after user picks an answer
  useEffect(() => {
    if (answer !== null) {
      const t = setTimeout(onClose, 1500);
      return () => clearTimeout(t);
    }
  }, [answer, onClose]);

  return (
    <div className="stalker-overlay">
      <motion.div
        className="stalker-modal"
        initial={{ scale: 0.5, opacity: 0, y: 60 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.5, opacity: 0, y: 60 }}
        transition={{ type: 'spring', stiffness: 260, damping: 22 }}
      >
        <AnimatePresence mode="wait">
          {answer === null && (
            <motion.div
              key="question"
              className="stalker-body"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
            >
              <img src={babyGif} alt="stalker baby" className="stalker-gif" />
              <h2 className="stalker-title">Are you stalking me? 👀</h2>
              <p className="stalker-sub">Choose wisely…</p>
              <div className="stalker-btns">
                <motion.button
                  className="stalker-btn yes"
                  onClick={handleYes}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                >
                  Yes 😏
                </motion.button>
                <motion.button
                  className="stalker-btn no"
                  onClick={handleNo}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.94 }}
                >
                  No 🙅
                </motion.button>
              </div>
            </motion.div>
          )}

          {answer === 'yes' && (
            <motion.div
              key="yes"
              className="stalker-body"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="stalker-result-emoji">🥰</div>
              <h2 className="stalker-title">Good  !</h2>
              <p className="stalker-sub">Enjoy the portfolio — you deserve it! 😄</p>
            </motion.div>
          )}

          {answer === 'no' && (
            <motion.div
              key="no"
              className="stalker-body"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="stalker-result-emoji">😐</div>
              <h2 className="stalker-title">Okay…</h2>
              <p className="stalker-sub">Sure sure, just "accidentally" here 😅</p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
