import React from "react";
import { motion } from "framer-motion";
import Typography from "../components/ui/Typography";
import Card from "../components/Card";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const PROJETOS_DATA = [
  {
    id: 1,
    title: "E-commerce Nature",
    description:
      "Plataforma de vendas online que automatiza o recebimento de pagamentos.",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description:
      "Painel financeiro inteligente que centraliza receitas e despesas.",
  },
  {
    id: 3,
    title: "Sistema de Agendamento",
    description: "Aplicação para automação de pedidos e agendamentos locais.",
  },
  {
    id: 4,
    title: "E-commerce Nature",
    description:
      "Plataforma de vendas online que automatiza o recebimento de pagamentos.",
  },
  {
    id: 5,
    title: "Finance Dashboard",
    description:
      "Painel financeiro inteligente que centraliza receitas e despesas.",
  },
  {
    id: 6,
    title: "Sistema de Agendamento",
    description: "Aplicação para automação de pedidos e agendamentos locais.",
  },
];

export default function Projects() {
  const fadeInUp = {
    hidden:  { opacity: 0, y: 30 },
    visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
    },
  };
  return (
    <section className="w-full flex flex-col items-center border-b border-gray-800 px-4 py-16 p-12 gap-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          visible: { transition: { staggerChildren: 0.2 } },
        }}
        className="max-w-6xl mx-auto flex flex-col gap-10 w-full"
      >
        {/* 🚀 CABEÇALHO DO CARROSSEL (TÍTULO + CONTROLES ALINHADOS) */}
        <motion.div
          variants={fadeInUp}
          className="text-center flex flex-col items-center gap-4"
        >
          <Typography variant="subtitle">Portifólio</Typography>
          <Typography variant="h2">Projetos em Destaques</Typography>
          <Typography variant="body">
            Soluções que construí e tenho orgulho de compartilhar.
          </Typography>

          {/* Container Geral dos Controles */}
          <motion.div className="flex items-center gap-6 self-auto">
            {/* Container das Setinhas de Navegação */}
            <div className="flex items-center gap-2">
              <button className="custom-swiper-button-prev p-2 rounded-md border border-gray-800 bg-surface text-gray-400 hover:text-white hover:border-gray-700 transition-all cursor-pointer">
                <ChevronLeft size={18} />
              </button>
              {/* O Swiper vai injetar as bolinhas automaticamente dentro dessa div */}
              <div className="custom-swiper-pagination flex items-center gap-2"></div>
              <button className="custom-swiper-button-next p-2 rounded-md border border-gray-800 bg-surface text-gray-400 hover:text-white hover:border-gray-700 transition-all cursor-pointer">
                <ChevronRight size={18} />
              </button>
            </div>
          </motion.div>
        </motion.div>

        {/* CONTENEDOR DO SLIDER */}
        <motion.div
          variants={fadeInUp}
          className="w-full custom-swiper-container max-w-6xl"
        >
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            navigation={{
              nextEl: ".custom-swiper-button-next",
              prevEl: ".custom-swiper-button-prev",
            }}
            pagination={{
              el: ".custom-swiper-pagination",
              clickable: true,
            }}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full h-full"
          >
            {PROJETOS_DATA.map((project) => (
              <SwiperSlide key={project.id} className="h-full flex pt-3 pb-2">
                <motion.div variants={fadeInUp}>
                  <Card
                    title={project.title}
                    description={project.description}
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </motion.div>
    </section>
  );
}
