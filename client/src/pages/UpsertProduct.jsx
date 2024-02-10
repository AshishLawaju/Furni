import { useEffect, useState } from "react";
import { logout } from "../app/slice/userSlice";
import axios from "axios";

export default function UpsertProduct() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("http://localhost:8000/api/v1/product/")
        .then((res) => setProducts(res.data))
        .catch((err) => err);
    } catch (error) {
      console.log(error);
    }
  });

  return <div>{products.map((product) => product.name)}</div>;
}
