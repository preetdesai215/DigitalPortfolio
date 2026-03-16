import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillGroups = [
  {
    title: "Programming Languages",
    skills: ["Embedded C", "Python", "SQL"],
  },
  {
    title: "Embedded Systems",
    skills: ["Arduino", "ESP32"],
  },
  {
    title: "Hardware Description Language",
    skills: ["Verilog"],
  },
  {
    title: "Simulation & Design Tools",
    skills: ["MATLAB", "Proteus", "Logisim", "TINA-TI"],
  },
  {
    title: "Operating Systems",
    skills: ["Kali Linux", "Parrot OS"],
  },
  {
    title: "Scripting",
    skills: ["Bash", "Linux Shell Scripting"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "Apache"],
  },
  {
    title: "Productivity & Documentation",
    skills: ["Notion"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 border-t border-primary/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="section-header"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="card-technical border-l-2 border-l-primary"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.08, duration: 0.6 }}
            >
              <h3 className="text-subhead mb-3 text-[11px]">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono-tech text-xs bg-secondary text-muted-foreground px-3 py-1.5 border border-primary/10 hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
