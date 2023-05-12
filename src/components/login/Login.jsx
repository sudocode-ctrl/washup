import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
// import {
//   createUserWithEmailAndPassword,
//   signInWithEmailAndPassword,
//   onAuthStateChanged,
//   signOut,
// } from "firebase/auth";
// import { auth } from "../../firebase-config";
const Login = (props) => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  useEffect(() => {
    console.log(credentials);
  }, [credentials]);
  // const [user, setUser] = useState({});
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  // });
  const navigate = useNavigate();
  const userRef = useRef();
  const passRef = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCredentials({
      email: userRef.current.value,
      password: passRef.current.value,
    });
    console.log(credentials);
    // try {
    //   const user = await signInWithEmailAndPassword(
    //     auth,
    //     credentials.email,
    //     credentials.password
    //   );
    //   localStorage.setItem("washupUser", user.email);
    //   console.log(user);
    // } catch (error) {
    //   console.log(error.message);
    // }

    if (false) {
      alert("Logged in Successfully");

      // navigate("/home");
    } else {
      console.log("invalid credentials", "danger");
      alert("Invalid credentials", "danger");
    }
  };

  return (
    <div className="mt-3 login">
      <div className="login-box">
        <h2 className="m-80">Login to your User Account</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address:
            </label>
            <div>
              <input
                type="email"
                ref={userRef}
                className="form-control"
                id="email"
                name="email"
                aria-describedby="emailHelp"
              />
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password:
            </label>
            <div>
              <input
                type="password"
                ref={passRef}
                className="form-control"
                name="password"
                id="password"
              />
            </div>
          </div>

          <button type="submit" className="btn ">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
