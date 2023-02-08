import HeaderStyle from "./style";
import { BsCart3 } from 'react-icons/bs';
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/authContext";


function Header() {

  const { setOpenCart, ammountItens } = useContext(AuthContext)

  useEffect(()=>{
    console.log(ammountItens)
  },[ammountItens])

  return (
    <HeaderStyle>
      <div>
        <h1>MKS</h1>
        <span>sistemas</span>
      </div>
      <div onClick={()=> setOpenCart(true)}>
        <BsCart3/>
        <span>{ammountItens}</span>
      </div>
    </HeaderStyle>
  );
}

export default Header;