import { useEffect, useState } from 'react'
import axios from "axios";
import logo from './logo.svg'
import './App.css';
import ShowInfo from "./components/ShowInfor"
import type {ProductType} from "./types/product"
function App() {
  const [info, setInfo] = useState<ProductType>({
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
  
  return (
    <div className="App">
       <ShowInfo info={info}/>
         {products.map(item=>{ return item.title})}
    </div>
  )
}

export default App
