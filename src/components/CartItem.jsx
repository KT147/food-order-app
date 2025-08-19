import { currencyFormatter } from "../util/formatting"

function CartItem({ name, quantity, price, onInCrease, onDeacrease }) {


  return (
    <li className="cart-item">
        <p>{name} - {quantity} x {currencyFormatter.format(price)}</p>
        <p className="cart-item-actions">
            <button onClick={onDeacrease}>-</button>
            <span>{quantity}</span>
            <button onClick={onInCrease}>+</button>
        </p>
    </li>
  )
}

export default CartItem