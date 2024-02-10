import InfoCard from "./InfoCard";
import aboutus from "../../assets/aboutus.jpg";
export default function WhyUs() {
  return (
    <div className="bg-[#EFF2F1]">
      <div className="container flex flex-col justify-between py-32 lg:flex-row ">
        <div className="flex flex-col gap-12 ">
          <div>
            <h2 className="text-2xl  md:text-3xl lg:text-4xl">Why Choose US</h2>
            <p className="mt-4 max-w-[580px] text-sm text-slate-500">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
            </p>
          </div>
          <div className="grid grid-cols-2   gap-y-12">
            <InfoCard />
            <InfoCard />
            <InfoCard />
            <InfoCard />
          </div>
        </div>
        <div className="flex w-full items-center justify-center max-lg:mb-2 max-lg:mt-6 lg:max-w-[510px] lg:pb-12">
          <img src={aboutus} className="rounded-2xl" alt="" />
        </div>
      </div>
    </div>
  );
}
