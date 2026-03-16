import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden">
      {/* Scan line */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-primary/50 to-transparent animate-scan-line" />
      </div>

      <div className="max-w-6xl mx-auto px-4 md:px-8 py-24 relative z-10">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, ease: [0.2, 1, 0.3, 1] }}
        >
          <p className="text-subhead mb-6">B.Tech ECE // Minor: Computational Data Science</p>
        </motion.div>

        <motion.h1
          className="text-display mb-6 whitespace-nowrap"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.2, 1, 0.3, 1] }}
        >
          PREET DESAI
        </motion.h1>

        <motion.p
          className="text-body max-w-2xl mb-10"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.2, 1, 0.3, 1] }}
        >
          ELECTRONICS AND COMMUNICATION ENGINEERING STUDENT | DIGITAL COMMUNICATIONS | AI/ML | DIGITAL FORENSICS
        </motion.p>

        <motion.div
          className="flex flex-wrap gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a href="#projects" className="btn-primary-tech">
            View Projects
          </a>
          <a href="#contact" className="btn-secondary-tech">
            Contact
          </a>
          <a
            href="https://www.linkedin.com/in/preetddesai"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary-tech"
          >
            LinkedIn ↗
          </a>
        </motion.div>

        <motion.div
          className="mt-16 flex items-center gap-6 font-mono-tech text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <span className="flex items-center gap-2">
            <span className="w-2 h-2 bg-primary inline-block" />
            CGPA: <span className="text-foreground tabular-nums">9.23</span>
          </span>
          <span className="text-primary/30">|</span>
          <span>PDEU, Gandhinagar</span>
          <span className="text-primary/30">|</span>
          <span>2023–2027</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
