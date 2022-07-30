import React from "react";
import ".././login.css"

function SignIn() {
  return (
    <form className="w-full h-full flex flex-col p-10 gap-6">
      <span className="font-thin">Welcome back! 👋</span>
      <h1 className="text-black text-3xl font-thin">Sign in to your account</h1>
      {/* email */}
      <div id="login-input">
        <label className="font-thin" htmlFor="email">
          Your email
        </label>
        <input id="email" type="email" />
      </div>
      {/* password */}
      <div id="login-input">
        <label className="font-thin" htmlFor="password">
          Password
        </label>
        <input id="password" type="password" />
      </div>
      <button id="login-button" type="submit">
        CONTINUE
      </button>
      <a id="login-a" href="#">
        Forget your password?
      </a>
      <span className="text-center">
        Don’t have an account? <a id="login-a"> Sign up</a>
      </span>
    </form>
  );
}

export default SignIn;
