import React, { useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { read } from "../api/products";
import { ProductType } from "../types/product";
type ProductUpdateProps = {
  onUpdate: (product: ProductType) => void;
};
type FormInput = {
  name: string;
  price: number;
  image:string;
};
const ProductUpdate = (props: ProductUpdateProps) => {
  const { id } = useParams();
  console.log(id);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
    
  } = useForm<FormInput>();
  const navigate = useNavigate();
 
  useEffect(() => {
    const getProduct = async () => {
      const { data } = await read(id);
      console.log(data);
      reset(data);
    };
    getProduct();
  }, []);
 const onSubmit: SubmitHandler<FormInput> = (data:any) => {
   console.log(data);
props.onUpdate(data);
    navigate("/admin/product");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="bg-grey-lighter min-h-screen flex flex-col">
          <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
            <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
              <h1 className="mb-8 text-3xl text-center">Edit Product</h1>
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
              <input type="file" {...register("image")} />
              
              <button className="w-full text-center py-3 rounded bg-cyan-500 text-black hover:bg-green focus:outline-none my-1">
                Edit
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ProductUpdate;
