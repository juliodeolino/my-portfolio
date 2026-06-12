import React from "react";
import { motion } from "framer-motion";
import Typography from "../components/ui/Typography";
import Card from "../components/Card";
import { ChevronLeft, ChevronRight, ListVideo, Tags } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const PROJETOS_DATA = [
  {
    id: 1,
    title: "E-commerce Materiais esportivos",
    description:
      "E-commerce moderno de artigos esportivos com design mobile-first e totalmente responsivo. Desenvolvido em React e estilizado com Tailwind CSS, focado em performance e experiência de navegação fluida em qualquer dispositivo. ",
    tags: [ "React", "Tailwind" ],
    imageUrl: "https://qs2ptfvjv0j5xteh.private.blob.vercel-storage.com/ecommerce-materiais-esportivos.png?vercel-blob-valid-until=1781287528514&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfUVMyUHRGVmp2MEo1WHRlaCIsIm93bmVySWQiOiJ0ZWFtX1Q4UEx1RkJkaU9TRHhGV0ZaUnBuQ2liRiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMzMwNjA3MzE1LCJpYXQiOjE3ODEyODc0MDc0Mjh9.FaYVpw8md8ghR4Uue7DJTKif__nz7LDWnq6ZNMD32Xg&vercel-blob-signature=sW-PI2Y5yllDe9L7TeQtTsHTjyDFHOI6QnFQk25DfGg",
    githubUrl: "https://github.com/juliodeolino/Ecommerce-Materiais-Esportivos",
  },
  {
    id: 2,
    title: "Comparador de Preços com ia",
    description:
      "Sistema inteligente que analisa tabelas em PDF, extrai dados de produtos e utiliza IA (Google Gemini) para comparar preços automaticamente. Gera uma planilha organizada com o comparativo final, otimizando decisões de compra",
    tags: [ "Python", "Gemini", "Pandas"],
    imageUrl: "https://qs2ptfvjv0j5xteh.private.blob.vercel-storage.com/comparador-deprecos-ia.png?vercel-blob-valid-until=1781287513887&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfUVMyUHRGVmp2MEo1WHRlaCIsIm93bmVySWQiOiJ0ZWFtX1Q4UEx1RkJkaU9TRHhGV0ZaUnBuQ2liRiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMzMwNjA3MzE1LCJpYXQiOjE3ODEyODc0MDc0Mjh9.FaYVpw8md8ghR4Uue7DJTKif__nz7LDWnq6ZNMD32Xg&vercel-blob-signature=VFadLAxZM4KOG7oIS-ki16oqknds9-n7rMmBbubTaQk",
    githubUrl: "https://github.com/juliodeolino/comparador-tabelas-ia"
  },
  {
    id: 3,
    title: "Blog",
    description: "Plataforma de blog completa com back-end em Node.js e banco de dados MongoDB. Sistema robusto para criação, gerenciamento e exibição de posts, com estrutura escalável e pronta para receber autenticação e comentários.",
    tags: [ "JavaScript", "Node.js", "Express", "MongoDB"],
    imageUrl: "https://qs2ptfvjv0j5xteh.private.blob.vercel-storage.com/Blog.png?vercel-blob-valid-until=1781287577125&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfUVMyUHRGVmp2MEo1WHRlaCIsIm93bmVySWQiOiJ0ZWFtX1Q4UEx1RkJkaU9TRHhGV0ZaUnBuQ2liRiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMzMwNjA3MzE1LCJpYXQiOjE3ODEyODc0MDc0Mjh9.FaYVpw8md8ghR4Uue7DJTKif__nz7LDWnq6ZNMD32Xg&vercel-blob-signature=uIRwc2zXZ730r_BXB4Si5xT6hc_G7WzojXM2sj8M47A",
    githubUrl: "https://github.com/juliodeolino/Blog-NodeJs"
  },
  {
    id: 4,
    title: "Task Manager",
    description:
      "Aplicação em Java para gerenciamento de tarefas com operações CRUD: criar, excluir, editar e listar tarefas. Projeto focado em lógica de programação, manipulação de coleções e persistência de dados.",
    tags: ["Java"],
    imageUrl: "https://qs2ptfvjv0j5xteh.private.blob.vercel-storage.com/projetos%20sem%20front.jpg?vercel-blob-valid-until=1781287544067&vercel-blob-delegation=eyJzdG9yZUlkIjoic3RvcmVfUVMyUHRGVmp2MEo1WHRlaCIsIm93bmVySWQiOiJ0ZWFtX1Q4UEx1RkJkaU9TRHhGV0ZaUnBuQ2liRiIsInBhdGhuYW1lIjoiKiIsIm9wZXJhdGlvbnMiOlsiZ2V0IiwiaGVhZCJdLCJ2YWxpZFVudGlsIjoxNzgxMzMwNjA3MzE1LCJpYXQiOjE3ODEyODc0MDc0Mjh9.FaYVpw8md8ghR4Uue7DJTKif__nz7LDWnq6ZNMD32Xg&vercel-blob-signature=PiLNsB6vUrmST4_C7DoyvCRrad0YA-BM52hsYYMXoB8",
    githubUrl: "https://github.com/juliodeolino/Task-manager"
  }
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
                    tags={project.tags}
                    imageUrl={project.imageUrl}
                    githubUrl={project.githubUrl}
                    liveUrl={project.liveUrl}
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
