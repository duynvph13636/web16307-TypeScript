import { useEffect, useState } from 'react'
import axios from "axios";
import logo from './logo.svg'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import ShowInfo from "./components/ShowInfor"
import type {ProductType} from "./types/product"
import { list, remove } from './api/products';
import { Navigate, NavLink, Route, Routes } from 'react-router-dom';
import WebsiteLayout from './page/layouts/WebsiteLayout';
import Hom from './page/Hom';
import Products from './page/Products';
import AdminLayout from './page/layouts/AdminLayout';
import Dashboard from './page/Dashboard';
import ManagerProduct from './page/ManagerProduct';
function App() {
  // const [info, setInfo] = useState<ProductType>({
  //   id:1,
  //   title:"duy",
  //   age:20
  // });
  const [products,setProduct]  = useState<ProductType[]>([]);
  useEffect(()=>{
    const getProducts = async()=>{
      const {data} = await list();

      setProduct(data);
    }
    getProducts();//json-server db.json
  },[]);
  const removeItem =async (id:number)=> {
  const {data} =await remove(id);
 if(data){
    setProduct(products.filter(item=>item.id!==id));
 }
  }
  return (
    <div className="App">
       {/* <ShowInfo info={info}/> */}
       {/* <table>
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
       </table> */}
       {/* <header>
         <ul>
           <li><NavLink to="/">Hom page</NavLink></li>
           <li><NavLink to="/product">products page</NavLink></li>
           <li><NavLink to="/admin/dashboard">Admin dashboard</NavLink></li>
         </ul>
       </header> */}
       <Routes>
        {/* <Route path='/' element={<h1>hom page</h1>}/>
        <Route path='product' element={<h1>product page</h1>}/> */}
        <Route path='/' element={<WebsiteLayout/>}>
              <Route index element={<Hom/>}/>
              <Route path='product' element={<Products/>}/>
        </Route>
        <Route path='admin' element={<AdminLayout/>}>
              <Route index element={<Navigate to="dashboard"/>}/>
              <Route path='dashboard' element={<Dashboard/>}/>
              <Route path='product' element={<ManagerProduct data={products}/>}/>
        </Route>
       </Routes>
    </div>
  )
}

export default App
