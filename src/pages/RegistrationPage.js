import React from 'react';
import { Link } from 'react-router-dom';

function RegistrationPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl mb-4">Registration Page</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" className="ml-2 p-1 rounded border"/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" className="ml-2 p-1 rounded border"/>
          </div>
          <input type="submit" value="Submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"/>
        </form>
        <Link to="/" className="block mt-4 text-blue-500 underline hover:text-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default RegistrationPage;
