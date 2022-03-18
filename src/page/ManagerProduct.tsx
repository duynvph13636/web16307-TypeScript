import React from "react";
import { ProductType } from "../types/product";
type ManagerProductProps = {
  data: ProductType;
};

const ManagerProduct = (props: ManagerProductProps) => {
  setTimeout(() => {
    console.log(props);
  }, 1000);
  return (
    <div>
      <table className="table table-striped">
         <thead>
           <tr>
             <th scope="col">STT</th>
           <th scope="col">Name</th>
           <th scope="col">Status</th>
           </tr>
           
         </thead>
         <tbody> 
            {props.data.map((item,index)=>{
               return <tr key={index}>
                          <th>{index + 1}</th>
                          <td>{item.title}</td>
                          <td><button className="btn btn-danger">delete</button></td>
                       </tr>
            })}
         </tbody>
       </table>
    </div>
  );
};

export default ManagerProduct;
