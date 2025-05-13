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
      <h1 className='font-bold'>Library Management</h1>
      <nav className="bg-blue-400 text-white p-4 flex gap-6 shadow-md">
        <Link to="/" className="font-bold hover:underline">
          Home
        </Link>
        <Link to="/books" className="hover:underline">
          Browse Books
        </Link>
        <Link to="/add-book" className="hover:underline">
          Add Book
        </Link>
      </nav>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
        <Route path="/books/:category" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="*" element={<Error />} />
       </Routes> 
    </BrowserRouter>
  )
}

export default App
