import React, { useRef, useState } from "react";
import "./login.css";
//addotional

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { customAnimation } from "../../../App";

function SignIn() {
  const [users, setusers] = useState(JSON.parse(localStorage.getItem("userData")));
  const emailRef = useRef(null);
  const passwordRef = useRef(null);


  // validationFunction

  const navigate = useNavigate();
  const loginValidation = (e) => {
    e.preventDefault()
    users.map((user) => {
      if (
        emailRef.current.value == user.name &&
        passwordRef.current.value == user.password
      ) {
        navigate("/home");
      } else {
        if (
          emailRef.current.value !== user.name &&
          passwordRef.current.value == user.password
        ) {
          emailRef.current.style.outline = "1px solid red";
        } else if (
          emailRef.current.value == user.name &&
          passwordRef.current.value !== user.password
        ) {
          passwordRef.current.style.outline = "1px solid red";
        } else {
          emailRef.current.style.outline = "1px solid red";
          passwordRef.current.style.outline = "1px solid red"
        }
        // emailRef.current.value = "";
        // passwordRef.current.value = "";
      }
    });
  };
  return (
    <motion.form
      onSubmit={loginValidation}
      variants={customAnimation}
      initial="hidden"
      animate="visible"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white w-full h-full flex flex-col p-10 gap-6 rounded-xl overflow-hidden sm:w-4/6 sm:h-5/6 shadow-lg md:w-1/2 md:h-4/6 lg:w-[440px]"
    >
      <span className="font-thin">Welcome back! 👋</span>
      <h1 className="text-black text-3xl font-thin">Log in to your account</h1>
      {/* email */}
      <div id="login-input">
        <label className="font-thin" htmlFor="email">
          Your email
        </label>
        <input ref={emailRef} id="email" placeholder="user" type="text" />
      </div>
      {/* password */}
      <div id="login-input">
        <label className="font-thin" htmlFor="password">
          Password
        </label>
        <input
          ref={passwordRef}
          id="password"
          placeholder="124"
          type="password"
        />
      </div>
      <button id="login-button" type="submit">
        CONTINUE
      </button>
      <a id="login-a" href="#">
        Forget your password?
      </a>
      <span className="text-center">
        Don’t have an account?{" "}
        <a id="login-a">
          {" "}
          <Link to="/">Sign up</Link>
        </a>
      </span>
    </motion.form>
  );
}

export default SignIn;
