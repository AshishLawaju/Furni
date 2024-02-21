import Hero from "../components/common/Hero";
import person from "../assets/person.jpg";
import Testimonials from "../components/common/Testimonials";
import WhyUs from "../components/common/WhyUs";
import axios from "axios"
import { useEffect, useState } from "react";
export default function AboutUs() {


  const [members ,setMembers] = useState([])


  useEffect(()=>{
    axios.get("http://localhost:8000/api/v1/team").then(res=>setMembers(res.data)).catch(err=>console.log(err))
  },[])

  return (
    <>
      <Hero title={"About us"} />
      <WhyUs />
      {/* Our team */}
      <div className="bg-[#EFF2F1]">
        <h3 className="mb-12 text-center text-xl  sm:text-2xl md:text-3xl lg:text-4xl">
          Our Team
        </h3>
        <div className="container grid grid-cols-1 place-content-center place-items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member) => {
            return (
              <div className="flex max-w-[300px] flex-col gap-4" key={member._id}>
                <div>
                  <img src={member.profile} alt="" className="h-[300px]"/>
                </div>
                <p className="cursor-pointer text-3xl underline hover:no-underline">
                  {}
                </p>
                <p className="text-thin">{member.designation}</p>
                <p className="text-sm text-slate-500">
                  {member.description}
                </p>
                <p className="cursor-pointer text-sm font-semibold underline hover:no-underline">
                  Learn More
                </p>
              </div>
            );
          })}
        </div>
      </div>
      {/* testomonila */}

      <div>
        <Testimonials />
      </div>
    </>
  );
}
