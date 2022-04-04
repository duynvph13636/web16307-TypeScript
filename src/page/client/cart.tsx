import React from 'react'
import { CartType } from '../../types/cartType'
import { ProductType } from '../../types/product'

type CartProps = {
 carts:ProductType[]
}

const Cart = (props: CartProps) => {
console.log(props);
// const cartLoco =JSON.parse(localStorage.getItem("cartitem")) ;

  return (
    <div>
       
<div className="min-h-full">
  <header className="bg-white shadow">
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="lg:flex lg:items-center lg:justify-between">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Giỏ hàng của bạn 
          </h2>
        </div>
        <div className="mt-5 flex lg:mt-0 lg:ml-4">
          <a href="/" className="sm:ml-3">
            <button type="button" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Quay lại 
            </button>
          </a>
        </div>
      </div>
    </div>
  </header>
  <main>
    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-6">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      image
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Số lượng sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Giá sản phẩm
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Status
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Tổng giá
                    </th>
                  </tr>
                </thead>
                
                <tbody className="bg-white divide-y divide-gray-200"><tr>
                    <td className="px-6 py-4">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10">
                          <img className="h-10 w-10 rounded-full" src="${post.image}" />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">
                          </div>
                          <div className="text-sm text-gray-500">
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">  ${'{'}post.name{'}'} </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">  ${'{'}post.quantity{'}'} </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">  ${'{'}post.price.toLocaleString("vi-VN", {'{'} style: "currency", currency: "VND" {'}'}){'}'} </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="px-6 py-4 text-right text-sm font-medium">
                        <button data-id="${post.id}" className="btn bg-black text-white inline-block py-3 px-5 rounded btn-increase"> <a >+</a></button>
                      </span>
                      <span className="px-6 py-4 text-right text-sm font-medium">
                        <button data-id="${post.id}" className="btn bg-black text-white inline-block py-3 px-5 rounded btn-decrease">-</button>
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <p hidden> ${'{'}tong=post.price * post.quantity{'}'}</p> 
                      <div className="text-sm text-gray-900">  ${'{'}tong.toLocaleString("vi-VN", {'{'} style: "currency", currency: "VND" {'}'}){'}'}</div>
                    </td>  
                  </tr>{/* More people... */}
                </tbody>
              </table>
              <h1>Tổng tiền thanh toán:${'{'}thanhtien.toLocaleString("vi-VN", {'{'} style: "currency", currency: "VND" {'}'}){'}'}</h1>
            </div>
          </div>
        </div>
      </div>               
    </div>
  </main>
</div>

    </div>
  )
}

export default Cart