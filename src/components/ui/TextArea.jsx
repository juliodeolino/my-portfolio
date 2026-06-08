import React from 'react'

export default function TextArea({id, placeholder, rows=4, className = '', label, ...props}) {
    const baseClasses = "w-full px-4 py-3 bg-[#1E293B] border border-gray-700 rounded-lg text-white text-sm placeholder-gray-500 outline-none transition-all duration-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 resize-none";
  return (
    <div className="flex flex-col gap-2 w-full">
        {label && (
            <label htmlFor={id} className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {label}
            </label>
        )}
        <textarea
        id={id}
        placeholder={placeholder}
        rows={rows}
        className={`${baseClasses} ${className}`}
        {...props}
        />

    </div>
  )
}
