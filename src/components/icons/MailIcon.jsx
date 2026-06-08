import React from 'react';

export default function MailIcon({ size = 20, className = "", ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24" // Ajustado o viewBox para o padrão de linhas 24x24
      fill="none"         // Remove o preenchimento para focar apenas nas linhas
      stroke="currentColor" 
      strokeWidth="1.5"   // 🌟 COLOQUE 1.5 OU 1.2 AQUI PARA DEIXAR A LINHA MAIS FINA!
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      {/* Esse novo path desenha o envelope usando linhas puras */}
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}