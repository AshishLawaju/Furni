import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function SignUp() {
  const [registerUser, setRegisterUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setRegisterUser({
      ...registerUser,
      [name]: value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/v1/user/register", {
        username: registerUser.username,
        email: registerUser.email,
        password: registerUser.password,
      })
      .then(() => {
        toast("user created");
        setRegisterUser({
          username: "",
          email: "",
          password: "",
        });
      });
  }

  return (
    <div className="container mx-auto max-w-[400px] py-32">
      <form
        onSubmit={handleSubmit}
        className="mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md"
      >
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="text"
            name="username"
            placeholder="Username"
            value={registerUser.username}
            onChange={handleInput}
          />
        </div>
        <div className="mb-4">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="email"
          >
            email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="email"
            name="email"
            placeholder="email"
            value={registerUser.email}
            onChange={handleInput}
          />
        </div>
        <div className="mb-6">
          <label
            className="mb-2 block text-sm font-bold text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border  px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            type="password"
            name="password"
            onChange={handleInput}
            value={registerUser.password}
            placeholder="******************"
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-black px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
