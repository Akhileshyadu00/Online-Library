import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi', 'Fantasy', 'Biography'];

function Home() {
  const books = useSelector((state) => state.books);
  const popular = books.slice(0, 4);

  return (
      <div className="min-h-screen max-w-screen bg-gradient-to-br from-gray-300 via-blue-300 to-gray-300 flex justify-center items-center px-4 py-10">
       <div className="w-full max-w-7xl bg-gradient-to-br from-slate-100 via-gray-400 to-gray-200 rounded-3xl shadow-xl p-10 space-y-12">
        <h1 className="text-4xl font-extrabold text-center text-gray-800">
          📚 Welcome to the Online Library
        </h1>

        {/* Categories Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-700 text-center">Categories</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat) => (
              <Link
                key={cat}
                to={`/books/${cat}`}
                title={`Browse ${cat} books`}
                className="px-6 py-2 bg-indigo-500 text-white hover:bg-indigo-600 rounded-full shadow-md text-base font-medium transition duration-200 transform hover:scale-105"
              >
                {cat}
              </Link>
            ))}
          </div>
        </section>

        {/* Popular Books Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-700 text-center">Popular Books</h2>
          {popular.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {popular.map((book) => (
                <Link
                  key={book.id}
                  to={`/book/${book.id}`}
                  title={`View details for ${book.title}`}
                  className="bg-white border border-gray-200 p-4 rounded-xl hover:shadow-md transition duration-200 transform hover:scale-105"
                >
                  <div className="h-40 mb-4">
                    <img
                      src={book.imageURL}
                      alt={book.title}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>
                  <h3 className="font-semibold text-lg truncate text-gray-800">
                    {book.title}
                  </h3>
                  <p className="text-sm text-gray-600">{book.author}</p>
                </Link>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 text-center">
              No popular books available at the moment.
            </p>
          )}
          <div className="text-center">
            <Link
              to="/books"
              className="text-indigo-600 hover:underline font-medium"
            >
              See all books →
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
