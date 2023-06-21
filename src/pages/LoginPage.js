import React from 'react';
import { Link } from 'react-router-dom';
import GoogleLoginButton from '../components/GoogleLoginButton';
import GoogleLogoutButton from '../components/GoogleLogoutButton';
import Cookies from 'js-cookie';

function LoginPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.username.value;
    Cookies.set('login', username);
    // Further logic here, such as sending these values to an API
  };

  const handleDeleteCookie = () => {
    Cookies.remove('login');
    // Further logic here, such as informing the user the cookie has been removed
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl mb-4">Login Page</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" name="username" className="ml-2 p-1 rounded border"/>
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input id="password" type="password" name="password" className="ml-2 p-1 rounded border"/>
          </div>
          <input type="submit" value="Submit" className="mt-4 py-2 px-4 bg-blue-500 text-white rounded hover:bg-blue-600"/>
        </form>
        <button onClick={handleDeleteCookie} className="mt-4 py-2 px-4 bg-red-500 text-white rounded hover:bg-red-600">
          Delete Cookie
        </button>
        <GoogleLoginButton className="p-1"/>
        <GoogleLogoutButton className="p-1"/>
        <Link to="/" className="block mt-4 text-blue-500 underline hover:text-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default LoginPage;
