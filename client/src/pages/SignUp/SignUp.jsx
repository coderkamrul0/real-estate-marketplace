/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="h-[calc(100vh-72px)] w-full flex justify-center items-center bg-slate-300">
      <form className="bg-white p-8 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-96">
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign Up</h2>
        <div className="mb-4">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none "
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none "
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none "
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-black border border-black transition-all focus:outline-none  w-full"
        >
          Sign Up
        </button>
        <div className="text-center mt-4">
          <button className="bg-black text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-black border border-black transition-all focus:outline-none  w-full">
            Google Login
          </button>
        </div>
        <div className="mt-4 text-center">
          <p>
            Already have an account? <Link to={"/sign-in"}>Login</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
