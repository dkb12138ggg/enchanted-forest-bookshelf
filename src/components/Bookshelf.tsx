
import React, { useState } from 'react';
import MagicalBook from './MagicalBook';
import { Book } from '@/types/book';

interface BookshelfProps {
  books: Book[];
  onSelectBook: (book: Book) => void;
}

const Bookshelf: React.FC<BookshelfProps> = ({ books, onSelectBook }) => {
  return (
    <div className="py-6">
      <h2 className="text-3xl font-cinzel text-gold text-center mb-8">
        <span className="inline-block animate-float" style={{ animationDelay: '0.5s' }}>✦</span>
        <span className="px-4">Enchanted Collection</span>
        <span className="inline-block animate-float" style={{ animationDelay: '1.2s' }}>✦</span>
      </h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4">
        {books.map((book) => (
          <div key={book.id} className="flex justify-center">
            <MagicalBook
              title={book.title}
              author={book.author}
              coverImage={book.coverImage}
              onClick={() => onSelectBook(book)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
