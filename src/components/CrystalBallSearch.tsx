
import React, { useState, useRef } from 'react';
import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';

interface CrystalBallSearchProps {
  onSearch: (query: string) => void;
  className?: string;
}

const CrystalBallSearch: React.FC<CrystalBallSearchProps> = ({ onSearch, className }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      onSearch(searchTerm.trim());
    }
  };
  
  return (
    <div className={cn("w-full max-w-md mx-auto", className)}>
      <div 
        className={cn(
          "crystal-ball p-1 transition-all duration-500",
          isFocused ? "scale-105" : ""
        )}
        onClick={() => inputRef.current?.focus()}
      >
        <form 
          onSubmit={handleSearch} 
          className="relative flex items-center"
        >
          <span className="absolute left-3 text-white/70">
            <Search size={18} />
          </span>
          <input
            ref={inputRef}
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            placeholder="Search magical tomes..."
            className="w-full pl-10 pr-4 py-2 bg-transparent text-white/90 border-none focus:outline-none focus:ring-0 placeholder-white/50"
          />
          {isFocused && (
            <div className="absolute inset-0 -z-10 bg-white/5 animate-pulse rounded-full blur-md"></div>
          )}
        </form>
      </div>
    </div>
  );
};

export default CrystalBallSearch;
