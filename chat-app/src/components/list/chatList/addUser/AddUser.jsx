import React from "react";

const AddUser = () => {
  return (
    <div className="w-[max-content] h-[max-content] p-12 bg-slate-800 rounded-lg absolute top-0 bottom-0 right-0 left-0 m-auto">
      <form className="flex gap-6">
        <input
          className="p-2 rounded-lg border-none outline-none"
          type="text"
          placeholder="Username"
          name="username"
        />
        <button className="p-2 rounded-lg bg-blue-600 text-white border-none cursor-pointer">Search</button>
      </form>
      <div className="mt-10 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <span>Jone Doe</span>
        </div>
        <button className="p-2 text-xs rounded-lg bg-blue-600 text-white border-none cursor-pointer">
          Add User
        </button>
      </div>
    </div>
  );
};

export default AddUser;
