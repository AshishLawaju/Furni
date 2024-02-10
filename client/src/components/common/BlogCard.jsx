import blog from "../../assets/blog.jpg";
export default function BlogCard() {
  return (
    <div className="flex flex-col gap-4">
      <div className="">
        <img src={blog} alt="" className="rounded-3xl" />
      </div>
      <p className="pl-3 font-semibold">First Time Home Owner Ideas</p>
      <p className="pl-3 text-sm text-slate-500">
        {" "}
        by <span className="font-semibold text-black">
          Kristin Watson
        </span> on{" "}
        <span className="font-semibold text-black">Dec 19, 2021 </span>
      </p>
    </div>
  );
}
