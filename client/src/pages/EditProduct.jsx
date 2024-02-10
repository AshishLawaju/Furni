import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";

export default function EditProduct() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    inStock: "",
    // image: "",
  });
  const { slug } = useParams();

  useEffect(() => {
    if (slug) {
      axios
        .get(`http://localhost:8000/api/v1/product/${slug}`)
        .then((res) => {
          setNewProduct(res.data);
          console.log(res.data);
        })
        .catch((err) => {
          toast.error("something went wrong try again", err);
        });
    }
  }, [slug]);

  function handleSubmit(e) {
    e.preventDefault();
    let token = localStorage.getItem("token");
    axios
      .put(`http://localhost:8000/api/v1/product/${slug}`, newProduct, {
        headers: {
          Authorization: token,
        },
      })
      .then(() => toast.success("updates"))
      .catch((err) => toast("not updated"));
  }
  function handleInput(e) {
    let name = e.target.name;
    let value = e.target.value;

    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  }

  function handleFile(e) {
    setNewProduct({
      image: e.target.files[0],
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit} className="container flex flex-col gap-4 ">
        <div className="form-group">
          <label htmlFor="" className="form-label required-field">
            Name
          </label>
          <input
            type="text "
            className="inp min-w-[250px]"
            placeholder="name"
            name="name"
            onChange={handleInput}
            value={newProduct.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="" className="required-field">
            Price
          </label>
          <input
            type="number"
            className="inp min-w-[250px]"
            placeholder="price"
            name="price"
            onChange={handleInput}
            value={newProduct.price}
          />
        </div>
        {/* <div className="form-group">
          <label htmlFor="" className="required-field">
            Image
          </label>
          <input
            type="file"
            className="inp min-w-[250px]"
            name="profileImage"
            onChange={handleFile}
          />
        </div> */}
        <div className="form-group">
          <label htmlFor="" className="required-field">
            Description
          </label>
          <textarea
            type="text "
            className="inp min-w-[250px]"
            placeholder="description"
            name="description"
            onChange={handleInput}
            value={newProduct.description}
          />
        </div>

        <div className="form-group">
          <label htmlFor="" className="required-field">
            IN-STOCK
          </label>
          <textarea
            type="text "
            className="inp min-w-[250px]"
            placeholder="IN-STOCK"
            name="inStock"
            onChange={handleInput}
            value={newProduct.inStock}
          />
        </div>
        <button
          //   disabled={isSubmitting}
          type="submit "
          className="btn max-h-[50px] w-[200px] bg-black text-white disabled:cursor-no-drop disabled:opacity-50"
        >
          {/* {isSubmitting ? "loading.." : "subimt"} */} submit
        </button>
      </form>
    </>
  );
}
