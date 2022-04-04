import React, { useEffect, useState } from "react";
import { listProductDetail, read } from "../api/products";
import { ProductType } from "../types/product";
import { useParams } from "react-router-dom";
import ProductInfor from "./ProductInfor";
import { CartType } from "../types/cartType";
type ProductDetailProps = {
 
};

const ProductDetail = (props: ProductDetailProps) => {
  const { id } = useParams();
  const [product, setProduct] = useState();
  useEffect(() => {
    const getDetail = async () => {
      const { data:product } = await listProductDetail(id);
      console.log(product);
      setProduct(product);
    };
    getDetail();
  }, [id]);
  return (
  <div>
      {product && <ProductInfor product={product}/> }
     
  </div>

  );
};

export default ProductDetail;
