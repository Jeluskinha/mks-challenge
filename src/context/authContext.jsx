import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [shopItemList, setShopItemList] = useState();
  const [openCart, setOpenCart] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [ammountCost, setAmmountCost] = useState();
  const [ammountItens, setAmmountItens] = useState();

  useEffect(() => {
    countItemInCart();
  });

  const requestData = async () => {
    try {
      const response = await api
        .get("/products?page=1&rows=8&sortBy=id&orderBy=DESC")
        .then((res) => res);

      setShopItemList(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const addToCart = (id) => {
    const findItem = shopItemList.find((item) => item.id === id);

    const alreadyExists = cartList.some((item) => item.id === id);

    if (findItem["count"]) {
      findItem["count"] += 1;
    } else {
      findItem["count"] = 1;
    }

    countItemInCart()
    !alreadyExists && setCartList([...cartList, findItem]);
  };

  const countItemInCart = () => {
    let ammountCost = 0;
    let ammountItens = 0;

    cartList.forEach((e) => {
      ammountCost += e["count"] * e["price"];
      ammountItens += e["count"];
    });
    console.log(ammountCost)
    setAmmountCost(ammountCost);
    setAmmountItens(ammountItens);
  };

  const removeToCart = (id) => {
    const findItemToDecrement = cartList.find((item) => item.id === id);

    console.log(findItemToDecrement.count)
    if (findItemToDecrement.count > 1) {
      findItemToDecrement['count'] -= 1
      countItemInCart()
    } else {
      findItemToDecrement['count'] -= 1
      const findItem = cartList.findIndex((item) => item.id === id);
      let newArr = cartList;
      newArr.splice(findItem, 1);
      setCartList([...newArr]);
      countItemInCart()
    }
  };

  return (
    <AuthContext.Provider
      value={{
        requestData,
        shopItemList,
        openCart,
        setOpenCart,
        addToCart,
        cartList,
        ammountItens,
        ammountCost,
        removeToCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
