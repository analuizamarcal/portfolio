import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

import timelineData from "../data/timelineData";
import './TimelineDynamic.css';

const TimelineDynamic = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const phase = timelineData[currentIndex];

  const nextPhase = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % timelineData.length);
  };

  const prevPhase = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + timelineData.length) % timelineData.length);
  };

  return (
    <section className="timeline-dynamic">
      <h3 className="about-section-title">Minha trajetória até aqui</h3>
      <div className="timeline-buttons">
        <button onClick={prevPhase}>
          <FiChevronLeft size={24} />
        </button>
        <button onClick={nextPhase}>
          <FiChevronRight size={24} />
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          className="timeline-content"
          initial={{ opacity: 0, x: direction > 0 ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -50 : 50 }}
          transition={{ duration: 0.4 }}
        >
          <img src={phase.image} alt={phase.title} className="timeline-img" />
          <div className="timeline-text">
            <h4>{phase.title}</h4>
            <p>{phase.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
        <div className="timeline-indicators">
            {timelineData.map((_, index) => (
                <span
                key={index}
                className={`dot ${index === currentIndex ? 'active' : ''}`}
                onClick={() => setCurrentIndex(index)}
                />
            ))}
        </div>
    </section>
  );
};

export default TimelineDynamic;
