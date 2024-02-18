import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

import { addToCart } from "../app/slice/cartSlice";
export default function SingleProduct() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({});
  const { slug } = useParams();
  //   console.log(slug);
  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/product/${slug}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log({ err }));
  }, [slug]);

  console.log({ product });
  return (
    <div className="bg-back pb-40 pt-32">
      <div className="container flex gap-12">
        <div className="w-[400px]">
          <img src={product.image} alt="product image" />
        </div>
        <div className="flex flex-col gap-12">
          <p className="text-3xl font-semibold">
            {product.name} (${product.price})
          </p>
          <p>{product.description}</p>
          <button
            type="button"
            className="btn bg-black text-white"
            onClick={() => dispatch(addToCart(product))}
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}
