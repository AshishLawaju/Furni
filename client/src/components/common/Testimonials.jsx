/* eslint-disable react/prop-types */
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import girl from "../../assets/girl.png";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`...className  absolute right-10 top-[50%]   `}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoIosArrowDroprightCircle className=" cursor-pointer  text-4xl text-[#DDE2E0] outline-none" />
    </div>
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`...className  absolute left-10 top-[50%]   z-40`}
      style={{ ...style, display: "block" }}
      onClick={onClick}
    >
      <IoIosArrowDropleftCircle className=" cursor-pointer  text-4xl text-[#DDE2E0] outline-none" />
    </div>
  );
}
export default function Testimonials() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          // backgroundColor: "#ddd",
          borderRadius: "10px",
          padding: "0px",
          position: "absolute",
          bottom: "-60px",
          // marginTop: "px"
        }}
      >
        <ul style={{}}> {dots} </ul>
      </div>
    ),
  };
  return (
    <div className="pb-40 pt-24">
      <p className="mb-9 text-center text-3xl font-semibold">Testimonials</p>
      <Slider className="container" {...settings}>
        <div className="   w-full    md:px-32">
          <p className="mb-9 text-center text-lg text-slate-600">
            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
            vulputate velit imperdiet dolor tempor tristique. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Integer convallis volutpat dui quis scelerisque.”
          </p>
          <div className="mb-3  flex w-full items-center justify-center ">
            <img src={girl} alt="" className="h-[60px] w-[60px] rounded-full" />
          </div>
          <p className="text-center text-sm font-semibold">Maria Jones</p>
          <p className="text-center text-sm">CEO, Co-Founder, XYZ Inc.</p>
        </div>

        <div className="   w-full    md:px-32">
          <p className="mb-9 text-center text-lg text-slate-600">
            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
            vulputate velit imperdiet dolor tempor tristique. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Integer convallis volutpat dui quis scelerisque.”
          </p>
          <div className="mb-3  flex w-full items-center justify-center ">
            <img src={girl} alt="" className="h-[60px] w-[60px] rounded-full" />
          </div>
          <p className="text-center text-sm font-semibold">Maria Jones</p>
          <p className="text-center text-sm">CEO, Co-Founder, XYZ Inc.</p>
        </div>

        <div className="   w-full    md:px-32">
          <p className="mb-9 text-center text-lg text-slate-600">
            “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
            quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
            vulputate velit imperdiet dolor tempor tristique. Pellentesque
            habitant morbi tristique senectus et netus et malesuada fames ac
            turpis egestas. Integer convallis volutpat dui quis scelerisque.”
          </p>
          <div className="mb-3  flex w-full items-center justify-center ">
            <img src={girl} alt="" className="h-[60px] w-[60px] rounded-full" />
          </div>
          <p className="text-center text-sm font-semibold">Maria Jones</p>
          <p className="text-center text-sm">CEO, Co-Founder, XYZ Inc.</p>
        </div>
      </Slider>
    </div>
  );
}
