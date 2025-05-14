import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';
import { useState } from 'react';

function BookList() {
 
  const { category } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const q = searchParams.get('q') || '';
  const [term, setTerm] = useState(q);
  const books = useSelector((state) => state.books);

  const filtered = books.filter((b) => {
    const matchesCategory = !category || b.category === category;
    const matchesSearch =
      b.title.toLowerCase().includes(q.toLowerCase()) ||
      b.author.toLowerCase().includes(q.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams(term ? { q: term } : {});
  };

  return (
    <div className="p-8 space-y-6">
      <h1 className="text-3xl font-bold">
        {category ? `${category} Books` : 'All Books'}
      </h1>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search by title or author"
          className="border p-2 rounded-l w-full max-w-xl"
        />
        <button className="bg-blue-600 text-white px-4 py-2 rounded-r">
          Search
        </button>
      </form>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((book) => (
          <div key={book.id} className="border rounded-xl p-4 flex flex-col">
            <div className="flex-grow">
              <h3 className="font-semibold text-lg truncate">{book.title}</h3>
              <p className="text-sm text-gray-600 mb-3">{book.author}</p>
            </div>
            <Link
              to={`/book/${book.id}`}
              className="text-blue-600 hover:underline mt-auto"
            >
              View Details →
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default BookList
