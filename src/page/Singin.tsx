import React from "react";
import { UserType } from "../types/user";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { signin } from "../api/user";


type Props = {};
type FormInput = {
  email: String;
  password: String;
};
const Singin = (props: Props) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>();
  const navigate = useNavigate();
  const onSubmit: SubmitHandler<FormInput> = async(data) => {

  await signin(data);
  localStorage.setItem("users",JSON.stringify(data));
  navigate("/");
    console.log(data);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="email" {...register("email")}/>
        <input type="password" placeholder="password"{...register("password")} />
        <button>Sign in</button>
      </form>
    </div>
  );
};

export default Singin;
