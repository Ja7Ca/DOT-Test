import styleContent from "./content.module.css";
import { ProductType } from "../../../pages/dashboard/Product";
import ButtonMain from "../button/ButtonMain";
import { addCart } from "../../../service/CartService";
import toast from "react-hot-toast";
import { useEffect, useState } from "react";

const DetailProductContent: React.FC<ProductType> = ({
    id,
    name,
    price,
    image,
}) => {
    const [userLog, setUserLog] = useState<string | null>(null);

    const handleAddToCart = () => {
        try {
            if (!userLog) {
                throw new Error("Please Login First");
            }
            const result = addCart({ product: id, user: userLog });
            if (result.success) {
                toast.success(result.message);
            }
        } catch (error) {
            toast.error("Something Went Wrong");
            console.log(error);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setUserLog(storedUser);
    }, []);

    return (
        <div className={styleContent["wrap-content"]}>
            <img src={image} className={styleContent["content-image"]} />
            <div className={styleContent["content-product"]}>
                <p>{name}</p>
                <p>{price}</p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Labore placeat nostrum voluptate, reiciendis doloremque sed
                    est ipsam velit odit modi accusantium minus, repellat et
                    officia animi voluptatibus dolores minima omnis.
                </p>
                <ButtonMain label="Add To Cart" onClick={handleAddToCart}/>
            </div>
        </div>
    );
};

export default DetailProductContent;
