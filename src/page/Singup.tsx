import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Add } from "../api/user";
import { ProductType } from "../types/product";
import { UserType } from "../types/user";
type SingupProps = {};
type FormInput = {
  email: string;
  name: string;
  phone: number;
  password:string
};
const Singup = (props: SingupProps) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>();

  const onsubmit: SubmitHandler<FormInput> = async (data) => {
    const onHandleSignup = async (signup: UserType) => {
      const { data } = await Add(signup);
      console.log(data);
    };
    onHandleSignup(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onsubmit)}>
        <input type="text" placeholder="Name" {...register("name")} />
        <input type="text" placeholder="Email" {...register("email")} />
        <input type="number" placeholder="phone" {...register("phone")} />
        <input type="password" placeholder="password" {...register("password")} />
        <button>SIGN UP</button>
      </form>
    </div>
  );
};

export default Singup;
