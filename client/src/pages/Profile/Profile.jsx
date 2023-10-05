// /* eslint-disable no-unused-vars */
// import React, { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from 'react-redux';
import { signOutUserFailure, signOutUserStart, signOutUserSuccess } from "../../redux/user/userSlice";
// import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
// import { app } from "../../firebase/firebase";

// const Profile = () => {
//   const fileRef = useRef(null);
//   const { currentUser } = useSelector((state) => state.user);
//   const [file, setFile] = useState(undefined);
//   const [filePerc, setFilePerc] = useState(0);
//   const [fileUploadError, setFileUploadError] = useState(false);
//   const [formData, setFormData] = useState({});
//   console.log(formData);
//   console.log(filePerc);
//   console.log(fileUploadError);

//   useEffect(() => {
//     if (file) {
//       handleFileUpload(file);
//     }
//   }, [file]);

//   const handleFileUpload = (file) => {
//     const storage = getStorage(app);
//     const fileName = new Date().getTime() + file.name;
//     const storageRef = ref(storage, fileName);
//     const uploadTask = uploadBytesResumable(storageRef, file);

//     uploadTask.on(
//       'state_changed',
//       (snapshot) => {
//         const progress =
//           (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
//         setFilePerc(Math.round(progress));
//       },
//       (error) => {
//         setFileUploadError(true);
//       },
//       () => {
//         getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) =>
//           setFormData({ ...formData, avatar: downloadURL })
//         );
//       }
//     );
//   };

//   return (
//     <div className="p-3 max-w-lg mx-auto">
//       <h1 className="text-3xl font-bold text-center py-5">Profile</h1>
//       <form className="flex flex-col gap-3">
//         <input
//           onChange={(e) => setFile(e.target.files[0])}
//           hidden
//           accept="image/*"
//           type="file"
//           ref={fileRef}
//         />
//         <img
//           onClick={() => fileRef.current.click()}
//           src={currentUser.avatar}
//           alt="profile"
//           className="rounded-full h-24 w-24 object-cover cursor-pointer self-center border-2 border-[#21ACEB] mt-2"
//         />
//         <input
//           type="text"
//           name=""
//           id="username"
//           placeholder="username"
//           className="border p-3 outline-none rounded-lg"
//         />
//         <input
//           type="text"
//           name=""
//           id="email"
//           placeholder="email"
//           className="border p-3 outline-none rounded-lg"
//         />
//         <input
//           type="text"
//           name=""
//           id="password"
//           placeholder="password"
//           className="border p-3 outline-none rounded-lg"
//         />
//         <button className="bg-black text-white py-2 rounded-lg hover:bg-slate-800 uppercase disabled:opacity-50">
//           Update
//         </button>
//       </form>
//       <div className="flex justify-between mt-5 font-bold">
//         <span className="text-red-500 cursor-pointer">Delete Account</span>
//         <span className="text-red-500 cursor-pointer">Sign Out</span>
//       </div>
//     </div>
//   );
// };

// export default Profile;

const Profile = () => {
  const dispatch = useDispatch()
  const { currentUser } = useSelector((state) => state.user);
  const handleSignOut = async () => {
    try{
      dispatch(signOutUserStart())
      const res = await fetch('/server/auth/signout');
      const data = await res.json()
      if(data.success === false){
        dispatch(signOutUserFailure())
        return;
      }
      dispatch(signOutUserSuccess())
    }catch(error){
      console.log(error);
    }
  }
  return (
    <div>
      <div className="flex flex-col gap-3 justify-center items-center my-5">
        <img src={currentUser.avatar} alt="" className="rounded-full h-24 w-24 object-cover cursor-pointer self-center border-2 border-[#21ACEB] mt-2"/>
        <h5>Email: {currentUser.email}</h5>
        <h5>Username: {currentUser.username}</h5>
      <button onClick={handleSignOut} className="bg-red-600 px-8 py-2 text-white rounded-md font-bold">Sign Out</button>
      </div>
      <div className="h-1 w-full bg-[#21ACEB]"></div>
    </div>
  );
};

export default Profile;
