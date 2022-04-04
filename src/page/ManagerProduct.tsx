import React from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";
import "bootstrap/dist/css/bootstrap.min.css";
type ManagerProductProps = {
  data: ProductType[];
};

const ManagerProduct = (props: ManagerProductProps) => {
  console.log(props);
  
  return (
   
    <section>
      <h1 className="text-center font-bold text-4xl pt-10">Sản phẩm</h1>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {props.data.map(item=>{
              return  <Link to={`product/${item._id}/detail`} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={item.image}
                  alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                  className="w-full h-48 object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">{item.price.toLocaleString("vi-VN", { style: "currency", currency: "VND" })}</p>
            </Link>
            })}
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerProduct;
