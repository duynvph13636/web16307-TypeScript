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
  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    await signin(data);
    localStorage.setItem("users", JSON.stringify(data));
    setTimeout(() => {
      navigate("/");
    }, 2000);
    
    console.log(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onSubmit)}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign in</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Email"
              {...register("email")}
            />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Password"
              {...register("password")}
            />
            <button
              className="w-full text-center py-3 rounded bg-cyan-500 text-black hover:bg-green focus:outline-none my-1"
            >
              Sign in
            </button>
          </div>
          <div className="text-grey-dark mt-6">
            Already have an account?
            <a
              className="no-underline border-b border-blue text-blue"
              href="../login/"
            >
              Log in
            </a>
            .
          </div>
        </div>
      </div>
    </form>
  );
};

export default Singin;
