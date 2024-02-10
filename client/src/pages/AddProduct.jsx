import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddProduct() {
  const [addProduct, setAddProduct] = useState({
    name: "",
    price: "",
    inStock: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();

    /*  let formData = new FormData();

    formData.append("name", addProduct.name);
    formData.append("price", addProduct.price);
    formData.append("inStock", addProduct.inStock);
    formData.append("image", addProduct.image);
    formData.append("description", addProduct.description);

    console.log({ formData });
    console.log({ addProduct }); */

    axios
      .post("http://localhost:8000/api/v1/product", {
        addProduct,
      })
      .then(() => {
        toast("add new product");
        // setAddProduct({ name: "", price: "" });
      })
      .catch((err) => toast.error(err));
  }

  function handleInput(event) {
    let name = event.target.name;
    let value = event.target.value;
    //   event.target.type == "file" ? event.target.files[0] : event.target.value;

    setAddProduct({
      ...addProduct,
      [name]: value,
    });
  }

  return (
    <>
      <div className="container py-32">
        <p className="mb-4 text-lg">Add new product </p>
        <form
          // action="/api/v1/product" method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
          enctype="multipart/form-data"
        >
          <input
            type="text"
            placeholder="name"
            name="name"
            className="inp w-[500px]"
            onChange={handleInput}
            value={addProduct.name}
          />
          <input
            type="number"
            placeholder="price"
            name="price"
            className="inp w-[500px]"
            onChange={handleInput}
            value={addProduct.price}
          />
          <input
            type="number"
            placeholder="inStock"
            name="inStock"
            className="inp w-[500px]"
            onChange={handleInput}
            value={addProduct.inStock}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            className="inp w-[500px]"
            onChange={handleInput}
            value={addProduct.description}
          />
          <input type="file" name="profileImage" />
          <button
            type="submit"
            className="btn mt-6 w-[180px] bg-black text-white"
          >
            Add Product{" "}
          </button>
        </form>
      </div>
    </>
  );
}
