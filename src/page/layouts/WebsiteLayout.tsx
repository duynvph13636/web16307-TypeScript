import React from "react";
import { Outlet } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
type Props = {};

const WebsiteLayout = (props: Props) => {
  return (
    <div className="container">
      <div className="header-nav">
        <nav className="nav">
          <a className="nav-link active" aria-current="page" href="#">
            Home
          </a>
          <a className="nav-link" href="#">
            Product
          </a>
          <a className="nav-link" href="#">
            Admin
          </a>
          <a className="nav-link" href="#">
            
           {/* <i className="fa-solid fa-cart-shopping" /> */}
           <i className="fa-solid fa-cart-shopping"></i>
          </a>
          
        </nav>
        <div>
       
        </div>
      </div>
<section>
  <h1 className="text-center font-bold text-4xl pt-10">Sản phẩm yêu thích</h1>
  <div className="bg-white">
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <a href="#" className="group">
          <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="image/anh1.jpg" alt="Tall slender porcelain bottle with natural clay textured body and cork stopper." className="w-full h-full object-center object-cover group-hover:opacity-75" />
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
            <img src="https://picsum.photos/" alt="Olive drab green insulated bottle with flared screw lid and flat top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
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
            <img src="https://picsum.photos/" alt="Person using a pen to cross a task off a productivity paper card." className="w-full h-full object-center object-cover group-hover:opacity-75" />
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
            <img src="https://picsum.photos/" alt="Hand holding black machined steel mechanical pencil with brass tip and top." className="w-full h-full object-center object-cover group-hover:opacity-75" />
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

    
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </div>
  );
};

export default WebsiteLayout;
