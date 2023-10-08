// /* eslint-disable no-unused-vars */
// import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  signOutUserFailure,
  signOutUserStart,
  signOutUserSuccess,
} from "../../redux/user/userSlice";
import {Link} from 'react-router-dom'

const Profile = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.user);
  const handleSignOut = async () => {
    try {
      dispatch(signOutUserStart());
      const res = await fetch("/server/auth/signout");
      const data = await res.json();
      if (data.success === false) {
        dispatch(signOutUserFailure());
        return;
      }
      dispatch(signOutUserSuccess());
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center my-5">
        <img
          src={currentUser.avatar}
          alt=""
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center border-2 border-[#21ACEB] mt-2"
        />
        <h5>Email: {currentUser.email}</h5>
        <h5>Username: {currentUser.username}</h5>
        <div className="flex justify-center items-center gap-5">
        <button
          onClick={handleSignOut}
          className="bg-red-600 px-8 py-2 text-white rounded-md font-bold"
        >
          Sign Out
        </button>
        <Link to={'/create-listing'} className="bg-green-500 px-4 py-2 rounded-md text-white font-bold">Create Listing</Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
