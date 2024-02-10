import { useEffect, useState } from "react";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
  }, []);

  return (
    <div className="bg-back">
      <div className="container">
        <table className=" mb-40 w-full text-center">
          <thead className=" border-b-4 border-black pb-6 pt-24 font-sans text-xl font-semibold">
            <tr className="">
              <th className="pb-6 pt-12">Image</th>
              <th className="pb-6 pt-12">Product</th>
              <th className="pb-6 pt-12">Price</th>
              <th className="pb-6 pt-12">In Stock</th>
              <th className="pb-6 pt-12">Description</th>
              <th className="pb-6pt-12 ">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="border-b py-20 text-xl">
                <td className="h-[140px] w-[140px] py-6 ">
                  <img src={product.image} alt="" />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td className="flex h-[140px] items-center justify-center gap-6  pt-6">
                  <p className="cursor-pointer">-</p> {product.inStock}{" "}
                  <p className="cursor-pointer">+</p>
                </td>
                <td className="max-w-[300px]">{product.description} </td>
                <td className="flex cursor-pointer gap-4  pl-4   ">
                  <Link to={`/upsertProduct/${product._id}`}>
                    <CiEdit className=" text-[28px] font-bold text-green-400" />
                  </Link>

                  <MdDelete
                    onClick={() => {
                      let confirmS = confirm("Do you want to delect ?");
                      if (confirmS) {
                        let token = localStorage.getItem("token");
                        axios
                          .delete(
                            `http://localhost:8000/api/v1/product/${product._id}`,
                            {
                              headers: {
                                Authorization: token,
                              },
                            },
                          )
                          .then(() => toast.success("delect success"))
                          .catch(() => {
                            toast("not delected");
                          });
                      }
                    }}
                    className=" text-[28px] font-bold text-red-500"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
