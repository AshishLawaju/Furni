import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios"
export default function AddTeam() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [addTeam, setAddTeam] = useState({
    profile: null,
    name: "",
    designation: "",
    description: "",
  });

  function handleInput(event) {
    let name = event.target.name;
    let value =
      event.target.type == "file" ? event.target.files[0] : event.target.value;

    setAddTeam({
      ...addTeam,
      [name]: value,

      //   [event.target.name]: event.target.value,
    });
  }

  /*  function handleFile(e){
    event.target.files[0]
  } */

  function handleSubmit(e) {
    e.preventDefault();

    let formData = new FormData();
    formData.append("name", addTeam.name);
    formData.append("description", addTeam.description);
    formData.append("designation", addTeam.designation);
    formData.append("profile", addTeam.profile);

    // console.log( formData );


    setIsSubmitting(true);
    
    
    axios
      .post(
        "http://localhost:8000/api/v1/team",

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
        toast("add new member");
        setIsSubmitting(false);
        /* setAddTeam({
          name: "",
          price: "",
          description: "",
          inStock: 0,
          categories: [""],
          profileImage: null,
        }); */
      })
      .catch((err) => {
        setIsSubmitting(false);
        toast.error("somethign went wrong submit");
      });
  }

  function handleFile(e) {
    let name = e.target.name;
    let value = e.target.files[0];
   
   setAddTeam(
    {
        ...addTeam,
        [name]: value,
    }
   )
    

    
    // addTeam.profile = e.target.files[0];/* yo line */

    // productData.profile = e.target.files[0];
  }

  return (
    <div className="container">
      <p className="my-12 text-3xl">Add Team Member</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="flex items-center gap-3">
          <label htmlFor="" className=" min-w-[150px]">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="name"
            className="inp"
            onChange={handleInput}
            value={addTeam.name}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="" className=" min-w-[150px]">
            Degisination
          </label>
          <input
            type="text"
            name="designation"
            placeholder="designation"
            className="inp"
            onChange={handleInput}
            value={addTeam.designation}
          />
        </div>
        <div className="flex items-center gap-3">
          <label htmlFor="" className=" min-w-[150px]">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            placeholder="description"
            className="inp"
            onChange={handleInput}
            value={addTeam.description}
          />
        </div>

        <div className="flex items-center gap-3">
          <label htmlFor="" className=" min-w-[150px]">
            Profile
          </label>
          <input
            type="file"
            name="profile"
            onChange={handleFile}
            
          />
        </div>

        <div>
          <button type="submit" className="btn bg-black text-white">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
