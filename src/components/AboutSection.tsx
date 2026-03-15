import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 border-t border-primary/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="section-header"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          About
        </motion.h2>
        <motion.p
          className="text-body max-w-3xl leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Third-year undergraduate pursuing B.Tech in Electronics and Communication Engineering, with a minor in Computational Data Science. Interested in AI/ML, Cyber-Physical Systems, Image Processing, and Digital Forensics. Passionate about applying data-driven and intelligent techniques to modern communication systems and cybersecurity challenges. Actively building strong analytical and technical skills through academic projects and continuous learning. Looking to explore innovative solutions at the intersection of electronics, data science, and intelligent systems.
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
