import React from 'react'
import { Link } from 'react-router-dom'
import { ProductType } from '../types/product'
import "bootstrap/dist/css/bootstrap.min.css";
type ManagerProductProps = {
  data:ProductType[]
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div className='container'>
       <table className='table table-bordered'> 
         <thead>
          <tr>
          <th>stt</th>
           <th>name</th>
           <th>status</th>
          
           </tr>
         </thead> 
         <tbody> 
            {props.data?.map((item,index)=>{
               return <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.name}</td>
                         
                          
                          <td>
                            <Link className='btn btn-primary' to={`/admin/product/${item.id}/edit`}>edit</Link>
                          <button className='btn btn-danger '>delete</button>
                          
                          </td> 
                       </tr>
            })}
         </tbody>
       </table>
    </div>
  )
}

export default ManagerProduct