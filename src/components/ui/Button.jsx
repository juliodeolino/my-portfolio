import React from 'react'

const styles = {
    primary: "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/20",
    secondary: "border-2 border-gray-700 text-white hover:text-blue-600 hover:border-blue-600 hover:bg-transparent",
    ghost: "text-gray-400 hover:text-white hover:bg-slate-800",
};

export default function Button({ variant = "primary", children, className = "", ...props}) {

    const baseClasses = "px-6 py-2.5 w-full rounded-lg font-semibold text-sm transition-all duration-300 inline-flex items-center justify-center gap-2 font-medium active:scale-95";
    const selectStyle = styles[variant] || styles.primary;
    const computedClasses = `${baseClasses} ${selectStyle} ${className}`;
   return (
    <button className={computedClasses} {...props}>
        {children}
    </button>
  )
}
