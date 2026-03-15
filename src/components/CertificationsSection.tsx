import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certs = [
  { title: "Computational Data Science", org: "PDEU" },
  { title: "Practical Cyber Security for Cyber Security Practitioners", org: "NPTEL" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="certifications" className="py-24 border-t border-primary/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="section-header"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certs.map((cert, i) => (
            <motion.div
              key={i}
              className="card-technical border-l-2 border-l-primary"
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.5 }}
            >
              <h3 className="text-foreground font-bold text-sm">{cert.title}</h3>
              <p className="font-mono-tech text-xs text-muted-foreground mt-1">{cert.org}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
