
import React, { useState, useEffect } from 'react';
import ForestBackground from '@/components/ForestBackground';
import Bookshelf from '@/components/Bookshelf';
import CrystalBallSearch from '@/components/CrystalBallSearch';
import ReadingView from '@/components/ReadingView';
import { Book } from '@/types/book';
import { books as allBooks } from '@/data/books';

const Index = () => {
  const [books, setBooks] = useState<Book[]>(allBooks);
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  
  const handleSearch = (query: string) => {
    setSearchQuery(query);
    
    if (query.trim() === '') {
      setBooks(allBooks);
      return;
    }
    
    const filteredBooks = allBooks.filter(book => 
      book.title.toLowerCase().includes(query.toLowerCase()) ||
      book.author.toLowerCase().includes(query.toLowerCase())
    );
    
    setBooks(filteredBooks);
  };
  
  const handleSelectBook = (book: Book) => {
    setSelectedBook(book);
    // Play magic sound effect when opening a book
    const audio = new Audio('/magic-sound.mp3');
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Handle browser autoplay restrictions
      console.log('Audio playback prevented by browser');
    });
  };
  
  return (
    <>
      <ForestBackground />
      
      <div className="min-h-screen flex flex-col items-center justify-start py-12 px-4 relative overflow-x-hidden">
        <div className="w-full max-w-screen-xl mx-auto z-10">
          <header className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-cinzel mb-4">
              <span className="text-gold-light">Enchanted</span> <span className="text-gold">Library</span>
            </h1>
            <p className="text-xl text-gold-light/80 font-cormorant italic">
              Discover ancient knowledge and magical stories
            </p>
          </header>
          
          <CrystalBallSearch onSearch={handleSearch} className="mb-12" />
          
          {books.length > 0 ? (
            <Bookshelf 
              books={books} 
              onSelectBook={handleSelectBook} 
            />
          ) : (
            <div className="text-center py-12">
              <p className="text-xl text-gold-light/70 italic">
                No magical tomes match your request. Try a different incantation...
              </p>
            </div>
          )}
        </div>
      </div>
      
      {selectedBook && (
        <ReadingView 
          book={selectedBook} 
          onClose={() => setSelectedBook(null)} 
        />
      )}
    </>
  );
};

export default Index;
