import React, { useState } from "react";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

const Login = () => {
  const [avatar, setAvatar] = useState({
    file: null,
    url: "",
  });

  const [loading, setLoading] = useState(false);

  const handleAvatar = (e) => {
    if (e.target.files[0]) {
      setAvatar({
        file: e.target.files[0],
        url: URL.createObjectURL(e.target.files[0]),
      });
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.target);

    const { username, email, password } = Object.fromEntries(formData);

    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const imgUrl = await upload(avatar.file);

      await setDoc(doc(db, "users", response.user.uid), {
        username,
        email,
        avatar: imgUrl,
        id: response.user.uid,
        blocked: [],
      });

      await setDoc(doc(db, "userchats", response.user.uid), {
        chats: [],
      });

      toast.success("Account created! You can login now!");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    const { email, password } = Object.fromEntries(formData);

    try{

      await signInWithEmailAndPassword(auth, email, password);

    }catch (err) {
      console.log(err);
      toast.error(err.message);
    }finally{
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-full flex items-center gap-16">
      <div className="flex-1 flex flex-col items-center gap-10">
        <h2>Welcome back,</h2>
        <form
          onSubmit={handleLogin}
          className="flex flex-col items-center justify-center gap-6"
        >
          <input
            className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg"
            type="password"
            placeholder="password"
            name="password"
          />
          <button
            disabled={loading}
            className={`w-full p-2 border-none text-lg font-medium rounded-lg cursor-pointer
              ${
                loading
                  ? "bg-sky-400 cursor-not-allowed opacity-50"
                  : "bg-sky-600 text-white hover:bg-sky-700"
              }`}
          >
            Sign In
          </button>
        </form>
      </div>
      <div className="h-[80% ] w-[2px] bg-gray-500"></div>
      <div className="flex-1 flex flex-col items-center gap-10">
        <h2>Create an Account</h2>
        <form
          onSubmit={handleRegister}
          className="flex flex-col items-center justify-center gap-6"
        >
          <label
            className="w-full flex items-center justify-between cursor-pointer underline"
            htmlFor="file"
          >
            <img
              className="w-36 h-36 rounded-full object-cover opacity-75"
              src={avatar.url || "./avatar.png"}
              alt=""
            />
            Upload an Image
          </label>
          <input
            type="file"
            id="file"
            style={{ display: "none" }}
            onChange={handleAvatar}
          />
          <input
            className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg"
            type="text"
            placeholder="Username"
            name="username"
          />
          <input
            className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg"
            type="text"
            placeholder="Email"
            name="email"
          />
          <input
            className="p-4 border-none outline-none bg-slate-800 text-white rounded-lg"
            type="password"
            placeholder="password"
            name="password"
          />
          <button
            disabled={loading}
            className={`w-full p-2 border-none text-lg font-medium rounded-lg cursor-pointer
    ${
      loading
        ? "bg-sky-400 cursor-not-allowed opacity-50"
        : "bg-sky-600 text-white hover:bg-sky-700"
    }`}
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
