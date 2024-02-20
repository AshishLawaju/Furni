import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { clearCart } from "../app/slice/cartSlice";
import { useDispatch } from "react-redux";

export default function CheckOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector((store) => store.cart.value);

  const [total, setTotal] = useState();

  useEffect(() => {
    let sum = 0;
    cartItems.map((item) => {
      sum += Number(item.price * item.quantity);
    });
    setTotal(sum);
  }, [cartItems]);

  const [order, setOrder] = useState({
    firstName: "",
    lastName: "",
    country: "",
    address: "",
    email: "",
    phone: "",
    userOrder: cartItems,
    billingAmount: Number(total),
  });

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8000/api/v1/order/",

        order,
      )
      .then(() => {
        navigate("/thankyou");
        //store bata lau ne ani quantity ra id bata api hit garne
        dispatch(clearCart());
      });

    console.log({ total });
    console.log({ cartItems });
    console.log({ order });
  }
  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;

    setOrder({
      ...order,
      [name]: value,
    });
  }

  return (
    <>
      <div className="bg-primary ">
        <div className="container py-32 text-3xl text-white">Checkout</div>
      </div>

      <div className="container  bg-back pb-40 pt-16">
        <form onSubmit={handleSubmit}>
          <div className="w-full gap-6 border md:flex lg:gap-12">
            <div className="w-[50%]">
              <div>
                <p className="mb-6 text-xl font-semibold underline">
                  Billing Details
                </p>
                <div className="flex items-center gap-4">
                  <label htmlFor="">Country</label>
                  <select
                    name="country"
                    onChange={handleInput}
                    id=""
                    className="inp"
                  >
                    <option value="">Select a country</option>
                    <option value="Banglades">Bangladesh</option>
                    <option value="Nepal">Nepal</option>
                    <option value="India">India</option>
                  </select>
                </div>
                <div className="flex gap-3">
                  <div className="flex flex-col">
                    <label htmlFor="">First Name</label>
                    <input
                      type="text"
                      className="inp p-1"
                      name="firstName"
                      onChange={handleInput}
                      value={order.firstName}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Last Name</label>
                    <input
                      type="text"
                      className="inp p-1"
                      onChange={handleInput}
                      value={order.lastName}
                      name="lastName"
                    />
                  </div>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Address</label>
                  <input
                    type="text"
                    className="inp p-1"
                    name="address"
                    onChange={handleInput}
                    value={order.address}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label htmlFor="">Email</label>
                <input
                  type="email"
                  className="inp p-1"
                  name="email"
                  onChange={handleInput}
                  value={order.email}
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor=""> Phone No.</label>
                <input
                  type="text"
                  className="inp p-1"
                  name="phone"
                  onChange={handleInput}
                  value={order.phone}
                />
              </div>
            </div>

            <div className="w-[50%]">
              <p className="mt-12 text-xl font-semibold">Your Order</p>
              <table className="w-full text-center">
                <thead className="border-b-2  border-black">
                  <th>Product</th>
                  <th>Total</th>
                </thead>
                <tbody className="">
                  {cartItems.map((cartItem) => {
                    return (
                      <tr className=" border-b" key={cartItem.name}>
                        <td className="py-3">
                          {cartItem.name}{" "}
                          <span className="px-3 font-semibold">X</span>{" "}
                          {cartItem.quantity}
                        </td>
                        <td>{cartItem.price}</td>
                      </tr>
                    );
                  })}

                  <tr className="font-semibold">
                    <td>Order Total</td>
                    <td>{total}</td>
                  </tr>
                </tbody>
              </table>

              <div className="py-12">
                <div className="border p-3 underline">Direct Bank Transfer</div>
                <div className="border p-3 underline">Cheque Payment</div>
                <div className="border p-3 underline">Paypal</div>
              </div>
              <>
                <button
                  className="btn max-w-[180px] bg-black text-white"
                  onClick={() => {
                    handleSubmit;
                  }}
                >
                  Place Order
                </button>
              </>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
