'use client';
import { motion } from "framer-motion";
import { FaNode, FaReact } from "react-icons/fa";
import { SiD3Dotjs, SiFirebase, SiGraphql, SiNextdotjs, SiTailwindcss, SiTypescript } from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

// Updated Education Data
const Education = [
  {
    title: "Kean University",
    location: "Union, NJ",
    period: "2023-2026",
    gpa: "3.593 GPA",
    degree: "Anticipated BA in Computer Science",
    honors: [
      "Fall 24 Dean's Honor List",
      "Fall 23 Dean’s Honor List",
    ],
    image: '/Education/kean.jpg', // Update with an appropriate image path
  },
  {
    title: "Brookdale Community College",
    location: "Lincroft, NJ",
    period: "2021-2023",
    honors: [
      "Fall 22 Dean’s Honor List",
      "Fall 21 Dean’s Honor List",
    ],
    image: '/Education/brookdale.jpg', // Update with an appropriate image path
  },
];

// Skills data remains unchanged for now
const Skills = [
    {
        title: "Front End Development",
        description: "Experience creating web applications using these tools:",
        tech: [
            { name: "HTML", icon: FaReact, color: "#000000" },
            { name: "CSS", icon: FaReact, color: "#000000" },
            { name: "JavaScript", icon: FaReact, color: "#000000" },                                
            { name: "React", icon: FaReact, color: "#61DAFB" },
            { name: "Next.js", icon: SiNextdotjs, color: "000000" },
            { name: "Tailwind", icon: SiTailwindcss, color: "06B6D4" },
        ],
        image: '/Skills/ecommerce.png'
    },
    {
        title: "Back End Development",
        description: "A few back end utilities that have been utilized:",
        tech: [
            { name: "Node.js", icon: FaNode, color: "#339933" },
            { name: "MySQL", icon: SiNextdotjs, color: "000000" },
        ],
        image: '/Skills/analytics.jpg'
    },
    {
        title: "Other Hard Skills",
        description: "Additional applications and languages I am familiar with:",
        tech: [
            { name: "Microsoft 365", icon: null, color: "#000000" },
            { name: "RStudio", icon: null, color: "#000000" },
            { name: "R", icon: null, color: "#000000" },
        ],
        image: '/Skills/mobile.jpg'
    },
];

export default function Main() {
    return (
        <section className="py-32 relative">
            <div className="max-w-7xl mx-auto px-6">
                {/* Education Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
                        EDUCATION
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full mb-10" />
                </motion.div>

                {/* Education Grid */}
                <div id='education' className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                    {Education.map((edu, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group relative rounded-3xl overflow-hidden 
                                    bg-surface border border-white/10 cursor-pointer">

                            {/* Content Section */}
                            <motion.div className="p-6 bg-surface transition duration-300">
                                <h3 className="text-2xl font-bold text-content mb-1">{edu.title}</h3>
                                <p className="text-content/80 mb-1 mt-2">{edu.location}</p>
                                <p className="text-content/80 mb-1">{edu.period}</p>
                                {edu.gpa && <p className="text-content/80 mb-1">{edu.gpa}</p>}
                                {edu.degree && <p className="text-content/80 mb-4">{edu.degree}</p>}

                                {edu.honors && edu.honors.length > 0 && (
                                    <div className="flex flex-col gap-1">
                                        {edu.honors.map((honor, j) => (
                                            <span key={j} className="text-content/80 text-sm border-l-4 border-primary pl-2">
                                                {honor}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Spacer between sections */}
                <div className="h-20"></div>

                {/* Skills Section Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col items-center mb-20"
                >
                    <h2 id="skills" className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
                        SKILLS
                    </h2>
                    <div className="w-16 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full" />
                </motion.div>

                {/* Skills Grid */}
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                    {Skills.map((skill, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.1 }}
                            whileHover={{ y: -10, transition: { duration: 0.2 } }}
                            className="group relative h-[500px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
                        >
                            {/* Image Section */}
                            <motion.div className="h-[250px] relative" whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                                <Image
                                    src={skill.image}
                                    alt={skill.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                    priority
                                />
                            </motion.div>

                            {/* Content Section */}
                            <motion.div className="p-6 bg-surface transition duration-300">
                                <h3 className="text-2xl font-bold text-content">{skill.title}</h3>
                                <p className="text-content/80 mb-4">{skill.description}</p>

                                <div className="flex flex-wrap gap-2">
                                    {skill.tech.map((tech, j) => (
                                        <span
                                            key={j}
                                            className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-colors flex items-center gap-1.5 group/tech"
                                        >
                                            {tech.icon && (
                                                <tech.icon style={{ color: tech.color }} className="w-4 h-4 transition-colors" />
                                            )}
                                            <span className="group-hover/tech:text-content transition-colors">{tech.name}</span>
                                        </span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
