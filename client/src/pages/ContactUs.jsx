import { Form } from "react-router-dom";
import Hero from "../components/common/Hero";
import { IoMdPin } from "react-icons/io";
import { FaEnvelope } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
export default function ContactUs() {
  return (
    <>
      <Hero title={"Contact"} />
      <div className="bg-[#EFF2F1]">
        <div className="mx-auto pt-32 md:w-[55%]">
          <div className="flex justify-between">
            <div className=" flex items-center  gap-6 text-slate-500">
              <IoMdPin className="h-[50px] w-[50px] rounded-xl bg-primary p-[14px] text-3xl text-white" />
              <p>
                43 Raymouth Rd. Baltemoer,
                <br /> London 3910
              </p>
            </div>
            <div className=" flex items-center  gap-6 text-slate-500">
              <FaEnvelope className="h-[50px] w-[50px] rounded-xl bg-primary p-4 text-sm text-white" />
              <p>info@yourdomain.com</p>
            </div>
            <div className=" flex items-center  gap-6 text-slate-500">
              <FaPhone className="h-[50px] w-[50px] rounded-xl bg-primary p-4 text-xl text-white" />
              <p>+1 294 3925 3939</p>
            </div>
          </div>
          <form className="py-24 ">
            <div className="flex  gap-8">
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="name">First name</label>
                <input
                  type="text"
                  name="name"
                  className="h-12 rounded-lg border outline-none  focus:border focus:border-slate-800  focus:shadow-md"
                />
              </div>
              <div className="flex w-full flex-col gap-1">
                <label htmlFor="name">Last name</label>
                <input
                  type="text"
                  name="name"
                  className="h-12 rounded-lg border outline-none  focus:border focus:border-slate-800  focus:shadow-md"
                />
              </div>
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="name">Email address</label>
              <input
                type="email"
                name="email"
                className="h-12 rounded-lg border outline-none  focus:border focus:border-slate-800  focus:shadow-md"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label htmlFor="message">Message</label>
              <textarea
                type="email"
                name="email"
                className="h-32 rounded-lg border outline-none  focus:border focus:border-slate-800  focus:shadow-md"
              />

              <button
                type="submit "
                className="btn mt-8 max-w-[190px] bg-black text-lg text-white"
              >
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
