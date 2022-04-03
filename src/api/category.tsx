import { CategoryType } from "../types/category";
import instance from "./instance";

export const addCate =(category:CategoryType)=>{
    const url = "/categories";
    return instance.post(url,category)
}
export const listCate =()=>{
    const url = "/categories";
    return instance.get(url)
}
export const removeCate =(id:number)=>{
    const url = "/categories/"+id;
    return instance.delete(url)
}