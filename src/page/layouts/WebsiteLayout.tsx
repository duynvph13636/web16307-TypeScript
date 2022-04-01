import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
//       <main>
//         <Outlet />
//       </main>
//       <footer>Footer</footer>
//     </div>
<div>
  <header>
    <div className="header-2">
      <nav className="bg-white py-2 md:py-4">
        <div className="container px-4 mx-auto md:flex md:items-center">
          <div className="flex justify-between items-center">
            <a href="#" className="font-bold text-xl text-indigo-600">FPT Polytechnic</a>
            <button className="border border-solid border-gray-600 px-3 py-1 rounded text-gray-600 opacity-50 hover:opacity-75 md:hidden" id="navbar-toggle">
              <i className="fas fa-bars" />
            </button>
          </div>
          <div className="hidden md:flex flex-col md:flex-row md:ml-auto mt-3 md:mt-0" id="navbar-collapse">
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-white rounded bg-indigo-600">Trang chủ</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Giỏ hàng</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Sản phẩm</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Liên hệ</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-gray-600 rounded hover:bg-gray-200 hover:text-gray-700 transition-colors duration-300">Tin tức</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Đăng nhập</a>
            <a href="#" className="p-2 lg:px-4 md:mx-2 text-indigo-600 text-center border border-transparent rounded hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-300">Admin</a>
          </div>
        </div>
      </nav>
      <div className="mt-2 w-full m-auto">
       <img className="w-full" src="https://picsum.photos/3000/700"/>

      </div>
    </div></header>
  <section>
    <h1 className="text-center font-bold text-4xl pt-10">Sản phẩm</h1>
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://picsum.photos/250/250" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              Iphone
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $48
            </p>
          </a>
          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://picsum.photos/250/250" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              Samsung 
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $35
            </p>
          </a>
          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://picsum.photos/250/250" alt="Person using a pen to cross a task off a productivity paper card." className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              oppo
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $89
            </p>
          </a>
          <a href="#" className="group">
            <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
              <img src="https://picsum.photos/250/250" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
            </div>
            <h3 className="mt-4 text-sm text-gray-700">
              iphone
            </h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              $35
            </p>
          </a>
          {/* More products... */}
        </div>
      </div>
    </div>
  </section>
  <section>
    {/* component */}
    <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
    {/* ====== Blog Section Start */}
    <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20">
      <div className="container">
        <div className="flex flex-wrap justify-center -mx-4">
          <div className="w-full px-4">
            <div className="text-center mx-auto mb-[60px] lg:mb-20 max-w-[510px]">
              <span className="font-semibold text-lg text-primary mb-2 block">
                Our Blogs
              </span>
              <h2 className="
            font-bold
            text-3xl
            sm:text-4xl
            md:text-[40px]
            text-dark
            mb-4
            ">
                Our Recent News
              </h2>
              <p className="text-base text-body-color">
                There are many variations of passages of Lorem Ipsum available
                but the majority have suffered alteration in some form.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-01.jpg" alt="image" className="w-full" />
              </div>
              <div>
                <span className="
               bg-primary
               rounded
               inline-block
               text-center
               py-1
               px-4
               text-xs
               leading-loose
               font-semibold
               text-white
               mb-5
               ">
                  Dec 22, 2023
                </span>
                <h3>
                  <a href="javascript:void(0)" className="
                  font-semibold
                  text-xl
                  sm:text-2xl
                  lg:text-xl
                  xl:text-2xl
                  mb-4
                  inline-block
                  text-dark
                  hover:text-primary
                  ">
                    Meet AutoManage, the best AI management tools
                  </a>
                </h3>
                <p className="text-base text-body-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-02.jpg" alt="image" className="w-full" />
              </div>
              <div>
                <span className="
               bg-primary
               rounded
               inline-block
               text-center
               py-1
               px-4
               text-xs
               leading-loose
               font-semibold
               text-white
               mb-5
               ">
                  Mar 15, 2023
                </span>
                <h3>
                  <a href="javascript:void(0)" className="
                  font-semibold
                  text-xl
                  sm:text-2xl
                  lg:text-xl
                  xl:text-2xl
                  mb-4
                  inline-block
                  text-dark
                  hover:text-primary
                  ">
                    How to earn more money as a wellness coach
                  </a>
                </h3>
                <p className="text-base text-body-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3 px-4">
            <div className="max-w-[370px] mx-auto mb-10">
              <div className="rounded overflow-hidden mb-8">
                <img src="https://cdn.tailgrids.com/1.0/assets/images/blogs/blog-01/image-03.jpg" alt="image" className="w-full" />
              </div>
              <div>
                <span className="
               bg-primary
               rounded
               inline-block
               text-center
               py-1
               px-4
               text-xs
               leading-loose
               font-semibold
               text-white
               mb-5
               ">
                  Jan 05, 2023
                </span>
                <h3>
                  <a href="javascript:void(0)" className="
                  font-semibold
                  text-xl
                  sm:text-2xl
                  lg:text-xl
                  xl:text-2xl
                  mb-4
                  inline-block
                  text-dark
                  hover:text-primary
                  ">
                    The no-fuss guide to upselling and cross selling
                  </a>
                </h3>
                <p className="text-base text-body-color">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* ====== Blog Section End */}
  </section>
  <footer className="bg-sky-600 mt-4 h-20"> <h2 className="text-center pt-7 ">Nguyễn văn duy</h2></footer>
</div>


  );
};

export default WebsiteLayout;
