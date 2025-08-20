import { useContext } from "react";
import Modal from "./UI/Modal";
import CartContext from "../context/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../context/UserProgressContext";
import CartItem from "./CartItem";

function Cart() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  function handleCloseModal() {
    userProgressCtx.hideCheckOut();
  }

  function handleGoToCheckOut() {
    userProgressCtx.showCheckOut();
  }



  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"} onClose={userProgressCtx.progress === "cart" ? handleCloseModal : null}>
      <h2>Your Cart</h2>
      <ul>
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onInCrease={() => cartCtx.addItem(item)}
            onDeacrease={() => cartCtx.removeItem(item.id)}
          />
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button onClick={handleCloseModal} textOnly>
          Close
        </Button>
       {cartCtx.items.length > 0 && <Button onClick={handleGoToCheckOut}>Go to Checkout</Button>}
      </p>
    </Modal>
  );
}

export default Cart;
