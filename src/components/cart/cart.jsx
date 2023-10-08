import Button from "../button/button";
import { totalPrice } from "../units/total-price";
import "./cart.css";

const Cart = ({ cartItems, onCheckout }) => {
  return (
    <div className="cart__container">
      <p>Umumiy narx: ${totalPrice(cartItems)}</p>

      <Button
        title={`${cartItems.length === 0 ? "Buyurtma" : "To'lov "} `}
        type={"checkout"}
        onClick={onCheckout}
      />
    </div>
  );
};

export default Cart;
