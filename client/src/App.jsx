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
import UpsertProduct from "./pages/UpsertProduct";
import EditProduct from "./pages/EditProduct";
import ProtectedRoute from "./components/ProtectedRoute";
import { setCartRedux } from "./app/slice/cartSlice";
import CheckOut from "./pages/CheckOut";
import Thankyou from "./pages/Thankyou";
import CheckOrders from "./pages/CheckOrders";
import Blog from "./pages/Blog";
import SingleProduct from "./pages/SingleProduct";

export default function App() {
  const dispatch = useDispatch();
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

    const cartItem = localStorage.getItem("cartItem");
    if (cartItem) {
      dispatch(setCartRedux(JSON.parse(cartItem)));
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
        <Route path="blog" element={<Blog />} />
        <Route path="cart">
          <Route path="" element={<Cart />} />
          <Route path="" element={<ProtectedRoute />}>
            <Route path="checkout" element={<CheckOut />} />
          </Route>
        </Route>
<Route path="product/:slug" element={<SingleProduct/>}></Route>
        <Route path="" element={<ProtectedRoute />}>
          <Route path="thankyou" element={<Thankyou />}></Route>
          <Route path="addproduct" element={<AddProduct />} />
          <Route path="checkorders" element={<CheckOrders />}></Route>
        </Route>
        <Route path="" element={<ProtectedRoute />}>
          <Route path="upsertproduct" element={<UpsertProduct />}></Route>
        </Route>
        <Route path="upsertproduct/:slug" element={<EditProduct />} />
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
