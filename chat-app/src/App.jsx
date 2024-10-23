import { Fragment } from "react";
import Details from "./components/details/Details";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Login from "./components/login/Login";

function App() {
  const user = false;

  return (
    <div
      className="w-screen h-screen bg-slate-800 bg-opacity-80 backdrop-blur-sm backdrop-saturate-50 border-2 border-neutral-800 border-opacity-40
      flex "
    >
      {user ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
    </div>
  );
};

export default App;
