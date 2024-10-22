import React from "react";

const Details = () => {
  return (
    <div className="flex-1">
      <div className="py-6 px-8 flex flex-col items-center gap-2 border-b-[1px] border-zinc-400 ">
        <img
          className="w-24 h-24 rounded-full object-cover"
          src="./avatar.png"
          alt=""
        />
        <span className="font-bold">Jane Doe</span>
        <p className="text-center text-xs">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="p-6 flex flex-col gap-6 ">
        <div className="option">
          <div className="flex items-center justify-between">
            <span>Chat Setting</span>
            <img
              className="w-6 h-6 cursor-pointer"
              src="./arrowUpIcon.svg"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between">
            <span>Privacy & Help</span>
            <img
              className="w-6 h-6 cursor-pointer"
              src="./arrowUpIcon.svg"
              alt=""
            />
          </div>
        </div>
        <div className="option">
          <div className="flex items-center justify-between">
            <span>Shared Photos</span>
            <img
              className="w-6 h-6 cursor-pointer"
              src="./arrowDownIcon.svg"
              alt=""
            />
          </div>
          <div className="flex items-center justify-between my-2">
            <div className="flex gap-4 justify-between">
              <img
                className="w-8 h-auto rounded-sm"
                src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/3d0f6/MainAfter.avif"
                alt=""
              />
              <span className="text-xs text-zinc-400">photo_2024_2.png</span>
            </div>

            <img
              className="w-4 h-4 cursor-pointer"
              src="./downloadIcon.svg"
              alt=""
            />
          </div>
          
        </div>
        <div className="option">
          <div className="flex items-center justify-between">
            <span>Shared Files</span>
            <img
              className="w-6 h-6 cursor-pointer"
              src="./arrowUpIcon.svg"
              alt=""
            />
          </div>
        </div>
        <button className="px-8 py-1.5 bg-red-600 border-none rounded-lg text-white cursor-pointer hover:bg-red-700 text-sm font-bold">Block User</button>
        <button className="px-8 py-1.5 bg-blue-600 border-none rounded-lg text-white cursor-pointer hover:bg-blue-700 text-sm font-bold">Logout</button>

      </div>
    </div>
  );
};

export default Details;
