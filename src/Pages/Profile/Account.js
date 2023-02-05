import React, { useState } from "react";
import { UserAuth } from "../../context/Auth";
import { Link, useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
      console.log("You are logged out");
    } catch (e) {
      console.log(e.message);
    }
  };
  return (
    <div className=" account">
      <div className="accounttext">
        <h1>Email: {user && user.email}</h1>
        <button onClick={handleLogout} className="border px-6 py-2 my-4">
          Logout
        </button>{" "}
        <Link to="/">Home Page</Link>
      </div>
    </div>
  );
};

export default ProfilePage;
