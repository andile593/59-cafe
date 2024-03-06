import React from "react";
import { useDispatch } from 'react-redux';
import { signUp, signIn, signInWithGoogle, signOut } from '../redux/user/actions';


const AuthContainer = ({ user }) => {
    const dispatch = useDispatch();

    const handleSignUp = async (email, password) => {
      dispatch(signUp(email, password));
    };
  
    const handleSignIn = async (email, password) => {
      dispatch(signIn(email, password));
    };
  
    const handleSignInWithGoogle = async () => {
      dispatch(signInWithGoogle());
    };
  
    const handleSignOut = async () => {
      dispatch(signOut());
    };

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.displayName}</p>
          <button onClick={handleSignOut}>Sign Out</button>
        </div>
      ) : (
        <div>
          <p>Please sign in</p>
          <button onClick={handleSignIn}>Sign In with Google</button>
        </div>
      )}
    </div>
  );
};

export default AuthContainer;
