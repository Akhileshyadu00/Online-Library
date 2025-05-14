import React from 'react'
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';


function BookDetails() {

  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => b.id === id)
  );

  if (!book) {
    return (
      <div className="p-8 space-y-4">
        <h2 className="text-xl font-semibold">Book not found.</h2>
        <Link to="/books" className="text-blue-600 hover:underline">
          Back to Browse
        </Link>
      </div>
    );
  }

  return (
      <div className="p-8 space-y-6 max-w-2xl mx-auto">
      <h1 className="text-4xl font-bold">{book.title}</h1>
      <p className="text-xl italic">by {book.author}</p>
      <p className="text-gray-700">{book.description}</p>
      <p className="font-semibold">Rating: {book.rating}</p>
      <Link to="/books" className="text-blue-600 hover:underline">
        ← Back to Browse
      </Link>
    </div>
  )
}

export default BookDetails
