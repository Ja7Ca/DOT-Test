import { useEffect, useState } from "react";
import HeadContent from "../../components/app/content/HeadContent";
import { getProduct } from "../../service/ProductService";
import ProductCard from "../../components/app/card/ProductCard";
import { addCart } from "../../service/CartService";
import toast from "react-hot-toast";

export type ProductType = {
    id: string;
    name: string;
    price: number;
    image: string;
};

const Product = () => {
    const [userLog, setUserLog] = useState<string | null>(null);
    const [dataProduct, setDataProduct] = useState<ProductType[]>([]);

    const updateDataProduct = () => {
        const products = getProduct();
        setDataProduct(products);
    };

    const handleAddToCart = (product: string) => {
      try {
        if(!userLog){
          throw new Error("Please Login First")
        }
        const result = addCart({product, user: userLog})
        if (result.success){
          toast.success(result.message)
        }
      } catch (error) {
        toast.error("Something Went Wrong")
        console.log(error)
      }
    }

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setUserLog(storedUser);
    }, []);

    useEffect(() => {
        if (userLog) {
            updateDataProduct();
        }
    }, [userLog]);

    return (
        <HeadContent title="Product">
            <div
                style={{
                    marginBottom: "20px",
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
                    gap: "1.25rem",
                }}>
                  {dataProduct.length > 0 ? dataProduct?.map(el => (
                    <ProductCard key={el.id} {...el} addToCart={handleAddToCart} />
                  )) : "Product Kosong"}
                </div>
        </HeadContent>
    );
};

export default Product;
