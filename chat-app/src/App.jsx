import Details from "./components/details/Details";
import Chat from "./components/chat/Chat";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";

function App() {
  const user = true;

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
      <Notification/>
    </div>
  );
};

export default App;
