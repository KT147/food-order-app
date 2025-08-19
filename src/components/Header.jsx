import { useContext } from "react";
import logoImg from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../context/CartContext";
import UserProgressContext from "../context/UserProgressContext";

function Header() {
  const cartCtx = useContext(CartContext)
  const userProgressCtx = useContext(UserProgressContext)

  const totalCartItems = cartCtx.items.reduce((totalNumberOfItems, item) => {
    return totalNumberOfItems + item.quantity
  }, 0)

  function handleShowCart() {
    userProgressCtx.showCart()
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logoImg} />
        <h1>REACTFOOD</h1>
      </div>
      <nav>
        <Button onClick={handleShowCart} textOnly> Cart ({totalCartItems}) </Button>
      </nav>
    </header>
  );
}

export default Header;
