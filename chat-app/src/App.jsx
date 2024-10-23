import Details from "./components/details/Details";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useUserStore } from "./lib/userStore";

function App() {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);

  console.log(currentUser);

  if (isLoading)
    return <div className="p-10 text-lg rounded-lg bg-sky-800">Loading...</div>;

  return (
    <div
      className="w-screen h-screen bg-slate-800 bg-opacity-80 backdrop-blur-sm backdrop-saturate-50 border-2 border-neutral-800 border-opacity-40
      flex "
    >
      {currentUser ? (
        <>
          <List />
          <Chat />
          <Details />
        </>
      ) : (
        <Login />
      )}
      <div className="absolute">
        <Notification />
      </div>
    </div>
  );
}

export default App;
