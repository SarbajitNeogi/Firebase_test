import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";
import { signOut } from "firebase/auth";
import "./styles.css"

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      // Sign-out successful.
      navigate("/login");
      console.log("Signed out successfully");
      console.log(auth)
      })
      .catch((error) => {
        // An error happened.
      });
  };

  return (
    <>
      <nav>
        <p>Welcome Home</p>

        <div>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </nav>
    </>
  );
};

export default Home;
