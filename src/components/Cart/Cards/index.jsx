import CardStyle from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";

function Cards({id, image, name, price, count}) {

  const { removeToCart, addToCart } = useContext(AuthContext)


  return (
    <CardStyle id={id}>
      <figure>
        <img src={image} alt="" />
      </figure>
      <h4>{name}</h4>
      <div className="CardItemName">
        <span className="CardItemQTD">Qtd</span>
        <div className="CardItemAmount">
          <span onClick={()=> removeToCart(id)}>-</span>
          <span>{count}</span>
          <span onClick={() => addToCart(id)}>+</span>
        </div>
      </div>
      <h3>R${price}</h3>
      <AiFillCloseCircle onClick={() => removeToCart(id)}/>
    </CardStyle>
  );
}

export default Cards;