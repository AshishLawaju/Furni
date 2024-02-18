import { Link, NavLink } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { FiShoppingCart } from "react-icons/fi";
import "./Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../app/slice/userSlice";
import { useNavigate } from "react-router-dom";

export default function Header() {
  //   const normalClass = "hover:border-b-4 hover: pb-2";
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const cart = useSelector((store) => store.cart.value);
  const navigate = useNavigate();

  return (
    <div className="bg-primary py-3">
      <div className="container flex h-full flex-wrap  items-center justify-between  text-white">
        <div
          className="cursor-pointer text-3xl  font-semibold"
          onClick={() => navigate("/")}
        >
          Furni<span className="text-slate-400 ">.</span>
        </div>
        <RxHamburgerMenu
          className="text-2xl md:hidden"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        />
        <div
          className={`flex  ${!showMenu ? "max-h-0  md:max-h-[999px]" : "max-h-[999px]"} gap-3: flex-col items-center  text-slate-300 transition-all  duration-500   max-md:w-full  max-md:gap-3 max-md:overflow-hidden md:flex-row md:gap-6  lg:gap-10 xl:gap-12 `}
        >
          <>
            <NavLink
              to={"/"}
              className={(navData) => (navData.isActive ? "actived" : "nav")}
            >
              Home
            </NavLink>
          </>

          <>
            <NavLink
              to={"/shop"}
              className={(navData) => (navData.isActive ? ` actived` : "nav")}
            >
              Shop
            </NavLink>
          </>
          <NavLink
            to={"/aboutus"}
            className={(navData) => (navData.isActive ? "actived" : "nav")}
          >
            About us
          </NavLink>
          <NavLink
            to={"/services"}
            className={(navData) => (navData.isActive ? "actived" : "nav")}
          >
            Services
          </NavLink>
          <NavLink
            to={"/blog"}
            className={(navData) => (navData.isActive ? "actived" : "nav")}
          >
            Blog
          </NavLink>
          <NavLink
            to={"/contactus"}
            className={(navData) => (navData.isActive ? "actived" : "nav")}
          >
            Contact us
          </NavLink>

          {user.value ? (
            <>
              <NavLink
                onClick={() => {
                  dispatch(logout());
                }}
                className={(navData) => (navData.isActive ? "nav" : "nav")}
              >
                Logout
              </NavLink>
              <NavLink to={"/profile"} className="text-xl text-white">
                <IoPersonOutline />
              </NavLink>
            </>
          ) : (
            <NavLink
              to={"/login"}
              className={(navData) => (navData.isActive ? "actived" : "nav")}
            >
              Login
            </NavLink>
          )}

          <NavLink to={"/cart"} className="relative text-xl text-white md:mr-9">
            <FiShoppingCart />
            <p className="absolute -right-1 -top-3 rounded-full bg-black p-[2px] text-sm">
              {cart.length}
            </p>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
