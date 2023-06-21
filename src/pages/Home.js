import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl mb-6">Home Page</h1>
        <div className="space-y-4">
          <Link to="/login" className="block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Login Page</Link>
          <Link to="/register" className="block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Registration Page</Link>
          <Link to="/contact" className="block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Contact Page</Link>
          <Link to="/profile" className="block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Profile Page</Link>
          <Link to="/localview" className="block py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600">Localview Page</Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
