import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { NavLink } from "react-router-dom";
import { signUp, signIn, signInWithGoogle, signOut } from '../redux/user/actions';


const AuthContainer = ({ user }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
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
                    <button onClick={handleSignInWithGoogle}>Sign In with Google</button>

                    <form>
                        <input
                            placeholder="Email..."
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <input
                            placeholder="Password..."
                            type="password"
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        <button onClick={handleSignIn}>Sign In</button>
                    </form>
                    <p >
                        No account yet? <NavLink to="/signup">Sign up</NavLink>
                    </p>

                </div>
            )}
        </div>
    );
};

export default AuthContainer;
