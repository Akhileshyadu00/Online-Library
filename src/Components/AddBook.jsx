import React from 'react'
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBook } from '../Utils/booksSlice';
import { useNavigate } from 'react-router-dom';

function AddBook() {

  const [form, setForm] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    rating: '',
  });
  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.title) errs.title = 'Title required';
    if (!form.author) errs.author = 'Author required';
    if (!form.category) errs.category = 'Category required';
    if (!form.description) errs.description = 'Description required';
    if (
      !form.rating ||
      isNaN(form.rating) ||
      form.rating < 0 ||
      form.rating > 5
    )
      errs.rating = 'Rating 0‑5';
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
     <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Add a New Book</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        {['title', 'author', 'category', 'rating'].map((field) => (
          <div key={field}>
            <input
              name={field}
              value={form[field]}
              onChange={handleChange}
              placeholder={
                field.charAt(0).toUpperCase() + field.slice(1)
              }
              className="border p-2 rounded w-full"
            />
            {errors[field] && (
              <p className="text-red-600 text-sm mt-1">
                {errors[field]}
              </p>
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
            className="border p-2 rounded w-full"
          />
          {errors.description && (
            <p className="text-red-600 text-sm mt-1">
              {errors.description}
            </p>
          )}
            </div>
        <button className="bg-green-600 text-white px-5 py-2 rounded hover:opacity-90">
          Add Book
        </button>
      </form>
    </div>
  )
}

export default AddBook
