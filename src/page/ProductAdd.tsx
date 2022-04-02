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
   const CLOUDINARY_PRESET = "ck8bz8wq";
    const CLOUDINARY_API_URL = "https://api.cloudinary.com/v1_1/fpolyduy/image/upload";

  const uploadImg = async (e) => {
  //  image.src = URL.createObjectURL(e.target.files[0]);
    const files = e.target.file;
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "ck8bz8wq");
    const {data} = await axios.post("https://api.cloudinary.com/v1_1/fpolyduy/image/upload",formData,{
       headers: {
        "Content-Type": "application/form-data",
    },
    });
    // const res = await fetch(
    //   "https://api.cloudinary.com/v1_1/fpolyduy/image/upload" ,
    //   { method: "post", body: "data" }
    // );
    // const file = await data.json();
    // setImage(file.url);
    console.log(data);
    
  };
  const onsubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    props.onAdd(data);
    // navigate("/admin/product");
  };
  
  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
    <input type="text"{...register("name",{required:true,minLength:5})} />
    {errors.name&&errors.name.type==="required"&&<span>cần nhập dữ liệu</span>}
    {errors.name&&errors.name.type==="minLength"&&<span>ít nhất 5 kí tự</span>}
    <input type="number"{...register("price")} />
    <button>Add</button>
</form> */}
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
              <input type="file" {...register("image")} onChange={uploadImg} />
              <img src={image} style={{ width: "300px" }} />
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
