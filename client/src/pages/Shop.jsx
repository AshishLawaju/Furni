import { useEffect, useState } from "react";
import ProductCart from "../components/common/ProductCart";
import axios from "axios";
import { Link } from "react-router-dom";
import ProtectedComponent from "../components/ProtectedComponent";
export default function Shop() {
  const [products, setProducts] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/v1/product/")
      .then((res) => {
        setProducts(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      {" "}
      <div className="bg-primary ">
        <div className="container flex    h-[40vh] items-center text-xl text-white md:text-6xl">
          Shop
        </div>

        <div className="container flex gap-4 pb-4 font-sans text-white">
          <ProtectedComponent>
            <Link to={"/addproduct"}> Add product</Link>
            <Link to={"/upsertProduct"}>Check Product</Link>
            <Link to={"/checkorders"}>Check Orders</Link>
            <Link to={"/addTeam"}>Add Team</Link>
          </ProtectedComponent>
        </div>
      </div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className=" container grid grid-cols-1 place-content-center place-items-center gap-12 pb-44 pt-24  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  ">
            {products?.map((product) => (
              <ProductCart product={product} key={product._id} />
            ))}
          </div>
        </>
      )}
    </>
  );
}
