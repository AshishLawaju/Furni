import Hero from "../components/common/Hero";
import person from "../assets/person.jpg";
import Testimonials from "../components/common/Testimonials";
import WhyUs from "../components/common/WhyUs";

export default function AboutUs() {
  return (
    <>
      <Hero />
      <WhyUs />
      {/* Our team */}
      <div className="bg-[#EFF2F1]">
        <h3 className="mb-12 text-center text-xl  sm:text-2xl md:text-3xl lg:text-4xl">
          Our Team
        </h3>
        <div className="container grid grid-cols-1 place-content-center place-items-center gap-3 md:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((el) => {
            return (
              <div className="flex max-w-[300px] flex-col gap-4">
                <div>
                  <img src={person} alt="" />
                </div>
                <p className="cursor-pointer text-3xl underline hover:no-underline">
                  Lawson Arnold
                </p>
                <p className="text-thin">CEO, Founder, Atty.</p>
                <p className="text-sm text-slate-500">
                  Separated they live in. Separated they live in Bookmarksgrove
                  right at the coast of the Semantics, a large language ocean.
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
