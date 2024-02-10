import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/common/Header";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/common/Footer";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import Service from "./pages/Service";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { setuser } from "./app/slice/userSlice";
import Cart from "./pages/Cart";
import AddProduct from "./pages/AddProduct";

export default function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:8000/api/v1/user/getusers", {
          headers: { Authorization: token },
        })
        .then((res) => dispatch(setuser(res.data.name)))
        .catch((err) => console.log(err));
    }
  });
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="contactus" element={<ContactUs />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="shop" element={<Shop />} />
        <Route path="services" element={<Service />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="cart"  element={<Cart/>}/>
        <Route path="addproduct" element={<AddProduct/>}/>
      </Routes>
      <Footer />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}
