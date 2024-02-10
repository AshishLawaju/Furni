import Crafted from "../components/common/Crafted";
import Hero from "../components/common/Hero";
import InfoCard from "../components/common/InfoCard";
import WhyUs from "../components/common/WhyUs";
import help1 from "../assets/help1.jpg";
import help2 from "../assets/help2.jpg";
import help3 from "../assets/help3.jpg";
import chair3 from "../assets/chair3.png";
import { FaRegCircle } from "react-icons/fa";
import Testimonials from "../components/common/Testimonials";
import BlogCard from "../components/common/BlogCard";
export default function Home() {
  return (
    <>
      <Hero title={"Modern Interior Design Studio"} />
      <Crafted />
      <WhyUs />
      <div className="bg-back">
        <div className=" container flex gap-12">
          <div className="relative flex gap-4">
            <div className="max-w-[500px]">
              <img src={help2} alt="" className="rounded-3xl" />
            </div>
            <div className="max-w-[220px]">
              <img src={help3} alt="" className="rounded-3xl" />
            </div>
            <div className="absolute -bottom-24 right-0 max-w-[390px]">
              <img src={help1} alt="" className="rounded-3xl" />
            </div>
          </div>
          <div className="flex max-w-[530px] flex-col gap-6 text-slate-500">
            <p className="text-3xl font-semibold text-black">
              We Help You Make Modern Interior Design
            </p>
            <p className="leading-7">
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant morbi tristique senectus et netus et malesuada
            </p>
            <div className="grid grid-cols-2 gap-2">
              {[1, 2, 3, 4].map(() => (
                <div className="flex items-center gap-3 gap-x-5">
                  <FaRegCircle className="text-[8px]" />
                  <p>Donec vitae odio quis nisl dapibus malesuada</p>
                </div>
              ))}
            </div>
            <button
              className="btn max-w-[122px] bg-black text-white"
              type="button"
            >
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* 
      chair read more 
      */}

      <div className="bg-back py-32">
        <div className="container grid grid-cols-3 place-content-center place-items-center gap-6">
          {[1, 2, 3].map(() => (
            <div className="flex items-center gap-4">
              <div className="ab h-[100px] w-[100px] rounded-3xl bg-[#DCE5E4]">
                <img src={chair3} alt="" className="scale-125" />
              </div>

              <div className="text-sm">
                <p className="font-semibold">Kruzo Aero Chair</p>
                <p className="text-slate-500">
                  Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                  odio{" "}
                </p>
                <span className="font-thin">Read More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-back">
        <Testimonials />
      </div>

      <div className="bg-back py-32 pb-48">
        <div className="container">
          <p className="mb-6 text-3xl">Recent Blog</p>
          <div className="grid grid-cols-3 place-content-center gap-8">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </>
  );
}
