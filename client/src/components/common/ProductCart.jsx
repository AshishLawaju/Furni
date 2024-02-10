/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import chair1 from "../../assets/chair1.png";
import "./ProductCard.css";
import { AiFillPlusCircle } from "react-icons/ai";
import { addToCart } from "../../app/slice/cartSlice.js";
export default function ProductCart({ product }) {
  const dispatch = useDispatch();
  return (
    <div className="">
      <div className="thebg group  flex  max-w-[350px] cursor-pointer flex-col items-center  gap-2    ">
        <div className="z-40 transition-all duration-300 group-hover:-translate-y-6  ">
          <img src={chair1} alt="product" />
        </div>
        <p className="z-40">{product?.name}</p>
        <p className="z-40 text-2xl font-bold">${product?.price}</p>
        <AiFillPlusCircle
          onClick={() => {
            dispatch(addToCart(product));
          }}
          className="z-40 text-5xl text-primary opacity-0 transition-all duration-300  group-hover:block group-hover:translate-y-6 group-hover:opacity-100  "
        />
      </div>
    </div>
  );
}
