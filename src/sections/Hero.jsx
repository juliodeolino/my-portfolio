import React from "react";
import Typography from "../components/ui/Typography";
import Button from "../components/ui/Button";
import { motion } from "framer-motion";

export default function Hero() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center border-b border-gray-800 px-4">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
        className="max-w-4xl mx-auto items-center flex flex-col gap-12"
      >
        <motion.div variants={fadeInUp} className="flex flex-row items-center gap-2 border border-gray-800 rounded-full px-3 py-1.5 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-medium text-gray-400">
                    Disponível para oportunidades
                  </span>
                </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="h1" className="text-center">
            Olá sou <span className="text-blue-500">Julio Deolino</span>{" "}
            Desenvolvedor Fullstack
          </Typography>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Typography variant="body" className="text-center md:text-xl">
              Especialista em Java, JavaScript e ecossistema React. Soluções
              criativas e escaláveis do back-end ao front-end.
            </Typography>
          </motion.div>
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row w-full gap-4  justify-center max-w-md mx-auto">
            <Button variant="primary" className="w-full md:w-48">
              Ver Projetos
            </Button>
            <Button variant="secondary" className="w-full md:w-48">
              Download CV
            </Button>
          </motion.div>
          <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-6 w-full border-t border-gray-800 max-w-2xl mx-auto justify-center pt-6">
            {/* Métrica 1 */}
            <div className="flex flex-col items-center text-center p-4 border-b-0 border-r border-gray-800 last:border-0">
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                3+
              </span>
              <p className="text-gray-400 text-[12px] md:text-sm font-medium mt-1 ">
                Anos de Experiência
              </p>
            </div>

            {/* Métrica 2 (Ex: Seus projetos entregues) */}
            <div className="flex flex-col items-center text-center p-4 border-r border-gray-800 last:border-0">
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                20+
              </span>
              <p className="text-gray-400 text-[12px] md:text-sm font-medium mt-1">
                Projetos Entregues
              </p>
            </div>

            {/* Métrica 3 (Ex: Suas tecnologias) */}
            <div className="flex flex-col items-center text-center p-4">
              <span className="text-4xl md:text-5xl font-extrabold text-white">
                9+
              </span>
              <p className="text-gray-400 text-[12px] md:text-sm font-medium mt-1">
                Tecnologias Dominadas
              </p>
            </div>
          </motion.div>
      </motion.div>
    </section>
  );
}
