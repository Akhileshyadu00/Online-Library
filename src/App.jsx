import React from 'react'
import { Link, Route, Routes, BrowserRouter } from 'react-router-dom'
import './App.css'
import Home from './Components/Home'
import BookList from './Components/BookList'
import AddBook from './Components/AddBook'
import Error from './Components/Error'
import BookDetails from './Components/BookDetails'

function App() {
  return (
    <BrowserRouter>
      {/* Navbar */}
      <nav className="bg-gradient-to-br from-gray-300 via-blue-500 to-gray-300 text-gray-700 p-6 shadow-lg">
        <div className="container mx-auto flex justify-center gap-8 text-lg font-medium">
          <Link
            to="/"
            className="hover:underline hover:text-gray-950 transition-all duration-200"
          >
            Home
          </Link>
          <Link
            to="/books"
            className="hover:underline hover:text-gray-950 transition-all duration-200"
          >
            Browse Books
          </Link>
          <Link
            to="/add-book"
            className="hover:underline hover:text-gray-950 transition-all duration-200"
          >
            Add Book
          </Link>
        </div>
      </nav>

      {/* Page content centered */}
      <div className="flex justify-center items-center min-h-[calc(100vh-64px)] p-6 bg-gray-50">
        <div className="w-full max-w-7xl bg-white rounded-xl shadow-xl p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/books" element={<BookList />} />
            <Route path="/books/:category" element={<BookList />} />
            <Route path="/book/:id" element={<BookDetails />} />
            <Route path="/add-book" element={<AddBook />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
