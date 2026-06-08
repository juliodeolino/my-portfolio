import React from 'react'
import Typography from './ui/Typography';

export default function Footer() {
  return (
    <footer className="w-full bg-transparent backdrop-blur-md border-t border-gray-800 text-white py-6 mt-auto">
        <Typography 
        variant="body"
        className="text-center text-gray-400 text-sm md:text-lg"
        >
        &copy; {new Date().getFullYear()} Julio Deolino. Todos os direitos reservados.
        </Typography>
    </footer>
  )
}
