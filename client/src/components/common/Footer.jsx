import footerImages from "../../assets/footer.png";
import { BsEnvelope } from "react-icons/bs";
import { IoIosSend } from "react-icons/io";
import { FaFacebookF, FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
export default function Footer() {
  return (
    <>
      <div className="container flex flex-col gap-12 py-32 lg:py-20">
        {/* sec1 */}
        <div className="flex   ">
          <div className=" flex flex-col gap-2 pt-4">
            <div className="flex items-center gap-2  text-xl">
              <BsEnvelope className="text-slate-400 " />
              Subscribe to Newsletter
            </div>
            <div className=" flex flex-col gap-4 md:flex-row">
              <input
                type="text"
                placeholder="Enter your name"
                className="inp min-w-[250px]"
              />
              <input
                type="text"
                placeholder="Enter your email"
                className="inp min-w-[250px]"
              />
              <div className="flex w-[70px] items-center justify-center rounded-lg bg-primary ">
                <IoIosSend className="flex h-[50px] w-[50px] items-center justify-center p-3  text-white" />
              </div>
            </div>
          </div>
          <div className="relative flex w-full justify-end ">
            <img
              src={footerImages}
              className="absolute
            -top-[120%] max-w-[350px] 
            
             md:-top-[250%] lg:max-w-[400px]"
              alt="footer"
            />
          </div>
        </div>

        {/* sec2 */}
        <div className="flex flex-col items-center  gap-3 lg:flex-row ">
          <div className="flex w-auto flex-col gap-3 max-lg:mb-8 lg:max-w-[430px]">
            <h2 className="text-3xl lg:text-4xl ">Fruni.</h2>
            <p>
              Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
              vulputate velit imperdiet dolor tempor tristique. Pellentesque
              habitant
            </p>
            <div className="flex gap-2">
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DCE5E4] text-primary ">
                <FaFacebookF className="text-sm" />
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DCE5E4] text-primary ">
                <FaTwitter className="text-sm" />
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DCE5E4] text-primary ">
                <FaInstagram className="text-sm" />
              </div>
              <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#DCE5E4] text-primary ">
                <FaLinkedin className="text-sm" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 whitespace-nowrap       sm:grid-cols-4 ">
            <ul className="">
              <li>About us</li>
              <li>Services</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>

            <ul className="">
              <li>Support</li>
              <li>Knowledge base</li>
              <li>Live chat</li>
            </ul>

            <ul className="">
              <li>Jobs</li>
              <li>Out team</li>
              <li>Leadership</li>
              <li>Privacy Policy</li>
            </ul>

            <ul className="">
              <li>Nordic Chair</li>
              <li>Kruzo Aero</li>
              <li>Ergonomic Chair</li>
            </ul>
          </div>
        </div>

        {/* 
        footer
        */}

        <hr className="max-lg:hidden" />
        <div className="flex justify-between max-lg:hidden">
          <p className="max-w-[50%]">
            Copyright ©2024. All Rights Reserved. — Designed with love by
            Untree.co Distributed By ThemeWagon
          </p>
          <div className="flex gap-4">
            <p>Terms & Conditions</p>
            <p>Privacy Policy</p>
          </div>
        </div>
      </div>
    </>
  );
}
