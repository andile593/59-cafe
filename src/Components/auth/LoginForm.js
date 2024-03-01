import { auth, googleProviderAuth } from "../../firebase/firebase";
import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const SignInAuth = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signInMethod = async (e) => {
    try {
      e.preventDefault();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User logged in:", user);
      navigate("/");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.messsage;
      console.error(`FirebaseError: ${errorCode}`, errorMessage);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProviderAuth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h2>Login</h2>
      <input
        placeholder="Email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signInMethod}>Sign In</button>

      <button onClick={signInWithGoogle}> Sign In With Google</button>
      <p >
        No account yet? <NavLink to="/signup">Sign up</NavLink>
      </p>
    </>
  );
};

export default SignInAuth;
