import styleCard from "./card.module.css";
import { CartType } from "../../../pages/dashboard/Cart";

const CartCard: React.FC<CartType> = ({ product, quantity, detailProduct }) => {
    return (
        <div className={styleCard["card-cart"]}>
            <img src={detailProduct?.image} />
            <div className={styleCard.info}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <p>{product}</p>
                    <p>Rp. {detailProduct?.price.toLocaleString()}</p>
                </div>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}>
                    <p>Quantity: {quantity}</p>
                    <p>
                        Total:{" "}
                        {(
                            (detailProduct?.price || 0) * quantity
                        ).toLocaleString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CartCard;
