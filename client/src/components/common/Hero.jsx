/* eslint-disable react/prop-types */
import heroImage from "../../assets/hero.png";
import { useNavigate } from "react-router-dom";
export default function Hero({ title }) {
  const navigate = useNavigate();
  return (
    <div className="bg-primary   ">
      <div className=" container flex flex-col justify-between gap-10 lg:flex-row lg:gap-20">
        <div className="flex flex-col justify-center gap-10">
          <p className="mt-12 text-2xl text-3xl  font-semibold  text-white sm:text-3xl md:text-4xl lg:mt-0 lg:max-w-[450px] lg:text-5xl xl:text-6xl">
            {title}
          </p>
          <p className="max-w-[440px] text-sm text-slate-400">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <div className="flex gap-2">
            <button
              className="btn bg-secondary "
              onClick={() => navigate("/shop")}
            >
              Shop Now
            </button>
            <button
              className="btn border-2 border-slate-400 text-white "
              onClick={() => navigate("/")}
            >
              Explore
            </button>
          </div>
        </div>
        <div className="relative">
          <img src={heroImage} alt="hero" className="" />
        </div>
      </div>
    </div>
  );
}
