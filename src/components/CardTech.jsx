import React from 'react'
import { Icon } from 'lucide-react';




export default function CardTech({ icon: Icon, children, className = "", ...props}) {
       const baseClasses = 'flex flex-col bg-surface items-center justify-center gap-2 text-md text-gray-300 min-w-28 min-h-28 md:w-32 md:h-32 rounded-lg border border-gray-700';
       const computedClasses = `${baseClasses} ${className}`
  return (
    <div className={computedClasses} {...props}>
        {Icon && <Icon className="text-blue-500 w-5 h-5 md:w-7 md:h-7" />} 
        {children}
    </div>
  )
}
