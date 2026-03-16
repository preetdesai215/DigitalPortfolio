import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    title: "Wine Quality Detection using Machine Learning",
    tools: ["Python", "Scikit-learn", "Pandas"],
    points: [
      "Developed a machine learning model in Python to predict wine quality using physicochemical features.",
      "Performed data preprocessing, feature selection, and model training using classification algorithms.",
      "Achieved accurate quality prediction through iterative model evaluation.",
    ],
  },
  {
    title: "Audio Processing GUI using MATLAB",
    tools: ["MATLAB", "Signal Processing Toolbox", "GUI"],
    points: [
      "Designed a graphical user interface in MATLAB for audio signal processing tasks.",
      "Implemented filtering, noise reduction, and visualization of waveforms.",
      "Analyzed frequency spectra for audio signals.",
    ],
  },
  {
    title: "FM Transmitter and Receiver Simulation",
    tools: ["TINA-TI", "Electronic Simulation"],
    points: [
      "Simulated an FM communication system including modulation and demodulation stages.",
      "Analyzed signal behavior, frequency response, and circuit performance.",
      "Validated FM principles using electronic simulation tools.",
    ],
  },
  {
    title: "Network Packet Sniffer",
    tools: ["Python", "Scapy", "Cybersecurity"],
    points: [
      "Developed a packet sniffing tool using Python to capture and analyze network packets.",
      "Implemented packet inspection to monitor protocols and detect suspicious traffic.",
      "Analyzed network communication behavior for security insights.",
    ],
  },
  {
    title: "Weather Prediction and Monitoring System",
    tools: ["Sensor Data", "Time Series Analysis", "Microcontroller"],
    points: [
      "Performed software simulation of a weather monitoring system using sensor data.",
      "Designed system to measure temperature, humidity, and atmospheric pressure.",
      "Implemented time series analysis for short-term weather prediction.",
      "Planning hardware implementation with a microcontroller and sensors for real-time monitoring.",
    ],
  },
  {
    title: "Shape Detection from Objects Using Image Processing",
    tools: ["OpenCV", "Image Processing", "Python"],
    points: [
      "Developed a system to detect and classify shapes from images of objects using image processing techniques.",
      "Implemented edge detection, contour extraction, and feature analysis algorithms.",
      "Tested the system using simulated image data and evaluated detection accuracy.",
      "Gained practical experience in OpenCV programming, algorithm development, and image analysis.",
    ],
  },
  {
    title: "Satellite Path Tracking Using Time Series Analysis",
    tools: ["Data Analysis", "Time Series", "Visualization"],
    points: [
      "Developed a system to track and predict satellite trajectories using historical orbital data.",
      "Applied time series analysis and predictive modeling to forecast satellite positions.",
      "Simulated satellite paths and analyzed movement patterns for accuracy.",
      "Gained hands-on experience in data analysis, algorithm development, and visualization techniques.",
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
        <div className="grid md:grid-cols-2 gap-6">
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
