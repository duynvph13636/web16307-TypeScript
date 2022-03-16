import { useEffect, useState } from 'react'
import axios from "axios";
import logo from './logo.svg'
import './App.css';
import ShowInfo from "./components/ShowInfor"
import type {ProductType} from "./types/product"
function App() {
  const [info, setInfo] = useState<ProductType>({
    id:1,
    title:"duy",
    age:20
  });
  const [products,setProduct]  = useState<ProductType[]>([]);
  useEffect(()=>{
    const getProducts = async()=>{
      const {data} = await axios.get("http://localhost:3000/posts");

      setProduct(data);
    }
    getProducts();//json-server db.json
  },[]);
  const removeItem =async (id:number)=> {
  const {data}= await axios.delete("http://localhost:3000/posts/"+id);
 if(data){
    setProduct(products.filter(item=>item.id!==id));
 }

  
    
  }
  return (
    <div className="App">
       <ShowInfo info={info}/>
       <table>
         <thead>
           <th>stt</th>
           <th>name</th>
           <th>status</th>
         </thead>
         <tbody> 
           
            {products.map((item,index)=>{
               return <tr>
                          <td>{index + 1}</td>
                          <td>{item.title}</td>
                          <td><button onClick={()=>removeItem(item.id)}>delete</button></td>
                       </tr>
            })}
         
         </tbody>
       </table>
       
    </div>
  )
}

export default App
