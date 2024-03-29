import { useEffect, useMemo, useState } from "react";
import ProductCart from "./ProductCart";
import axios from "axios";
export default function Crafted() {
  const [latestProduct, setLatestProduct] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/product/")
      .then((response) => {
        const lastThreeData = response.data.slice(-3);

        setLatestProduct(lastThreeData);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  return (
    <>
      <div className="container grid grid-cols-1 place-content-center place-items-center gap-6 py-24 md:grid-cols-2 lg:grid-cols-4">
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
        {latestProduct.map((el) => (
          <ProductCart product={el} key={el} />
        ))}
      </div>
    </>
  );
}
