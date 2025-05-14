import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Utils/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {
  const [form, setForm] = useState({
    title: '',
    author: '',
    imageURL: '',
    category: '',
    description: '',
    rating: '',
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const validate = () => {
    const errs = {};
    if (!form.title) errs.title = 'Title required';
    if (!form.author) errs.author = 'Author required';
    if (!form.category) errs.category = 'Category required';
    if (!form.description) errs.description = 'Description required';
    if (!form.imageURL) {
      errs.imageURL = 'Image URL required';
    } else if (!isValidUrl(form.imageURL)) {
      errs.imageURL = 'Invalid URL';
    }
    if (!form.rating || isNaN(form.rating) || form.rating < 0 || form.rating > 5) {
      errs.rating = 'Rating must be between 0 and 5';
    }
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    dispatch(addBook({ ...form, rating: Number(form.rating) }));
    navigate('/books');
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen max-w-screen bg-gradient-to-br from-gray-300 via-blue-300 to-gray-300 flex justify-center items-center px-4 py-10">
      <div className="w-full max-w-3xl bg-gradient-to-br from-slate-100 via-gray-400 to-gray-200 rounded-3xl shadow-xl p-10 space-y-10">
        <h1 className="text-3xl font-extrabold text-center text-gray-800">Add a New Book</h1>
        <form onSubmit={handleSubmit} className="space-y-5">
          {['title', 'author', 'imageURL', 'category', 'rating'].map((field) => (
            <div key={field}>
              <input
                name={field}
                value={form[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors[field] && (
                <p className="text-red-600 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              rows="4"
              className="border p-3 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.description && (
              <p className="text-red-600 text-sm mt-1">{errors.description}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-green-600 text-white px-5 py-2 rounded-lg hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddBook;
