import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { ProductType } from "../types/product";
import { useNavigate } from "react-router-dom";
import axios from "axios";
type ProductAddProps = {
  onAdd: (product: ProductType) => void;
};
type FormValues = {
  name: string;
  price: number;
  image: string;
};
const ProductAdd = (props: ProductAddProps) => {
  const [image, setImage] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();
  const navigate = useNavigate();
  
  const onsubmit: SubmitHandler<FormValues> =async (data) => {
    const CLOUDINARY_PRESET = "ck8bz8wq";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fpolyduy/image/upload";
     if(image){
        const formData = new FormData();
    formData.append("file", image);
    formData.append("upload_preset",CLOUDINARY_PRESET);
    const images = await axios.post(CLOUDINARY_API_URL,formData,{
       headers: {
        "Content-Type": "application/form-data",
    },
    });
    data.image=images.data.url;
     }
   
    console.log(data);
    props.onAdd(data);
    // navigate("/admin/product");
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Add products</h1>
              <input
                type="text"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="name"
                {...register("name")}
              />
              <input
                type="number"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                placeholder="price"
                {...register("price")}
              />
              <input type="file" {...register("image")} onChange={(e)=>{setImage(e.target.files[0])}}/>
              <img src={image} style={{ width: "300px" }}  />
              <button className="w-full text-center py-3 rounded bg-cyan-500 text-black hover:bg-green focus:outline-none my-1">
                ADD
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductAdd;
