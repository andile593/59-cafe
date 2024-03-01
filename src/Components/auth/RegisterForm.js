import { auth } from "../../firebase/firebase";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";

const SignUpAuth = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUpMethod = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);
      navigate("/login");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`FirebaseError: ${errorCode}`, errorMessage);
    }
  };

  return (
    <>
      <h2>Register</h2>
      <input
        placeholder="Email..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password..."
        value={password}
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signUpMethod}>Sign in</button>
      <p>
        Already have an account? <NavLink to="/login">Sign in</NavLink>
      </p>
    </>
  );
};

export default SignUpAuth;
