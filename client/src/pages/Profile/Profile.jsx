/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-bold text-center py-5">Profile</h1>
      <form className="flex flex-col gap-3">
        <img
          src={currentUser.avatar}
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center border-2 border-[#21ACEB] mt-2"
        />
        <input
          type="text"
          name=""
          id="username"
          placeholder="username"
          className="border p-3 outline-none rounded-lg"
        />
        <input
          type="text"
          name=""
          id="email"
          placeholder="email"
          className="border p-3 outline-none rounded-lg"
        />
        <input
          type="text"
          name=""
          id="password"
          placeholder="update password"
          className="border p-3 outline-none rounded-lg"
        />
        <button className="bg-black text-white py-2 rounded-lg hover:bg-slate-800 uppercase disabled:opacity-50">
          Update
        </button>
      </form>
      <div className="flex justify-between mt-5 font-bold">
        <span className="text-red-500 cursor-pointer">Delete Account</span>
        <span className="text-red-500 cursor-pointer">Sign Out</span>
      </div>
    </div>
  );
};

export default Profile;
