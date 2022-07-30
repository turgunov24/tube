import React from "react";
import SignUp from "../additional-login/sign-up";
import { Link, Routes, Route, BrowserRouter } from "react-router-dom";
import ".././login.css";
import SignIn from "../additional-login/sign-in";

function LoginSection() {
  return (
    <section
      id="login-page"
      className="w-full h-full flex items-center justify-center"
    >
      <div
        id="login-page-relative"
        className="relative z-10 bg-white w-2/6 h-3/5 rounded-xl overflow-hidden shadow-lg"
      >
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </div>
    </section>
  );
}

export default LoginSection;
