import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function PlantDecoration() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  const opacity1 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3, 0]);
  const opacity2 = useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.25, 0]);

  const plants = [
    { emoji: '🌿', delay: 0, position: 'top-[10%]', location: 'left-[5%]', size: 'text-6xl' },
    { emoji: '🍃', delay: 0.2, position: 'top-[25%]', location: 'right-[3%]', size: 'text-5xl' },
    { emoji: '🌱', delay: 0.4, position: 'bottom-[30%]', location: 'left-[8%]', size: 'text-4xl' },
    { emoji: '🌿', delay: 0.6, position: 'bottom-[15%]', location: 'right-[5%]', size: 'text-5xl' },
    { emoji: '🍃', delay: 0.8, position: 'top-[50%]', location: 'left-[2%]', size: 'text-4xl' },
    { emoji: '🌱', delay: 1, position: 'top-[65%]', location: 'right-[8%]', size: 'text-5xl' },
    { emoji: '🌿', delay: 1.2, position: 'bottom-[50%]', location: 'left-[12%]', size: 'text-4xl' },
    { emoji: '🍃', delay: 1.4, position: 'top-[40%]', location: 'right-[2%]', size: 'text-5xl' },
    { emoji: '🌱', delay: 1.6, position: 'bottom-[10%]', location: 'right-[12%]', size: 'text-4xl' },
    { emoji: '🌿', delay: 1.8, position: 'top-[75%]', location: 'left-[15%]', size: 'text-5xl' },
  ];

  return (
    <div ref={ref} className="pointer-events-none fixed inset-0 overflow-hidden">
      {plants.map((plant, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{
            delay: plant.delay * 0.15,
            duration: 1.5,
            ease: 'easeOut',
          }}
          style={{
            y: index % 2 === 0 ? y1 : y2,
            rotate: index % 3 === 0 ? rotate1 : rotate2,
            opacity: index < 4 ? opacity1 : opacity2,
          }}
          className={`pointer-events-none fixed ${plant.position} ${plant.location} ${plant.size} mix-blend-multiply hover:scale-110 transition-transform duration-300`}
          whileHover={{ scale: 1.15, rotate: 5 }}
        >
          {plant.emoji}
        </motion.div>
      ))}
    </div>
  );
}
