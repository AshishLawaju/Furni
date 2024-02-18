import BlogCard from "../components/common/BlogCard";
import Hero from "../components/common/Hero";

export default function Blog() {
  return (
    <div className="bg-back">
      <Hero title={"Blog"} />
      <div className="container grid grid-cols-1 gap-6 pb-40 pt-32 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 ">
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
}
