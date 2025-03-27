import { useEffect, useState } from "react";
import HeadContent from "../../components/app/content/HeadContent";
import { ProductType } from "./Product";
import { getCart } from "../../service/CartService";
import CartCard from "../../components/app/card/CartCard";

export type CartType = {
    product: string;
    quantity: number;
    user: string;
    detailProduct: ProductType | null;
};

const Cart = () => {
    const [userLog, setUserLog] = useState<string | null>(null);
    const [dataCart, setDataCart] = useState<CartType[]>([]);
    console.log(dataCart);
    const updateDataCart = () => {
        const cart = getCart(userLog || "");
        setDataCart(cart);
    };

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        setUserLog(storedUser);
    }, []);

    useEffect(() => {
        if (userLog) {
          updateDataCart();
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [userLog]);

    return <HeadContent title="Keranjang Product">
        <div style={{
            marginBottom: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(15rem, 1fr))",
            gap: "1.25rem",
        }}>
            {dataCart.length > 0 ? dataCart?.map((el) => (
                <CartCard key={el.product} {...el} />
            )) : <h3 style={{ color: "red" }}>Keranjang Kosong</h3>}
        </div>
    </HeadContent>;
};

export default Cart;
