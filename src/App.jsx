import React from 'react'
import DesignSystem from './sections/DesignSystem'
import Header from './components/Header';
import Hero from './sections/Hero';
import Footer from './components/Footer';

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
        <section id="inici">
          <Hero />
        </section>
       </main>
        <Footer/>
     </div>
    </>
  );
}
