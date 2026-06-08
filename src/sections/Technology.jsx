import React from "react";
import { motion } from "framer-motion";
import Typography from "../components/ui/Typography";
import CardTech from "../components/CardTech";
import {
  Coffee,
  FileCode,
  Terminal,
  Atom,
  Smartphone,
  Leaf,
  Database,
  Braces,
} from "lucide-react";

export const tecnologias = [
  { name: "Java", icon: Coffee },
  { name: "JavaScript", icon: Braces },
  { name: "TypeScript", icon: FileCode },
  { name: "Python", icon: Terminal },
  { name: "React", icon: Atom },
  { name: "React Native", icon: Smartphone },
  { name: "Spring Boot", icon: Leaf },
  { name: "MySQL", icon: Database },
  { name: "PostgreSQL", icon: Database },
];

export default function Technology() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className="w-full flex flex-col items-center border-b border-gray-800">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="flex flex-col items-center justify-center gap-12 max-w-4xl mx-auto py-16 px-4"
      >
        <motion.div
          variants={fadeInUp}
          className="flex flex-col items-center gap-4"
        >
          <Typography variant="subtitle" className="text-center ">
            Minhas Tecnologias
          </Typography>
          <Typography variant="h2" className="text-center">
            Desenvolvedor Fullstack
          </Typography>
          <Typography variant="body" className="text-center">
            Ecossistema completo — do back-end robusto ao front-end moderno.
          </Typography>
        </motion.div> 
        <div
          className="w-full flex flex-wrap gap-6 justify-center max-w-5xl mx-auto"
        >
          {tecnologias.map((tech, index) => (
            <motion.div
                variants={fadeInUp}
                key={index}
            >
            <CardTech icon={tech.icon}>
              {tech.name}
            </CardTech>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
