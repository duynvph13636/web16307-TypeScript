import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'
import "bootstrap/dist/css/bootstrap.min.css";
type ManagerProductProps = {
  data:ProductType[]
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    // <div className='container'>
    //    <table className='table table-bordered'> 
    //      <thead>
    //       <tr>
    //       <th>stt</th>
    //        <th>name</th>
    //        <th>status</th>
          
    //        </tr>
    //      </thead> 
    //      <tbody> 
    //         {props.data?.map((item,index)=>{
    //            return <tr key={index}>
    //                       <td>{index + 1}</td>
    //                       <td>{item.name}</td>
                         
                          
    //                       <td>
    //                         <Link className='btn btn-primary' to={`/admin/product/${item.id}/edit`}>edit</Link>
    //                       <button className='btn btn-danger '>delete</button>
                          
    //                       </td> 
    //                    </tr>
    //         })}
    //      </tbody>
    //    </table>
    // </div>
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
  )
}

export default ManagerProduct