import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 border-t border-primary/10 pb-32" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="section-header"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          Contact
        </motion.h2>
        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <a
            href="mailto:desaipreet2105@gmail.com"
            className="card-technical border-l-2 border-l-primary group"
          >
            <p className="text-subhead mb-2">Email</p>
            <p className="text-foreground font-mono-tech text-sm group-hover:text-primary transition-colors">
              desaipreet2105@gmail.com
            </p>
          </a>
          <a
            href="https://www.linkedin.com/in/preetddesai"
            target="_blank"
            rel="noopener noreferrer"
            className="card-technical border-l-2 border-l-primary group"
          >
            <p className="text-subhead mb-2">LinkedIn</p>
            <p className="text-foreground font-mono-tech text-sm group-hover:text-primary transition-colors">
              linkedin.com/in/preetddesai ↗
            </p>
          </a>
          <div className="card-technical border-l-2 border-l-primary">
            <p className="text-subhead mb-2">Location</p>
            <p className="text-foreground font-mono-tech text-sm">Gandhinagar, Gujarat, India</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
