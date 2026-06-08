import React from "react";
import Typography from "../components/ui/Typography";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";
import TextArea from "../components/ui/TextArea";
import Card from "../components/Card";
import Header from "../components/Header";
import Footer from "../components/Footer";


export default function DesignSystem() {
  return (
    <div className="h-full bg-background gap-10 flex flex-col">
      <Header/>
      <h1 className="text-xl text-yellow-50">Design System</h1>
      <div>
        <Typography variant="h1">Tipografia do Sistema</Typography>
        <Typography variant="h1">Título H1 - Olá, sou Julio Deolino</Typography>
        <Typography variant="h2">Título H2 - Projetos em Destaque</Typography>
        <Typography variant="body">
          Texto Body - Plataforma de vendas online de alta performance que
          automatiza o recebimento de pagamentos..
        </Typography>
        <Typography variant="subtitle">
          Texto Subtitle - Implementação de um sistema de design com Tailwind
          CSS e React.
        </Typography>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h2">Botões</Typography>
        <div>
          <Button variant="primary">Botão Primário</Button>
          <Button variant="secondary">Botão Secundário</Button>
          <Button variant="ghost">Botão Ghost</Button>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <Typography variant="h2">Inputs e Textareas</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input 
        label="Nome"
        id="name"
        placeholder="Digite seu nome"
        required     
        />
        <TextArea 
        label="Mensagem"
        id="message"  
        placeholder="Digite sua mensagem"  
        required 
        />
        </div>
      </div>
      <div>
        <Typography variant="h2">Card</Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl">
        
        {/* Caso de Uso 1: Focado em Negócios/Cliente Local */}
        <Card 
          title="e-commerce-nature"
          description="Plataforma de vendas online de alta performance que automatiza o recebimento de pagamentos e simplifica a gestão de estoque do lojista."
          tags={["React", "Spring Boot", "PostgreSQL"]}
          githubUrl="https://github.com/seu-usuario/e-commerce"
          liveUrl="https://suademo.com"
        />

        {/* Caso de Uso 2: Outro projeto seu */}
        <Card 
          title="finance-dashboard"
          description="Painel financeiro inteligente que centraliza receitas e despesas, permitindo que microempresários tomem decisões estratégicas."
          tags={["TypeScript", "React", "Python"]}
          githubUrl="https://github.com/seu-usuario/finance"
          liveUrl="https://suademo2.com"
        />

      </div>
      </div>
      <Footer/>
    </div>
  );
}
