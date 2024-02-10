import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, removeItem } from "../app/slice/cartSlice";
import { useEffect, useState } from "react";
export default function Cart() {
  // localStorage.getItem("cartItem")
  const cart = useSelector((store) => store.cart.value);

  const dispatch = useDispatch();
  const [total, setTotal] = useState();
  useEffect(() => {
    let sum = 0;
    cart.map((item) => {
      sum += Number(item.price * item.quantity);
    });
    setTotal(sum);
  }, [cart]);
  return (
    <>
      <div className="bg-primary ">
        <div className="container text-2xl  text-white">Cart</div>
      </div>

      <div className="mb-32 bg-back py-8 sm:py-16  lg:py-32  ">
        <div className="container">
          <table className="w-full  text-center">
            <thead className=" border-b-4 border-black pb-6 font-sans text-xl font-semibold">
              <tr>
                <th className="pb-6">Image</th>
                <th className="pb-6">Product</th>
                <th className="pb-6">Price</th>
                <th className="pb-6">Quantity</th>
                <th className="pb-6">Total</th>
                <th className="pb-6">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((cartItem) => (
                <tr key={cartItem._id} className="border-b py-20 text-xl">
                  <td className="h-[140px] w-[140px] py-6 ">
                    <img src={cartItem.image} alt="" />
                  </td>
                  <td>{cartItem.name}</td>
                  <td>{cartItem.price}</td>
                  <td className="flex h-[140px] items-center justify-center gap-6  pt-6">
                    <p
                      className="cursor-pointer"
                      onClick={() => dispatch(decrement(cartItem))}
                    >
                      -
                    </p>{" "}
                    {cartItem.quantity}{" "}
                    <p
                      className="cursor-pointer"
                      onClick={() => dispatch(increment(cartItem))}
                    >
                      +
                    </p>
                  </td>
                  <td> ${cartItem.price * cartItem.quantity}</td>
                  <td
                    className="cursor-pointer font-bold text-red-500"
                    onClick={() => dispatch(removeItem(cartItem))}
                  >
                    X
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div>total : {total}</div>
        </div>
      </div>
    </>
  );
}
