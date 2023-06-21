import React from 'react';
import { getAuth, signOut } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';

function GoogleLogoutButton() {
  const handleGoogleLogout = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        // Handle successful logout
        console.log('Logged out successfully');
        // Reinitialize the Firebase app after logout
        initializeApp(firebaseConfig);
      })
      .catch((error) => {
        // Handle logout error
        console.error('Error signing out:', error);
      });
  };

  return (
    <button
      onClick={handleGoogleLogout}
      className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
    >
      Disconnect
    </button>
  );
}

export default GoogleLogoutButton;
