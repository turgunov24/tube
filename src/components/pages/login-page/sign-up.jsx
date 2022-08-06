import React, { useRef } from "react";
import "./login.css";
//additional
import { motion } from "framer-motion";
import { customAnimation } from "../../../App";
import { Link, useNavigate } from "react-router-dom";

export const youtubeUsers = [
  {
    name: "user",
    password: 124,
  },
];

function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  // validationFunction

  const navigate = useNavigate();
  const signValidation = (e) => {
    e.preventDefault();

    if (emailRef.current.value !== "" && passwordRef.current.value !== "") {
      youtubeUsers.push({
        name: emailRef.current.value,
        password: passwordRef.current.value,
      });
      navigate("/home");
    } else {
      if (emailRef.current.value == "" && passwordRef.current.value !== "") {
        emailRef.current.style.boxShadow = "0px 0px 10px red";
      } else if (
        emailRef.current.value != "" &&
        passwordRef.current.value == ""
      ) {
        passwordRef.current.style.boxShadow = "0px 0px 10px red";
      } else {
        emailRef.current.style.boxShadow = "0px 0px 10px red";
        passwordRef.current.style.boxShadow = "0px 0px 10px red";
      }
    }
    localStorage.setItem("userData", JSON.stringify(youtubeUsers));
  };

  return (
    <motion.form
      onSubmit={signValidation}
      variants={customAnimation}
      initial="hidden"
      animate="visible"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-white w-full h-full flex flex-col p-10 gap-6 rounded-xl overflow-hidden sm:w-4/6 sm:h-5/6 shadow-lg md:w-1/2 md:h-4/6 lg:w-[440px]"
    >
      <span className="font-thin">Welcome ! 👋</span>
      <h1 className="text-black text-3xl font-thin">Sign up to your account</h1>
      {/* email */}
      <div id="login-input">
        <label className="font-thin" htmlFor="email">
          Your email
        </label>
        <input ref={emailRef} id="email" type="text" />
      </div>
      {/* password */}
      <div id="login-input">
        <label className="font-thin" htmlFor="password">
          Password
        </label>
        <input ref={passwordRef} id="password" type="password" />
      </div>
      <button id="login-button" type="submit">
        CONTINUE
      </button>
      <a id="login-a" href="#">
        Forget your password?
      </a>
      <span className="text-center">
        Have an account?{" "}
        <a id="login-a">
          {" "}
          <Link to="/signin">Log in</Link>
        </a>
      </span>
    </motion.form>
  );
}

export default SignUp;
