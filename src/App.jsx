import { useContext, useEffect } from "react";
import Cards from "./components/Cards";
import Cart from "./components/Cart";
import Header from "./components/Header";
import { AuthContext } from "./context/authContext";
import AppStyle from "./Css";

function App() {
  const { requestData, shopItemList, openCart } = useContext(AuthContext);

  useEffect(() => {
    requestData();
    console.log(openCart)
  }, []);

  return (
    <AppStyle>
      {openCart && <Cart />}
      <Header />
      <main>
        <ul>
          {shopItemList?.map((item) => (
            <Cards
              key={item.id}
              id={item.id}
              image={item.photo}
              name={item.name}
              price={item.price}
              description={item.description}
            />
          ))}
        </ul>
      </main>
    </AppStyle>
  );
}

export default App;
