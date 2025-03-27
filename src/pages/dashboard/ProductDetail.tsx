import { Link, useParams } from "react-router-dom";
import HeadContent from "../../components/app/content/HeadContent"
import { useEffect, useState } from "react";
import { getDetailProduct } from "../../service/ProductService";
import { ProductType } from "./Product";
import DetailProductContent from "../../components/app/content/DetailProductContent";



const ProductDetail = () => {
  const { slug } = useParams();
  const [detailProduct, setDetailProduct] = useState<ProductType | null>(null);
  
  console.log(detailProduct);

  useEffect(() => {
    setDetailProduct(getDetailProduct(slug || "") || null);
  }, [slug]);

  return (
    <HeadContent title={`Detail Product - ${detailProduct ? slug : "Not Found"}`}>
      {detailProduct ? (<DetailProductContent {...detailProduct} /> ) : (<Link to="/dashboard/product"> Back To Product </Link>)}
    </HeadContent>
  )
}

export default ProductDetail