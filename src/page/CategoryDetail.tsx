import React from "react";
import { Link } from "react-router-dom";
import { CategoryType } from "../types/category";
import { ProductType } from "../types/product";

type CategoryDetailProps = {
  data: ProductType[];
  cate: CategoryType[];
};

const CategoryDetail = (props: CategoryDetailProps) => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative z-10 flex items-baseline justify-between pt-24 pb-6 border-b border-gray-200">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900">
          Tất cả sản phẩm
        </h1>
        <div className="flex items-center">
          <div className="relative inline-block text-left"></div>
        </div>
      </div>
      <section aria-labelledby="products-heading" className="pt-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">
          {/* Filters */}
          <form className="hidden lg:block">
            <h3 className="sr-only">Danh mục sản phẩm</h3>
            <ul
              role="list"
              className="text-sm font-medium text-gray-900 space-y-4 pb-6 border-b border-gray-200"
            >
              {props.cate &&
                props.cate.map((item) => {
                  return (
                    <li>
                      <Link to="#">{item.name}</Link>
                    </li>
                  );
                })}
            </ul>
          </form>
          {/* Product grid */}
          <div className="lg:col-span-3">
            {/* Replace with your content */}
            <div className="rounded-lg h-96 lg:h-full">
              <div className="bg-white">
                <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                  <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
{props.data&& props.data.map(product=>{
    return   <Link to={`product/${product._id}/detail`} className="group">
                      <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                        <img
                          src={product.image}
                          alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                          className="w-full h-48 object-center object-cover group-hover:opacity-75"
                        />
                      </div>
                      <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                      <p className="mt-1 text-lg font-medium text-gray-900">
                        {product.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}
                      </p>
                    </Link>
                  
})}
                  
                    {/* More products... */}
                  </div>
                </div>
              </div>
            
            </div>
            {/* /End replace */}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CategoryDetail;
