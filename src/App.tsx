import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";
import type { ProductType } from "./types/product";
import { add, list, remove, update } from "./api/products";
import { Navigate, NavLink, Route, Routes } from "react-router-dom";
import WebsiteLayout from "./page/layouts/WebsiteLayout";
import Hom from "./page/Hom";
import AdminLayout from "./page/layouts/AdminLayout";
import Dashboard from "./page/Dashboard";
import ManagerProduct from "./page/ManagerProduct";
import ProductAdd from "./page/ProductAdd";
import ProductUpdate from "./page/ProductUpdate";
import Singup from "./page/Singup";
import { UserType } from "./types/user";
import { Add } from "./api/user";
import Singin from "./page/Singin";
import ListProduct from "./page/admin/ListProduct";
import ProductDetail from "./page/ProductDetail";
import CategoryAdd from "./page/admin/CategoryAdd";
import { CategoryType } from "./types/category";
import { addCate, listCate, listCateProduct, removeCate } from "./api/category";
import ListCategory from "./page/admin/ListCategory";
import CategoryDetail from "./page/CategoryDetail";
import Cart from "./page/client/cart";
import Products from "./page/client/Products";
function App() {
  const [products, setProduct] = useState<ProductType[]>([]);
  const [categories, setCategory] = useState<CategoryType[]>([]);
  const [cartItems, setCartItems] = useState<ProductType[]>([]);
  const [user,setuser] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();

      setProduct(data);
    };
    const getCategory = async () => {
      const { data } = await listCate();

      setCategory(data);
    };
    getCategory();
    getProducts(); //json-server db.json
  }, []);

  const removeItem = async (id: number) => {
    const { data } = await remove(id);
    if (data) {
      setProduct(products.filter((item) => item._id !== id));
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
    setProduct(products.map((item) => (item._id == data._id ? data : item)));
  };
  const AddCate = async (category: CategoryType) => {
    const { data } = await addCate(category);
    setCategory([...categories, data]);
  };
  const removeItemCate = async (id: number) => {
    const { data } = await removeCate(id);
    if (data) {
      setCategory(categories.filter((item) => item._id !== id));
    }
  };
  const addtocart = (cartItem: ProductType) => {
    console.log(cartItem);
    const exist = cartItems.find((item) => item._id=== cartItem._id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x._id == cartItem._id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    }else{
      setCartItems([...cartItems,{...cartItem,qty:1}])
    }
  localStorage.setItem("cartitem",JSON.stringify(cartItems))
  console.log(cartItems);
  
  };
const removeCart= (cartItem:ProductType)=>{
  const exist = cartItems.find((item) => item._id=== cartItem._id);
  if(exist?.qty===1){
    setCartItems(cartItems.filter((item)=>item._id!==cartItem._id));
  }else{
    setCartItems(
      cartItems.map((x) =>
        x._id === cartItem._id ? { ...exist, qty: exist.qty - 1 } : x
      )
    );
  }
}
const onclickcateProduct =async (id:number)=>{
 const {data}= await listCateProduct(id);
console.log(data);
setProduct(data.product);
}
const handlefillterChange =(newFilters:ProductType)=>{
  console.log("newFillter",newFilters);
  // setProduct({...products,name:newFilters.fillter});
}
  return (
    <div className="App">
      <Routes>
        {/* <Route path='/' element={<h1>hom page</h1>}/>
        <Route path='product' element={<h1>product page</h1>}/> */}
        <Route path="/" element={<WebsiteLayout />}>
          <Route
            index
            element={
              <ManagerProduct data={products} onHandleAddToCart={addtocart} cart={cartItems} onsubmit={handlefillterChange}/>
            }
          />
          <Route
            path="categorydetail"
            element={<CategoryDetail cate={categories} data={products} />}
          />
          <Route path="signup" element={<Singup />} />
          <Route path="signin" element={<Singin />} />
          <Route path="product/:id/detail" element={<ProductDetail />} />
          <Route path="cart" element={<Cart carts={cartItems} onaddcart={addtocart} onremovecart={removeCart}/>}  />
          <Route path="products" element={<Products cate={categories} products={products} onclickProduct={onclickcateProduct}/>}  />
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          {/* <Route path="dashboard" element={<Dashboard />} /> */}
          <Route
            path="product"
            element={<ListProduct data={products} onRemove={removeItem} />}
          />
          <Route
            path="product/add"
            element={<ProductAdd onAdd={onHandleAdd} category={categories} />}
          />
          <Route
            path="category/add"
            element={<CategoryAdd onCate={AddCate} />}
          />
          <Route
            path="category"
            element={
              <ListCategory cate={categories} onRemovecate={removeItemCate} />
            }
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
