import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Smart Underground Water Pipeline Leakage Detection System",
    tools: ["ESP32", "Arduino IDE", "Pressure Sensor", "Water Flow Sensor", "ADC", "Proteus"],
    points: [
      "Designed FSM-based control logic on ESP32 for real-time pipeline leakage detection.",
      "Implemented ADC-based pressure and flow monitoring with threshold fault detection.",
      "Validated the system using serial logging and controlled leakage test scenarios.",
    ],
  },
  {
    title: "Parallel–Serial Sensor Data Interfacing using 8086",
    tools: ["8086 Assembly", "8255 PPI", "8251 USART", "ADC0808", "Proteus"],
    points: [
      "Designed an 8086-based sensor data acquisition system using ADC0808 via 8255 PPI.",
      "Implemented serial communication using 8251 USART.",
      "Developed assembly programs for ADC control and data handling.",
    ],
  },
  {
    title: "Wind Speed Calculator",
    tools: ["Arduino Uno", "C Programming", "HC-SR04 Sensor", "Proteus"],
    points: [
      "Built a real-time wind speed measurement system using ultrasonic sensors.",
      "Implemented data acquisition and signal processing in embedded C.",
      "Demonstrated hardware–software integration and calibration.",
    ],
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 border-t border-primary/10" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.h2
          className="section-header"
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          animate={inView ? { clipPath: "inset(0 0% 0 0)" } : {}}
          transition={{ duration: 0.6, ease: [0.2, 1, 0.3, 1] }}
        >
          Projects
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="card-technical group flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.6 }}
            >
              <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tools.map((tool) => (
                  <span
                    key={tool}
                    className="font-mono-tech text-[10px] bg-secondary text-muted-foreground px-2 py-1 border border-primary/10"
                  >
                    {tool}
                  </span>
                ))}
              </div>
              <ul className="space-y-2 mt-auto">
                {project.points.map((point, j) => (
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
    </section>
  );
};

export default ProjectsSection;
