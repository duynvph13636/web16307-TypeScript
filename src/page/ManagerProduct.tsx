import React from 'react'
import { ProductType } from '../types/product'

type ManagerProductProps = {
  data:ProductType[]
}

const ManagerProduct = (props: ManagerProductProps) => {
  return (
    <div>
       <table>
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
                          {/* <td><button onClick={()=>removeItem(item.id)}>delete</button></td> */}
                       </tr>
            })}
         </tbody>
       </table>
    </div>
  )
}

export default ManagerProduct