import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, Link } from 'react-router-dom';

function BookDetails() {
  const { id } = useParams();
  const book = useSelector((state) =>
    state.books.find((b) => String(b.id) === id)
  );

  if (!book) {
    return (
      <div className="min-h-screen w-full bg-gradient-to-br from-indigo-300 via-purple-300 to-pink-300 flex justify-center items-center px-4 py-10">
        <div className="w-full max-w-2xl bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 rounded-3xl shadow-xl p-8 space-y-6 text-center">
          <h2 className="text-xl font-semibold text-gray-800">Book not found.</h2>
          <Link to="/books" className="text-blue-600 hover:underline font-medium">
            Back to Browse
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen max-w-screen bg-gradient-to-br from-gray-300 via-blue-300 to-gray-300 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-4xl bg-gradient-to-br from-slate-100 via-gray-400 to-gray-200 rounded-3xl shadow-xl p-10 space-y-8">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">{book.title}</h1>

        {book.imageURL && (
          <img
            src={book.imageURL}
            alt={book.title || "Book cover"}
            className="mx-auto w-auto h-auto max-w-full max-h-[400px] rounded-xl shadow-md object-contain"
          />
        )}

        <p className="text-xl italic text-center text-gray-600">by {book.author}</p>
        <p className="text-lg text-gray-700 leading-relaxed">{book.description}</p>
        <p className="font-semibold text-lg text-gray-800">Rating: {book.rating}</p>

        <div className="text-center pt-4">
          <Link to="/books" className="text-blue-600 hover:underline font-medium">
            ← Back to Browse
          </Link>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
