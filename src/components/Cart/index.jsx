import CartStyle from "./style";
import { AiFillCloseCircle } from "react-icons/ai";
import Cards from "./Cards";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";

function Cart() {
  const { setOpenCart, cartList, ammountCost } =
    useContext(AuthContext);

  const selfCloseCart = () => {
    setOpenCart(false)
  }

  return (
    <CartStyle>
      {ammountCost > 0 ? (
        <>
          <div>
            <div>
              <h2>Carrinho de compras</h2>
              <AiFillCloseCircle onClick={() => setOpenCart(false)} />
            </div>
            <section>
              {cartList?.map((item, index) => (
                <Cards
                  key={index}
                  id={item.id}
                  image={item.photo}
                  name={item.name}
                  price={item.price}
                  count={item.count}
                />
              ))}
            </section>
            <div>
              <h6>Total:</h6>
              <span>R${ammountCost}</span>
            </div>
          </div>
          <button>Finalizar Compra</button>
        </>
      ) : (
        <>
          <div>
            <div>
              <h2>Carrinho de compras</h2>
              <AiFillCloseCircle onClick={() => setOpenCart(false)} />
            </div>
            <section>
              <h2>O seu carrinho está vazio</h2>
              <h4>{"( ͡~ ͜ʖ ͡°)"}</h4>
            </section>
          </div>
        </>
      )}
    </CartStyle>
  );
}

export default Cart;
