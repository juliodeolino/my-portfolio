import React from 'react'
import Button from './ui/Button';
import { ExternalLink } from 'lucide-react';
import { FolderGit } from 'lucide-react';

export default function Card({
  title,
  description,
  tags= [],
  imageUrl,
  liveUrl,
  githubUrl
}) {
  return (
    <div className="bg-surface border border-gray-800 rounded-xl overflow-hidden shadow-xl transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/50 group">
      <div className="h-48 overflow-hidden bg-slate-900 relative">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={`Banner do projeto ${title}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-600 font-medium text-sm">
            Sem imagem
          </div>
        )}
      </div>
      <div className="p-6 space-y-4">

        <h3 className="text-xl font-bold text-white tracking-wide group-hover:text-blue-400 transition-colors">
          {title}
        </h3>
        <p className="text-sm text-gray-400 leading-relaxed min-h-15">
          {description}
        </p>
      </div>

      <div className="flex flex-wrap gap-2 pt-2 px-6">
        {tags.map((tech, index) => (
          <span 
          key={index}
          className="px-2.5 py-1 bg-slate-900 border border-gray-700 text-xs font-medium text-gray-300 rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-gray-800 px-6">
        {githubUrl && (
          <Button
            variant="secondary"
            onClick={() => window.open(githubUrl, '_blank')}
            className="py-2 text-xs border-none"
          >
            <FolderGit size={14} />
            Ver GitHub
          </Button>
        )}
        {liveUrl && (
          <Button
            variant="ghost"
            onClick={() => window.open(liveUrl, '_blank')}
            className="py-2 text-xs font-bold! text-blue-500! hover:text-blue-400!"
            >
              <ExternalLink size={14} />
              Demo online
          </Button>
        )}
      </div>
    </div>
  )
}
