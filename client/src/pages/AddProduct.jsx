import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

export default function AddProduct() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    description: "",
    inStock: 0,
    categories: [""],
    profileImage: null,
  });
  function handleInput(event) {
    let name = event.target.name;
    let value =
      event.target.type == "file" ? event.target.files[0] : event.target.value;

    setNewProduct({
      ...newProduct,
      [name]: value,

      //   [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log("handleSubmit called");

    //image upload
    let formData = new FormData();
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("description", newProduct.description);
    formData.append("profileImage", newProduct.profileImage);
    formData.append("inStock", newProduct.inStock);

    setIsSubmitting(true);

    axios
      .post(
        "http://localhost:8000/api/v1/product/",

        formData, //newProduct use vako imgage le garda from data
        {
          headers: {
            // Authorization: `Bearer ${access_token}`,

            "Content-Type": "multipart/form-data",
            enctype: "multipart/form-data",
          },
        },
      )
      .then(() => {
        toast("add new product");
        setIsSubmitting(false);
        setNewProduct({
          name: "",
          price: "",
          description: "",
          inStock: 0,
          categories: [""],
          profileImage: null,
        });
      })
      .catch((err) => {
        setIsSubmitting(false);
        toast.error("somethign went wrong submit");
      });
  }

  /*  const [profile, setProfile] = useState(null);
  const[title,setTitle] = useState("")

 */
  const [productData, setProductData] = useState({
    profile: null,
    title: "",
  });
  function submitUpload(e) {
    e.preventDefault();

    let formData = new FormData();

    formData.append("profileImage", productData.profile);
    formData.append("title", productData.title);
    console.log(productData.profile);
    axios.post("http://localhost:8000/api/v1/product/upload", formData, {
      headers: {
        // Authorization: `Bearer ${access_token}`,

        "Content-Type": "multipart/form-data",
        enctype: "multipart/form-data",
      },
    });
    console.log(formData);
  }

  function handleUpload(event) {
    /*  setProfile(e.target.files[0]);
    setTitle(e.target.title.value)
 */
    let name = event.target.name;
    let value =
      event.target.type == "file" ? event.target.files[0] : event.target.value;

    setProductData({
      ...productData,
      [name]: value,
    });
  }
  function handleFile(e) {
    newProduct.profileImage = e.target.files[0];

    // productData.profile = e.target.files[0];
  }

  return (
    <>
      <div className="container py-32">
        <p className="mb-4 text-lg">Add new product </p>
        {/* weorking  form*/}
        {/*    <form onSubmit={submitUpload}>
          <input type="file" name="profileImage" onChange={handleFile} />
          <input
            type="text"
            name="title"
            onChange={handleUpload}
            value={productData.title}
          />
          <button type="submit btn "> upload</button>
        </form> */}

        {/* <form
          // action="/api/v1/product" method="POST"
          onSubmit={handleSubmit}
          className="flex flex-col gap-3"
        >
          <input
            type="text"
            placeholder="name"
            name="name"
            className="inp w-[500px]"
            onChange={handleInput}
            value={newProduct.name}
          />
          <input
            type="number"
            placeholder="price"
            name="price"
            className="inp w-[500px]"
            onChange={handleInput}
            value={newProduct.price}
          />
          <input
            type="number"
            placeholder="inStock"
            name="inStock"
            className="inp w-[500px]"
            onChange={handleInput}
            value={newProduct.inStock}
          />
          <input
            type="text"
            placeholder="description"
            name="description"
            className="inp w-[500px]"
            onChange={handleInput}
            value={newProduct.description}
          />
          <input type="file" name="profileImage" onChange={handleInput} />
          <button
            type="submit"
            className="btn mt-6 w-[180px] bg-black text-white"
          >
            Add Product{" "}
          </button>
        </form> */}

        <form
          onSubmit={handleSubmit}
          className="container flex flex-col gap-4 "
        >
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
          <div className="form-group">
            <label htmlFor="" className="required-field">
              Image
            </label>
            <input
              type="file"
              className="inp min-w-[250px]"
              name="image"
              onChange={handleFile}
            />
          </div>
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
            disabled={isSubmitting}
            type="submit "
            className="btn max-h-[50px] w-[200px] bg-black text-white disabled:cursor-no-drop disabled:opacity-50"
          >
            {isSubmitting ? "loading.." : "subimt"}
          </button>
        </form>
      </div>
    </>
  );
}
