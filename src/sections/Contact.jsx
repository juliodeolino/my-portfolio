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
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.target);

    // Pega a chave direto do arquivo .env com segurança
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_KEY);

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      }).then((res) => res.json());

      if (res.success) {
        alert("Mensagem enviada com sucesso! 🚀");
        event.target.reset(); // Limpa o formulário
      } else {
        alert("Algo deu errado no envio. ❌");
      }
    } catch (error) {
      console.error(error);
      alert("Erro de conexão. Tente novamente!");
    } finally {
      setIsSubmitting(false);
    }
  };

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
          <Typography variant="body">
            Estou aberto a oportunidades, freelas e colaborações. Entre em
            contato por qualquer canal abaixo.
          </Typography>
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
            href="https://github.com/juliodeolino"
            target="_blank"
            rel="noreferrer"
          >
            <GitHubIcon size={20} />
            GitHub
          </Button>
          <Button
            variant="secondary"
            className=" text-gray-100 flex items-center gap-2 w-full sm:mx-auto sm:max-w-32"
            href="https://www.linkedin.com/in/juliodeolino/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon size={16} />
            LinkedIn
          </Button>
          <Button
            variant="secondary"
            className=" text-gray-100 flex items-center gap-2 w-full sm:mx-auto sm:max-w-32"
            href="mailto:juliodeolino07@gmail.com"
          >
            <MailIcon size={16} />
            E-mail
          </Button>
        </motion.div>
        {/*Formulario*/}
        <motion.form
          variants={fadeInUp}
          className="w-full max-w-lg bg-surface p-6 rounded-lg shadow-lg flex flex-col gap-6 "
          onSubmit={onSubmit}
        >
          <Typography variant="h3" className="text-left font-semibold">
            Envie uma mensagem
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input label="Nome" required placeholder="Seu nome" name="name" />
            <Input label="E-mail" required placeholder="Seu e-mail" name="email" />
          </div>
          <TextArea label="Mensagem" required placeholder="Sua mensagem" name="message" />
          <Button variant="primary" className="self-end" type="submit" disabled={isSubmitting}>
            <Send size={20} />
            {isSubmitting ? 'Enviando...' : 'Enviar Mensagem'}
          </Button>
        </motion.form>
      </motion.div>
    </section>
  );
}
