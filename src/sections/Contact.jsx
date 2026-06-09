import React from "react";
import { motion } from "framer-motion";
import Typography from "../components/ui/Typography";
import Button from "../components/ui/Button";
import GitHubIcon from "../components/icons/GitHubIcon";
import LinkedInIcon from "../components/icons/LinkedInIcon";
import MailIcon from "../components/icons/MailIcon";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import { Send } from "lucide-react";

export default function Contact() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className="w-full flex flex-col items-center border-b border-gray-800 px-4 py-16 p-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="w-full flex flex-col items-center gap-8"
      >
        <motion.div
        variants={fadeInUp}
        className="text-center flex flex-col items-center gap-4 max-w-2xl"
        >
            <Typography variant="subtitle">Contato</Typography>
            <Typography variant="h2">Vamos Conversar?</Typography>
            <Typography variant="body">Estou aberto a oportunidades, freelas e colaborações. Entre em contato por qualquer canal abaixo.</Typography>
        </motion.div>
        {/* Container para os botões de contato */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-col sm:flex-row items-center gap-4 justify-center w-full max-w-md"
        >
          {/* Botões de contato */}
          <Button
            variant="secondary"
            className=" text-gray-100 flex items-center gap-2 w-full sm:mx-auto sm:max-w-32"
          >
            <GitHubIcon size={20} />
            GitHub
          </Button>
          <Button
            variant="secondary"
            className=" text-gray-100 flex items-center gap-2 w-full sm:mx-auto sm:max-w-32"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </Button>
          <Button
            variant="secondary"
            className=" text-gray-100 flex items-center gap-2 w-full sm:mx-auto sm:max-w-32"
          >
            <MailIcon size={16} />
            E-mail
          </Button>
        </motion.div>
        {/*Formulario*/}
        <motion.div
        variants={fadeInUp}
        className="w-full max-w-lg bg-surface p-6 rounded-lg shadow-lg flex flex-col gap-6"
        >
            <Typography 
            variant="h3"
            className="text-left font-semibold"
            >Envie uma mensagem</Typography>
            <div className="flex flex-col sm:flex-row gap-4">
            <Input label="Nome" placeholder="Seu nome" />
            <Input label="E-mail" placeholder="Seu e-mail" />
            </div>
            <TextArea label="Mensagem" placeholder="Sua mensagem" />
            <Button 
            variant="primary" 
            className="self-end"
            >
                <Send size={20} />
                Enviar Mensagem</Button>
        </motion.div>
      </motion.div>
    </section>
  );
}
