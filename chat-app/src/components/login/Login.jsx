import React, { useState } from "react";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  return (
    <div className="w-full h-full flex items-center gap-16">
      <div className="flex-1 flex flex-col items-center gap-10">
        <h2>Welcome back,</h2>
        <form className="flex flex-col items-center justify-center gap-6">
          <input className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg" type="text" placeholder="Email" name="email" />
          <input className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg" type="password" placeholder="password" name="password" />
          <button className="w-full p-2 border-none bg-sky-600 text-lg font-medium text-white rounded-lg cursor-pointer">Sign In</button>
        </form>
      </div>
      <div className="h-[80%] w-[2px] bg-gray-500">

      </div>
      <div className="flex-1 flex flex-col items-center gap-10">
        <h2>Create an Account</h2>
        <form className="flex flex-col items-center justify-center gap-6">
          <label className="w-full flex items-center justify-between cursor-pointer underline" htmlFor="file">
            <img className="w-36 h-36 rounded-full object-cover opacity-75" src={avatar.url || "./avatar.png"} alt="" />
            Upload an Image</label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg" type="text" placeholder="Username" name="username" />
          <input className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg" type="text" placeholder="Email" name="email" />
          <input className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg" type="password" placeholder="password" name="password" />
          <button className="w-full p-2 border-none bg-sky-600 text-lg font-medium text-white rounded-lg cursor-pointer">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
