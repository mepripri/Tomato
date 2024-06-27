import React, { useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/assets";

function LoginPopup({ setShowLogin }) {
  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <div className="login-popup">
      <form className="login-popup-container" action="">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input type="text" name="" id="" placeholder="Your Name" required />
          )}
          <input type="email" name="" id="" placeholder="Your Email" required />
          <input
            type="password"
            name=""
            id=""
            placeholder="Password"
            required
          />
          <button>
            {currentState === "Sign up" ? "Create Account" : "Login"}
          </button>
        </div>
        <div className="login-popup-condition">
          <input type="checkbox" name="" id="" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account?{" "}
            <span onClick={() => setCurrentState("Sign up")}>Click here</span>
          </p>
        ) : (
          <p>
            Already have an account?{" "}
            <span onClick={() => setCurrentState("Login")}>Login here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
