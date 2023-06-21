import React, { useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { firebaseConfig } from '../firebaseConfig';

function GoogleLoginButton() {
  let auth, provider;

  useEffect(() => {
    // Initialize Firebase with the configuration
    const app = initializeApp(firebaseConfig);
    auth = getAuth(app);
    provider = new GoogleAuthProvider();
  }, []);

  const handleGoogleLogin = () => {
    signOut(auth) // Sign out the user before initiating sign-in
      .then(() => {
        // Handle successful sign-out
        console.log('Signed out successfully');
        signInWithGoogle();
      })
      .catch((error) => {
        // Handle sign-out error
        console.error('Error signing out:', error);
      });
  };

  const signInWithGoogle = () => {
    // Force account selection each time by setting the prompt option to 'select_account'
    provider.setCustomParameters({ prompt: 'select_account' });
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful sign-in
        console.log('Logged in with Google:', result.user);
      })
      .catch((error) => {
        // Handle sign-in error
        console.error('Error signing in with Google:', error);
      });
  };

  return (
    <button
      onClick={handleGoogleLogin}
      className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
    >
      Connect with Google
    </button>
  );
}

export default GoogleLoginButton;
