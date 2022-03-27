import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import ShowInfo from "./components/ShowInfor";
import type { ProductType } from "./types/product";
import { add, list, remove, update } from "./api/products";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./page/layouts/WebsiteLayout";
import Hom from "./page/Hom";
import Products from "./page/Products";
import AdminLayout from "./page/layouts/AdminLayout";
import Dashboard from "./page/Dashboard";
import ManagerProduct from "./page/ManagerProduct";
import ProductAdd from "./page/ProductAdd";
import ProductUpdate from "./page/ProductUpdate";
import Singup from "./page/Singup";
import { UserType } from "./types/user";
import { Add } from "./api/user";
import Singin from "./page/Singin";
function App() {
  const [info, setInfo] = useState<ProductType>({
    id: 1,
    name: "duy",
    price: 20,
  });
  const [products, setProduct] = useState<ProductType[]>([]);

  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();

      setProduct(data);
    };
    getProducts(); //json-server db.json
  }, []);

  const removeItem = async (id: number) => {
    const { data } = await remove(id);
    if (data) {
      setProduct(products.filter((item) => item.id !== id));
    }
  };

  const onHandleAdd = async (product: ProductType) => {
    //call api
    const { data } = await add(product);
    console.log(data);
    setProduct([...products, data]);
  };
  const onHandleUpdate = async (product: ProductType) => {
    const { data } = await update(product);
    console.log(product);
    setProduct(products.map((item) => (item.id == data.id ? data : item)));
  };
  const onHandleSignup = async (signup:UserType)=>{
    const {data}= await Add(signup);

console.log(signup);


  }
  return (
    <div className="App">
      <ShowInfo info={info} />
     
      <Routes>
        {/* <Route path='/' element={<h1>hom page</h1>}/>
        <Route path='product' element={<h1>product page</h1>}/> */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<Hom />} />
          <Route path="product" element={<Products />} />
          <Route path="signup" element={<Singup />} />
          <Route path="signin" element={<Singin />} />

        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="product" element={<ManagerProduct data={products} />} />
          <Route
            path="product/add"
            element={<ProductAdd onAdd={onHandleAdd} />}
          />
          <Route
            path="product/:id/edit"
            element={<ProductUpdate onUpdate={onHandleUpdate} />}
          />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
