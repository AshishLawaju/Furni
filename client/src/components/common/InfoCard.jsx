import { MdOutlineLocalShipping } from "react-icons/md";

export default function InfoCard() {
  return (
    <div className="max-w-[330px] flex flex-col gap-2">
      <div className="relative ml-4 h-[30px] w-[30px] rounded-full bg-[#CBD5D1] ">
        <MdOutlineLocalShipping className="absolute -left-[60%] -top-[20%] text-4xl" />
      </div>
      <p>Fast & Free Shipping</p>
      <p className="text-sm text-slate-600">
        Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
        Aliquam vulputate.
      </p>
    </div>
  );
}
