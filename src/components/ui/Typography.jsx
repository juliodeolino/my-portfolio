import React from 'react'

export default function Typography({ variant, children, className = " "}) {
    const styles ={
    h1: "text-4xl md:text-5xl font-extrabold text-white tracking-tight", 
    h2: "text-2xl md:text-3xl font-bold text-white tracking-wide",
    body: "text-base text-gray-400 leading-relaxed",
    subtitle: "text-sm font-semibold uppercase tracking-wider text-primary"
    };

    const Tag = variant === 'body' || variant === 'subtitle' ? 'p' : variant || 'p';

  return (
    <Tag className={`${styles[variant]} ${className}`}>
        {children}
    </Tag>
  )
}
