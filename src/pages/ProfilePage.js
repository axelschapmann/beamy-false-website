import React from 'react';
import { Link } from 'react-router-dom';

function ProfilePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-500">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center">
        <h1 className="text-4xl mb-4">Profile Page</h1>
        <p className="text-lg mb-4">Email: utilisateur.test@localview.fr</p>
        <Link to="/" className="block mt-4 text-blue-500 underline hover:text-blue-600">
          Back to Home
        </Link>
      </div>
    </div>
  );
}

export default ProfilePage;
