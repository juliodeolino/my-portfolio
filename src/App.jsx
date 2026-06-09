import React from 'react'
import DesignSystem from './sections/DesignSystem'
import Header from './components/Header';
import Hero from './sections/Hero';
import Footer from './components/Footer';
import Technology from './sections/Technology';
import Contact from './sections/Contact';
import Projects from './sections/Projects';

export default function App() {
  const VER_DESIGN_SYSTEM = false;
        if(VER_DESIGN_SYSTEM) {
        <DesignSystem/>
      }
  return (
    <>
     <div className="bg-background text-white min-h-screen flex flex-col font-sans selection:bg-blue-500/30">
       <Header/>
       <main className="grow">
        <section id="inicio">
          <Hero />
        </section>
        <section id="tecnologia">
          <Technology />
        </section>
        <section id="projetos">
          <Projects />
        </section>
        <section id="contato">
          <Contact />
        </section>
       </main>
        <Footer/> 
     </div>
    </>
  );
}
