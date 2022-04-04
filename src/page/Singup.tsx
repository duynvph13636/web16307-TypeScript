import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Add } from "../api/user";
import { ProductType } from "../types/product";
import { UserType } from "../types/user";
type FormInput = {
  email: string;
  name: string;
  password: string;
};
const Singup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInput>();

  const onsubmit: SubmitHandler<FormInput> = async (data) => {
    await Add(data);
  };

  return (
    <form action="" onSubmit={handleSubmit(onsubmit)}>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="name"
            {...register("name")} />
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Email"
            {...register("email")} />
            <input
              type="password"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              placeholder="Password"
              {...register("password")}
            />
            <button
              className="w-full text-center py-3 rounded bg-cyan-500 text-black hover:bg-green focus:outline-none my-1"
            >
              Sign up
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

export default Singup;
