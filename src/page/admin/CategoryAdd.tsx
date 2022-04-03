import React from "react";
import { CategoryType } from "../../types/category";
import { SubmitHandler, useForm } from "react-hook-form";
type CategoryAddProps = {
  onCate: (category: CategoryType) => void;
};
type FormValue = {
  name: string;
};
const CategoryAdd = (props: CategoryAddProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValue>();
  const onsubmit: SubmitHandler<FormValue> = async (data) => {
    console.log(data);
    props.onCate(data);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onsubmit)}>
        <header className="bg-white shadow">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">
              Thêm mới danh mục
            </h1>
          </div>
        </header>
        <main>
          <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="md:grid md:grid-cols-3 md:gap-6 ">
              <div className="mt-5 md:mt-0 md:col-span-3 border">
               
                  <div className="shadow sm:rounded-md sm:overflow-hidden">
                    <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                      <div className="col-span-6">
                        <label className="block text-sm font-medium text-gray-700">
                          Tên danh mục
                        </label>
                        <input
                          type="text"
                          id="name_category"
                          className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm h-[30px] border border-gray-300 rounded-md p-1"
                          {...register("name")}
                        />
                      </div>
                    </div>
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                      <a
                        href="/admin/news"
                        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Hủy
                      </a>
                      <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Thêm
                      </button>
                    </div>
                  </div>
               
              </div>
            </div>
          </div>
        </main>
      </form>
    </div>
  );
};

export default CategoryAdd;
