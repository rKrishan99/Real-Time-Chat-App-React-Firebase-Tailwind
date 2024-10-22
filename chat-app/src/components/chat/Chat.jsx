import React from "react";

const Chat = () => {
  return (
    <div className="flex-[2] border-l-[1px] border-r-[1px] border-zinc-400 h-full">
    {/* top container */}
      <div className="p-4 flex items-center justify-between border-b-[1px] border-zinc-400 h-16">
        <div className="flex items-center gap-4">
          <img className="w-10 h-10 rounded-full object-cover" src="./avatar.png" alt="" />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold">Jane Doe</span>
            <p className="text-xs font-medium">
              Lorem, ipsum dolor sit amet
            </p>
          </div>
        </div>
        <div className="flex gap-3">
            <img className="w-4 h-4" src="./phoneIcon.svg" alt="" />
            <img className="w-4 h-4" src="./videoIcon.svg" alt="" />
            <img className="w-4 h-4" src="./infoIcon.svg" alt="" />
        </div>
      </div>
      {/* center container */}
      <div className="center"></div>
      {/* bottom container */}
      <div className="bottom">
        
      </div>
    </div>
  );
};

export default Chat;
