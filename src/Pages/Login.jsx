import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../context/firebase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
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
              Login
            </h2>
            <div
              className="d-flex align-items-center justify-content-center flex-column login"
              style={{ padding: "30px" }}
            >
              <form
                style={{ width: "300px" }}
                className="mb-3"
                onSubmit={handleSubmit}
              >
                <div className="input-group mb-3">
                  <input
                    style={{ height: "50px" }}
                    type="text"
                    className="input-with-icon"
                    placeholder="Email"
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    value={email}
                  />
                  <FaUser className="icon" />
                </div>
                <div className="input-group mb-4 mt-4">
                  <input
                    style={{ height: "50px" }}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                    value={password}
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
              <Link to="/signup">Don't have account?</Link>
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

export default Login;
