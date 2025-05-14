import React from 'react';
import { Link } from 'react-router-dom';

function Error() {
  return (
    <div className="min-h-screen max-w-screen bg-gradient-to-br from-gray-300 via-blue-300 to-gray-300 flex justify-center items-center px-4 py-10">
       <div className="w-full max-w-7xl bg-gradient-to-br from-slate-100 via-gray-400 to-gray-200 rounded-3xl shadow-xl p-10 space-y-12">
        <h1 className="text-6xl font-extrabold text-gray-800">404</h1>
        <p className="text-xl text-gray-700">Page Not Found</p>
        <Link
          to="/"
          className="text-blue-600 hover:underline font-semibold text-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default Error;
