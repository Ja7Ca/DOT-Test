import { Link } from "react-router-dom";
import ButtonMain from "../button/ButtonMain";
import styleCard from "./card.module.css";

type ProductCardProps = {
    id: string;
    name: string;
    price: number;
    image: string;
    addToCart: (id: string) => void;
};
const ProductCard: React.FC<ProductCardProps> = ({
    id,
    name,
    price,
    image,
    addToCart
}) => {
    const handleAddCart = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation(); // Stop event from reaching <Link>
        e.preventDefault(); // Prevent default link behavior
        addToCart(id);
    };

    return (
        <Link to={`${id}`} className={styleCard["card-product"]}>
            <img src={image} alt={name} />
            <div className={styleCard.info}>
                <h3>{name}</h3>
                <p>Rp. {price.toLocaleString()}</p>
            </div>
            <ButtonMain label="Add To Cart" onClick={handleAddCart} />
        </Link>
    );
};

export default ProductCard;
