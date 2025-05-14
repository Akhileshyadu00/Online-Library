import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Biography'];


function Home() {
 
  const books = useSelector((state) => state.books);
  const popular = books.slice(0, 4);

  return (
    <div className="p-8 space-y-10">
      <h1 className="text-4xl font-bold mb-6">Welcome to the Online Library</h1>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Categories</h2>
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${cat}`}
              className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-xl shadow"
            >
              {cat}
            </Link>
          ))}
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Popular Books</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {popular.map((book) => (
            <Link
              key={book.id}
              to={`/book/${book.id}`}
              className="border p-4 rounded-xl hover:shadow-lg transition"
            >
              <h3 className="font-semibold text-lg truncate">{book.title}</h3>
              <p className="text-sm text-gray-600">{book.author}</p>
            </Link>
          ))}
        </div>
        <Link to="/books" className="text-blue-600 hover:underline inline-block mt-2">
          See all books →
        </Link>
      </section>
    </div>
  );
}


export default Home
