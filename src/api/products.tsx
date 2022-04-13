import { ProductType } from "../types/product";
import instance from "./instance";
import { isAuthenticate } from "../utils/localStorage";
const { user, token } = isAuthenticate();


export const list  = ()=>{
    const url ="/products";
    return instance.get(url);
}

export const remove = (id:number)=>{
    const url ="/products/"+id;
    return instance.delete(url);
}
export const add = (product:ProductType)=>{
    const url =`/products/${user._id}`;
    return instance.post(url,product,{
        headers: {
            "Authorization": `Bearer ${token}`
        }
    });
}
export const update = (product: ProductType)=>{
    const url =`/products/${product._id}`;
    return instance.put(url,product);
}
export const read = (id:number)=>{
    const url =`/products/${id}`;
    return instance.get(url);
}
export const listProductDetail = (_id:number)=>{
    const url =`/products/${_id}`;
    return instance.get(url);
}
export const listProductPriceDesc = ()=>{
    const url =`/sort/dec`;
    return instance.get(url);
}
export const listProductPriceAsc = ()=>{
    const url =`/sort`;
    return instance.get(url);
}
