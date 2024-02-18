import { BsCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
export default function Thankyou() {
  return (
    <div className="bg-back">
      <div className="container flex flex-col items-center justify-center gap-3  pb-40 pt-32">
        <BsCartCheckFill className="text-[70px] text-primary" />
        <p className="text-3xl font-semibold text-primary">Thank you !</p>
        <p className="text-slate-500">You order was successfuly completed.</p>
        <Link to={"/shop"}>
        <button className="btn bg-black text-back">Back to shop </button>
        </Link>
      </div>
    </div>
  );
}
