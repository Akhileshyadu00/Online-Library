import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useParams, useSearchParams } from 'react-router-dom';

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
     <div className="min-h-screen max-w-screen bg-gradient-to-br from-gray-300 via-blue-300 to-gray-300 flex justify-center items-center px-4 py-10">
       <div className="w-full max-w-7xl bg-gradient-to-br from-slate-100 via-gray-400 to-gray-200 rounded-3xl shadow-xl p-10 space-y-12">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          {category ? `${category} Books` : 'All Books'}
        </h1>

        {/* Search Form */}
        <form onSubmit={handleSubmit} className="flex justify-center gap-4">
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

        {/* Book Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((book) => (
            <div key={book.id} className="border border-gray-200 bg-white p-4 rounded-xl hover:shadow-md transition">
              <div className="flex flex-col h-full">
                <h3 className="font-semibold text-lg truncate text-gray-800">{book.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{book.author}</p>
                <Link
                  to={`/book/${book.id}`}
                  className="text-blue-600 hover:underline mt-auto"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BookList;
