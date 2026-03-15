import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-24 border-t border-primary/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="section-header"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          Education
        </motion.h2>
        <motion.div
          className="card-technical border-l-2 border-l-primary"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
            <div>
              <h3 className="text-lg font-bold text-foreground">
                Pandit Deendayal Energy University (PDEU)
              </h3>
              <p className="text-sm text-muted-foreground">Gandhinagar, Gujarat</p>
            </div>
            <span className="font-mono-tech text-xs text-primary tabular-nums whitespace-nowrap">
              2023 – 2027
            </span>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary inline-block" />
              <span className="text-body">B.Tech in Electronics and Communication Engineering</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary inline-block" />
              <span className="text-body">Minor in Computational Data Science and Applications</span>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <span className="font-mono-tech text-sm text-foreground">
                CGPA: <span className="text-primary tabular-nums font-bold">9.23</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
