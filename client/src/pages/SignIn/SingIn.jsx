/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../../redux/user/userSlice";
import OAuth from "../../components/Oauth/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});
  const {loading, error} = useSelector((state) => state.user)
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(signInStart());
      const res = await fetch("/server/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        dispatch(signInFailure(data.message));
        return;
      }
      dispatch(signInSuccess(data));
      navigate("/");
    } catch (error) {
      dispatch(signInFailure(error.message))
    }
  };

  return (
    <div className="h-[calc(100vh-72px)] w-full flex justify-center items-center bg-slate-300 px-5 md:px-0">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-96"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">Sign In</h2>

        <div className="mb-4">
          <input
            type="email"
            id="email"
            onChange={handleChange}
            name="email"
            placeholder="Email"
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none "
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            id="password"
            onChange={handleChange}
            name="password"
            placeholder="Password"
            className="w-full px-4 py-2 border border-black rounded-lg focus:outline-none "
            required
          />
        </div>
        <div>{error && <small>{error}</small>}</div>
        <button
          disabled={loading}
          type="submit"
          className="bg-black text-white px-4 py-2 rounded-lg hover:bg-transparent hover:text-black border border-black transition-all focus:outline-none  w-full"
        >
          {loading ? "Loading..." : "Sing In"}
        </button>
        <div className="text-center mt-4">
          <OAuth/>
        </div>
        <div className="mt-4 text-center">
          <p>
            Dont have an account? <Link to={"/sign-up"}>Sign Up</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
