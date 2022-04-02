import React from "react";
import { Link } from "react-router-dom";

type Props = {};

const HeaderWebsite = (props: Props) => {
  return (
    <div>
      <header>
        <div className="header-2">
          <nav className="bg-white py-2 md:py-4">
            <div className="container px-4 mx-auto md:flex md:items-center">
              <div className="flex justify-between items-center">
                <a href="#" className="font-bold text-xl text-indigo-600">
                  FPT Polytechnic
                </a>
                <button
                  className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden"
                  id="navbar-toggle"
                >
                  <i className="fas fa-bars" />
                </button>
              </div>
              <div
                className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0"
                id="navbar-collapse"
              >
                <a
                  href="#"
                  className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600"
                >
                  Trang chủ
                </a>
                <a
                  href="#"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Giỏ hàng
                </a>
                <a
                  href="#"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Sản phẩm
                </a>
                <a
                  href="#"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Liên hệ
                </a>
                <a
                  href="#"
                  className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300"
                >
                  Tin tức
                </a>
                <a
                  href="#"
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                >
                  Đăng nhập
                </a>
                <Link
                  to={"admin"}
                  className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300"
                >
                  Admin
                </Link>
              </div>
            </div>
          </nav>
          <div className="mt-2 w-full m-auto">
            <img className="w-full" src="https://picsum.photos/3000/700" />
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderWebsite;
