import { Fragment } from "react";
import Details from "./components/details/Details";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";

function App() {
  return (
    <div class="h-screen w-screen flex items-center justify-center">
      <div className="w-full h-full bg-slate-800 bg-opacity-80 backdrop-blur-sm backdrop-saturate-50 border-2 border-neutral-800 border-opacity-40
      flex ">
        <List/>
        <Chat/>
        <Details/>
      </div>
    </div>
  );
}

export default App;
