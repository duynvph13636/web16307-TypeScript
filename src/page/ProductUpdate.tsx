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
 const onSubmit: SubmitHandler<FormInput> = data => {
    console.log(data);
    props.onUpdate(data);
    navigate("/admin/product");
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" {...register("name")} />
        <input type="number" {...register("price")} />
        <button>Update</button>
      </form>
    </div>
  );
};

export default ProductUpdate;
