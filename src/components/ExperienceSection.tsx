import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
  {
    role: "Cyber Security Intern",
    org: "Forensic Knight",
    date: "Jun 2024 – Aug 2024",
    points: [
      "Assisted in digital forensic investigations by analyzing system logs, disk images, and network artifacts to support incident response.",
      "Used cybersecurity and forensic tools to identify suspicious activities and potential security threats in digital systems.",
      "Supported the collection and preservation of digital evidence following standard forensic and security protocols.",
      "Collaborated with senior analysts to document investigation findings and understand industry security standards and best practices.",
    ],
  },
  {
    role: "President",
    org: "CiviqueNiti, Public Policy & Administration Club – PDEU",
    date: "May 2025 – Present",
    subtitle: "Logistics Head (May 2024 – May 2025)",
    points: [
      "Led and managed the Public Policy & Administration Club, coordinating activities and guiding the executive team.",
      "Organized policy discussions, workshops, and speaker sessions to promote awareness in public policy and governance.",
      "Facilitated collaborations with other student bodies and departments for interdisciplinary events.",
      "Oversaw event planning, team coordination, communication, and strategic planning for club activities.",
    ],
  },
  {
    role: "Social Service Intern",
    org: "Jeevantirth NGO – Ahmedabad",
    date: "Jun 2024 – Jul 2024",
    points: [
      "Conducted educational sessions for underprivileged children to support learning and personal development.",
      "Contributed to initiatives aligned with the United Nations Sustainable Development Goals (SDGs).",
      "Assisted in planning and executing community outreach and awareness activities.",
      "Prepared a financial report using a virtual ₹25 lakh NGO budget for education and welfare initiatives.",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 border-t border-primary/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="section-header"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          Experience
        </motion.h2>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[7px] md:left-[7px] top-2 bottom-2 w-[1px] bg-primary/40" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                className="relative pl-8"
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
              >
                {/* Diamond node */}
                <div className="absolute left-0 top-1.5 w-[15px] h-[15px] bg-primary rotate-45" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{exp.role}</h3>
                    <p className="text-sm text-foreground">{exp.org}</p>
                    {exp.subtitle && (
                      <p className="text-xs text-muted-foreground font-mono-tech mt-1">{exp.subtitle}</p>
                    )}
                  </div>
                  <span className="font-mono-tech text-xs text-muted-foreground tabular-nums whitespace-nowrap">
                    {exp.date}
                  </span>
                </div>
                <ul className="space-y-2">
                  {exp.points.map((point, j) => (
                    <li key={j} className="flex items-start gap-3 text-body text-sm">
                      <span className="w-1.5 h-1.5 bg-primary inline-block mt-2 flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
