import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ProductType } from "../types/product";
import "bootstrap/dist/css/bootstrap.min.css";
import { CartType } from "../types/cartType";
type ManagerProductProps = {
  data: ProductType[];
  cart: ProductType[];
  onHandleAddToCart: (cartItem: ProductType) => void;
  onsubmit: (search: ProductType) => void;
};

const ManagerProduct = (props: ManagerProductProps) => {
  
  const [fillter, setfillter] = useState("");
  const typingTimeoutRef = useRef(null);

  const handleSearch = (e) => { 
    const value = e.target.value;
    setfillter(value);
    if (!props.onsubmit) return;
    if(typingTimeoutRef.current){
      clearTimeout(typingTimeoutRef.current);
    }
    typingTimeoutRef.current = setTimeout(() => {
      const formValues = {
        fillter: value,
      };
      props.onsubmit(formValues);
    }, 3000);
  };
// let dataSearch = props.data.filter(item=>{
//   return Object.keys(item).some(key=>item[key].toString().toLowerCase().includes(fillter.toString().toLowerCase()))
// })
  return (
    <section>
      <div className="mt-2 m-auto ">
        <input
          className="border-solid border-2 border-indigo-600 mb-5 ml-5 mt-5"
          type="text"
          placeholder="tìm kiếm ..."
          onChange={handleSearch}
          value={fillter}
        />
        <button className="bg-indigo-600 border-solid ml-2 text-white">
          Tìm kiếm
        </button>
      </div>
      <h1 className="text-center font-bold text-4xl pt-10">Sản phẩm</h1>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {props.data.filter((val)=>{
              if(fillter==""){
                return val;
              }else if(val.name.toLocaleLowerCase().includes(fillter.toLowerCase())){
                return val;
              }
            }).map((item) => {
              return (
                <div className="group">
                  <Link to={`product/${item._id}/detail`}>
                    {" "}
                    <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                      <img
                        src={item.image}
                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                        className="w-full h-48 object-center object-cover group-hover:opacity-75"
                      />
                    </div>
                    <h3 className="mt-4 text-sm text-gray-700">{item.name}</h3>
                  </Link>

                  <p className="mt-1 text-lg font-medium text-gray-900">
                    {item.price.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => {
                      props.onHandleAddToCart(item);
                    }}
                  >
                    add to cart
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagerProduct;
