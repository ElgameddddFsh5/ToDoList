import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/Auth.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../context/firebase.js";
const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((err) => {
        setError(err);
      });
  };

  return (
    <div
      className="d-flex align-items-center loginpage"
      style={{
        height: "100vh",
      }}
    >
      <div className="container ">
        <div className="row ">
          <div className="col-md-6 mx-auto ">
            <h2
              className="text-center mb-5 "
              style={{ fontSize: "50px", color: "#35497e" }}
            >
              Sign Up
            </h2>
            <div
              className="d-flex align-items-center justify-content-center   flex-column login"
              style={{ padding: "30px" }}
            >
              <form
                style={{ width: "300px" }}
                className="mb-3"
                onSubmit={handleSubmit}
              >
                <div className="input-group mb-3">
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ height: "50px" }}
                    type="text"
                    className=" input-with-icon"
                    placeholder="Email"
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-group mb-4 mt-4">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    style={{ height: "50px" }}
                    type="password"
                    className=" input-with-icon"
                    placeholder="Password"
                  />
                  <FaLock className="icon" />
                </div>
                <button
                  type="submit"
                  className="btn btn-primary mt-4"
                  style={{ width: "100%" }}
                >
                  Submit
                </button>
              </form>
              <Link to="/login">Already Have an account?</Link>
              <p>{error}</p>
              <Link to="/" className="mt-5">
                Home Page
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
