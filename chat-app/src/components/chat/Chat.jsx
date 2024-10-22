import React, { useEffect, useRef, useState } from "react";
import EmojiPicker from "emoji-picker-react";

const Chat = () => {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState("");

  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({behavior: "smooth"});
  },[]);

  const handleEmoji = (e) => {
    setText((prev) => prev + e.emoji);
    setOpen(false);
  };

  return (
    <div className="flex-[2] border-l-[1px] border-r-[1px] border-zinc-400 flex flex-col h-full">
      {/* top container */}
      <div className="p-4 flex items-center justify-between border-b-[1px] border-zinc-400 h-16">
        <div className="flex items-center gap-4">
          <img
            className="w-10 h-10 rounded-full object-cover"
            src="./avatar.png"
            alt=""
          />
          <div className="flex flex-col gap-0.5">
            <span className="text-sm font-bold">Jane Doe</span>
            <p className="text-xs font-medium">Lorem, ipsum dolor sit amet</p>
          </div>
        </div>
        <div className="flex gap-3">
          <img className="w-4 h-4" src="./phoneIcon.svg" alt="" />
          <img className="w-4 h-4" src="./videoIcon.svg" alt="" />
          <img className="w-4 h-4" src="./infoIcon.svg" alt="" />
        </div>
      </div>
      {/* center container */}
      <div className="p-6 flex-1 overflow-scroll flex flex-col gap-10">
        <div className="max-w-lg flex gap-2">
          <img className="w-6 h-6 object-cover rounded-full" src="./avatar.png" alt="" />
          <div className="flex-1 flex flex-col gap-1">
            <p className="bg-gray-900 p-4 rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti debitis optio delectus perferendis facilis hic impedit
              nesciunt tempore, nemo voluptas, recusandae, laboriosam velit
              corrupti labore dolores ad sint ex.
            </p>
            <span className="text-xs">5 min ago</span>
          </div>
        </div>
        <div className="max-w-lg flex gap-2 self-end">
          <div className="flex-1 flex flex-col gap-1">
          <img className="rounded-md" src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/3d0f6/MainAfter.avif" alt="" />

            <p className="bg-blue-400 p-4 rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti debitis optio delectus perferendis facilis hic impedit
              nesciunt tempore, nemo voluptas, recusandae, laboriosam velit
              corrupti labore dolores ad sint ex.
            </p>
            <span className="text-xs self-end">1 min ago</span>
          </div>
          <img className="w-6 h-6 object-cover rounded-full" src="./avatar.png" alt="" />
        </div>
        <div className="max-w-lg flex gap-2">
          <img className="w-6 h-6 object-cover rounded-full" src="./avatar.png" alt="" />
          <div className="flex-1 flex flex-col gap-1">
            <p className="bg-gray-900 p-4 rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti debitis optio delectus perferendis facilis hic impedit
              nesciunt tempore, nemo voluptas, recusandae, laboriosam velit
              corrupti labore dolores ad sint ex.
            </p>
            <span className="text-xs">5 min ago</span>
          </div>
        </div>
        <div className="max-w-lg flex gap-2 self-end">
          <div className="flex-1 flex flex-col gap-1">
            <p className="bg-blue-400 p-4 rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti debitis optio delectus perferendis facilis hic impedit
              nesciunt tempore, nemo voluptas, recusandae, laboriosam velit
              corrupti labore dolores ad sint ex.
            </p>
            <span className="text-xs self-end">1 min ago</span>
          </div>
          <img className="w-6 h-6 object-cover rounded-full" src="./avatar.png" alt="" />
        </div>
        <div className="max-w-lg flex gap-2">
          <img className="w-6 h-6 object-cover rounded-full" src="./avatar.png" alt="" />
          <div className="flex-1 flex flex-col gap-1">
            <p className="bg-gray-900 p-4 rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti debitis optio delectus perferendis facilis hic impedit
              nesciunt tempore, nemo voluptas, recusandae, laboriosam velit
              corrupti labore dolores ad sint ex.
            </p>
            <span className="text-xs">5 min ago</span>
          </div>
        </div>
        <div className="max-w-lg flex gap-2 self-end">
          <div className="flex-1 flex flex-col gap-1">
            <p className="bg-blue-400 p-4 rounded-lg text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
              deleniti debitis optio delectus perferendis facilis hic impedit
              nesciunt tempore, nemo voluptas, recusandae, laboriosam velit
              corrupti labore dolores ad sint ex.
            </p>
            <span className="text-xs self-end">1 min ago</span>
          </div>
          <img className="w-6 h-6 object-cover rounded-full" src="./avatar.png" alt="" />
        </div>
        <div ref={endRef}></div>
      </div>
      {/* bottom container */}
      <div className="p-4 flex gap-4 mt-auto items-center justify-between border-t-[1px] border-zinc-400">
        <div className="flex gap-2">
          <img
            className="w-4 h-4 cursor-pointer"
            src="./imageIcon.svg"
            alt=""
          />
          <img
            className="w-4 h-4 cursor-pointer"
            src="./cameraIcon.svg"
            alt=""
          />
          <img
            className="w-4 h-4 cursor-pointer"
            src="./microphoneIcon.svg"
            alt=""
          />
        </div>
        <input
          className="flex-1 bg-slate-800 border-none outline-none text-xs text-white rounded-sm p-2"
          type="text"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <div className="w-4 h-4 cursor-pointer relative ">
          <img
            onClick={() => setOpen((prev) => !prev)}
            src="./emojiIcon.svg"
            alt=""
          />
          <div className="absolute bottom-10 left-0">
            <EmojiPicker open={open} onEmojiClick={handleEmoji} />
          </div>
        </div>
        <button className="bg-blue-600 text-white text-xs px-4 py-1.5 rounded-sm cursor-pointer">
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
