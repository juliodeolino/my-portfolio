import React from "react";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Inicio", href: "#inicio" },
    { label: "Tecnologia", href: "#tecnologia" },
    { label: "Projetos", href: "#projetos" },
    { label: "Contato", href: "#contato" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-sm bg-white flex items-center justify-center hover:bg-blue-500 transition-colors">
            <span className="text-md font-bold text-background">JD</span>
          </div>
          <a
            href="#"
            className="text-lg font-bold tracking-wider hover:text-blue-500 transition-colors hidden md:inline-block"
          >
            Julio Deolino
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all after:duration-300 pb-1"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-gray-400 hover:text-white md:hidden focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <div
        className={`md:hidden transition-all duration-300 ease-in-out bg-background ${
          isOpen
            ? "max-h-64 opacity-100 py-4"
            : "max-h-0 overflow-hidden pointer-events-none"
        }`}
      >
        <nav className="flex flex-col px-4 gap-4">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-base font-medium text-gray-400 hover:text-white py-2 transition-colors border-b border-gray-900 last:border-0"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
