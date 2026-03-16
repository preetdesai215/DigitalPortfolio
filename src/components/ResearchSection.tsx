import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ResearchSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 border-t border-primary/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="section-header"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          Research Publication
        </motion.h2>
        <motion.div
          className="card-technical border-l-2 border-l-primary"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono-tech text-[10px] bg-primary/20 text-primary px-2 py-1 border border-primary/30 uppercase tracking-wider">
              Under Review
            </span>
          </div>
          <h3 className="text-lg font-bold text-foreground mb-4">
            "LC-MIoT: Lightweight Hybrid Cryptographic Model for Medical IoT"
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-3 text-body text-sm">
              <span className="w-1.5 h-1.5 bg-primary inline-block mt-2 flex-shrink-0" />
              Hybrid ECC + lightweight encryption framework for resource-constrained healthcare IoT devices.
            </li>
            <li className="flex items-start gap-3 text-body text-sm">
              <span className="w-1.5 h-1.5 bg-primary inline-block mt-2 flex-shrink-0" />
              Substantial reductions in energy consumption and encryption time vs conventional methods.
            </li>
            <li className="flex items-start gap-3 text-body text-sm">
              <span className="w-1.5 h-1.5 bg-primary inline-block mt-2 flex-shrink-0" />
              Ensures secure, efficient real-time medical data transmission for wearable applications.
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default ResearchSection;
