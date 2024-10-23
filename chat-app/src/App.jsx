import Details from "./components/details/Details";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";

function App() {
  const user = false;

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      console.log(user);

      
    });
    
    return () => {
      unSub();
    };

  }, []);

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
      <div className="absolute">
        <Notification/>
      </div>
      
    </div>
  );
};

export default App;
