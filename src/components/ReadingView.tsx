
import React, { useState, useEffect, useRef } from 'react';
import { Book } from '@/types/book';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ReadingViewProps {
  book: Book;
  onClose: () => void;
}

const ReadingView: React.FC<ReadingViewProps> = ({ book, onClose }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const [animating, setAnimating] = useState(false);
  const pageRef = useRef<HTMLDivElement>(null);

  const handleNextPage = () => {
    if (animating || currentPage >= book.content.length - 1) return;
    
    setAnimating(true);
    // Play page turn sound
    const audio = new Audio('/page-turn.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {
      // Handle browser autoplay restrictions
      console.log('Audio playback prevented by browser');
    });
    
    setTimeout(() => {
      setCurrentPage(currentPage + 1);
      setAnimating(false);
    }, 500);
  };

  const handlePrevPage = () => {
    if (animating || currentPage <= 0) return;
    
    setAnimating(true);
    // Play page turn sound
    const audio = new Audio('/page-turn.mp3');
    audio.volume = 0.2;
    audio.play().catch(() => {
      // Handle browser autoplay restrictions
      console.log('Audio playback prevented by browser');
    });
    
    setTimeout(() => {
      setCurrentPage(currentPage - 1);
      setAnimating(false);
    }, 500);
  };

  // Add rune animation on page change
  useEffect(() => {
    if (!pageRef.current) return;
    
    const runeElement = document.createElement('div');
    runeElement.className = 'absolute inset-0 flex items-center justify-center animate-rune-fade pointer-events-none';
    runeElement.innerHTML = '<span class="text-6xl text-gold/30">✦</span>';
    
    pageRef.current.appendChild(runeElement);
    
    const timeout = setTimeout(() => {
      runeElement.remove();
    }, 3000);
    
    return () => {
      clearTimeout(timeout);
      runeElement.remove();
    };
  }, [currentPage]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-auto">
        <button 
          onClick={onClose}
          className="absolute top-2 right-2 bg-forest-dark/80 text-gold p-1 rounded-full hover:bg-forest-dark z-10"
        >
          <X size={20} />
        </button>
        
        <div className="parchment min-h-[70vh] relative overflow-hidden">
          <div ref={pageRef} className={`p-6 ${animating ? 'animate-page-turn' : ''}`}>
            <h2 className="text-3xl font-cinzel text-forest-dark text-center mb-2">{book.title}</h2>
            <p className="text-center text-forest-medium mb-8 italic">By {book.author}</p>
            
            <div className="prose prose-lg prose-stone mx-auto">
              {book.content[currentPage]}
            </div>
            
            <div className="flex justify-between items-center mt-16 text-forest-dark/70">
              <span>Page {currentPage + 1} of {book.content.length}</span>
              <div className="flex gap-4 items-center">
                <button 
                  onClick={handlePrevPage} 
                  disabled={currentPage === 0}
                  className={`${currentPage === 0 ? 'opacity-30 cursor-not-allowed' : 'hover:text-forest-dark'}`}
                >
                  <ChevronLeft size={24} />
                </button>
                <button 
                  onClick={handleNextPage}
                  disabled={currentPage === book.content.length - 1}
                  className={`${currentPage === book.content.length - 1 ? 'opacity-30 cursor-not-allowed' : 'hover:text-forest-dark'}`}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="absolute bottom-0 left-0 w-full h-24 pointer-events-none bg-gradient-to-t from-parchment-dark/30 to-transparent"></div>
        </div>
      </div>
    </div>
  );
};

export default ReadingView;
