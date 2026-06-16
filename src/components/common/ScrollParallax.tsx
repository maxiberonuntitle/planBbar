import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollParallaxProps {
  children: ReactNode;
  offset?: [number, number];
  intensity?: number;
  className?: string;
}

export function ScrollParallax({
  children,
  offset = [-100, 100],
  intensity = 1,
  className = '',
}: ScrollParallaxProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [offset[0] * intensity, offset[1] * intensity]
  );

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div ref={ref} style={{ y, opacity }} className={className}>
      {children}
    </motion.div>
  );
}

interface FadeInOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function FadeInOnScroll({
  children,
  className = '',
  delay = 0,
}: FadeInOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 80%', 'start 20%'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [40, 0]);

  return (
    <motion.div
      ref={ref}
      style={{ opacity, scale, y }}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface ZoomOnScrollProps {
  children: ReactNode;
  className?: string;
}

export function ZoomOnScroll({ children, className = '' }: ZoomOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 100%', 'start 0%'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.05]);
  const blur = useTransform(scrollYProgress, [0, 1], [10, 0]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale,
        filter: blur.get() > 0 ? `blur(${blur}px)` : 'blur(0px)',
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface RotateOnScrollProps {
  children: ReactNode;
  className?: string;
  maxRotate?: number;
}

export function RotateOnScroll({
  children,
  className = '',
  maxRotate = 15,
}: RotateOnScrollProps) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const rotate = useTransform(scrollYProgress, [0, 1], [0, maxRotate]);

  return (
    <motion.div ref={ref} style={{ rotate }} className={className}>
      {children}
    </motion.div>
  );
}
