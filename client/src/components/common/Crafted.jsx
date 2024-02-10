import ProductCart from "./ProductCart";

export default function Crafted() {
  return (
    <>
      <div className="container grid grid-cols-1 gap-4 py-24 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <div className="flex max-w-[290px] flex-col gap-6">
          <p className="text-3xl font-semibold">
            Crafted with excellent material.
          </p>
          <p className="text-sm leading-7 text-slate-500">
            Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
            velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
          </p>
          <button
            type="button "
            className="btn max-w-[120px] bg-black text-white"
          >
            Explore
          </button>
        </div>
        <ProductCart />
        <ProductCart />
        <ProductCart />
      </div>
    </>
  );
}
