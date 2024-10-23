import React, { useState } from "react";

const ChatList = () => {
  const [addMode, setAddMode] = useState(false);

  return (
    <div className="flex-1 pl-4 overflow-scroll">
      <div className="flex items-center gap-2 mb-4">
        <div className="flex-1 bg-gray-900 opacity-35 flex items-center gap-4 rounded-lg p-2">
          <img className="w-4 h-4" src="./searchIcon.svg" alt="" />
          <input
            className="bg-transparent border-none outline-none flex-1 text-xs"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="bg-gray-900 opacity-35 rounded-lg p-2">
          <img
            onClick={() => setAddMode((prev) => !prev)}
            className="w-4 h-4 cursor-pointer"
            src={addMode ? "./minusIcon.svg" : "./plusIcon.svg"}
            alt=""
          />
        </div>
      </div>
      <div className="flex flex-col overflow-scroll">
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
        <div className="flex items-center gap-2 p-2 cursor-pointer border-b-[1px] border-zinc-400">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-1 cursor-pointer">
            <span className="text-sm">Jane Doe</span>
            <p className="text-xs">Hello!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatList;
