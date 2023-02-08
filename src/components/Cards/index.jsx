import CardsStyle from "./style";
import { FiShoppingBag } from "react-icons/fi";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Cards({id, image, name, price, description}) {

  const {addToCart} = useContext(AuthContext)

  return (
    <CardsStyle id={id}>
      <div>
        <figure>
          <img src={image} alt="" />
        </figure>
        <div>
          <h2>{name}</h2>
          <span>R${price}</span>
        </div>
        <h6>{description}</h6>
      </div>
      <button onClick={() => addToCart(id)}>
        <FiShoppingBag /> Comprar
      </button>
    </CardsStyle>
  );
}

export default Cards;
