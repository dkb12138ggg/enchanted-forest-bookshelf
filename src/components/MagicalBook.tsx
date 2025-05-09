
import React from 'react';
import { cn } from '@/lib/utils';

interface MagicalBookProps {
  title: string;
  author: string;
  coverImage?: string;
  onClick?: () => void;
  className?: string;
}

const MagicalBook: React.FC<MagicalBookProps> = ({ 
  title, 
  author, 
  coverImage, 
  onClick,
  className
}) => {
  return (
    <div 
      className={cn(
        "magical-book w-48 h-64 animate-float cursor-pointer",
        className
      )}
      onClick={onClick}
      style={{ animationDelay: `${Math.random() * 2}s` }}
    >
      <div className="magical-book-spine"></div>
      <div className="p-4 h-full flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center h-full">
          {coverImage ? (
            <div 
              className="w-full h-32 mb-2 bg-cover bg-center rounded-sm border border-gold/30"
              style={{ backgroundImage: `url(${coverImage})` }}
            ></div>
          ) : (
            <div className="w-full h-32 mb-2 bg-forest-light/20 rounded-sm border border-gold/30 flex items-center justify-center">
              <span className="text-gold text-4xl opacity-40">✦</span>
            </div>
          )}
          <h3 className="text-center text-gold font-cinzel font-bold text-lg leading-tight mt-2">
            {title}
          </h3>
        </div>
        <p className="text-parchment text-center text-sm italic mt-2">{author}</p>
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-gold/10 to-transparent opacity-30 pointer-events-none"></div>
      <div className="absolute inset-0 animate-glow pointer-events-none"></div>
    </div>
  );
};

export default MagicalBook;
