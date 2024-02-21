import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setuser as setReduxUser } from "../app/slice/userSlice";
import Paginate from "./Paginate";
export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/user/login", {
        email: user.email,
        password: user.password,
      })
      .then((res) => {
        toast("login success!");
        localStorage.setItem("token", res.data.token);
        dispatch(setReduxUser(res.data));
        setUser({
          email: "",
          password: "",
        });
        navigate("/");
      })
      .catch((err) => console.log("login", err));
  }
  function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  }

  return (
    <>
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
            Email
          </label>
          <input
            className="focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="username"
            type="text"
            name="email"
            placeholder="email"
            value={user.email}
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
            className="focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none"
            id="password"
            type="password"
            name="password"
            placeholder="******************"
            onChange={handleInput}
            value={user.password}
          />
          {/* <p className="text-xs italic ">Please choose a password.</p> */}
        </div>
        <div className="flex items-center justify-between">
          <button
            className="focus:shadow-outline rounded bg-black px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none"
            type="submit"
          >
            Sign In
          </button>
          <Link to={"/signup"}>create new account</Link>
        </div>
      </form>
    </div>

 
    </>

  );
}
