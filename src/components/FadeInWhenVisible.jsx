// src/components/FadeInWhenVisible.jsx
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function FadeInWhenVisible({ children }) {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
