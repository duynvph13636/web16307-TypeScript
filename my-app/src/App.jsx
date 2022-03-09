import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import ShowInfor from './components/Showinfo'
import Item from './components/item'

function App() {
  const [count, setCount] = useState(0)
const [products,setProduct] =useState([
  {id:1,name:"product A"},
  {id:2,name:"product b"},
  {id:3,name:"product c"}
]) 
const removeItem = (id)=>{
  const newProduct = products.filter( item => item.id !== id );
  setProduct(newProduct);
  console.log(newProduct);
}
  return (
    <div className="App">
      <p>count:{count} <button onClick={()=>setCount(count+1)}>click</button></p>
      {products.map((item)=><div>{item.name} <button onClick={()=> removeItem(item.id)}>remove</button></div>)}
    <ShowInfor name="duy" age={20}/>
    </div>
  )
}

export default App
