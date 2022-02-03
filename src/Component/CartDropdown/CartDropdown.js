import React from "react";
import "./CartDropdown.scss";
import Button from "../FormButton/Custom-Button";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../CartItem/CartItem";
import { useNavigate } from "react-router-dom";
import { toggleCartHidden } from "../../Redux/Cart/CartAction";

function CartDropdown() {
  const Items = useSelector((state) => ({ cartItem: state.cart.cartItem }));
  console.log(Items);
  const history = useNavigate();
  const dispatch = useDispatch();
  const checkOut = (e) => {
    e.preventDefault();
    history({ pathname: "/checkout" });
    dispatch(toggleCartHidden((state) => ({ hidden: state.hidden })));
  };
  const { Total_Quantity } = useSelector(({ cart: { cartItem } }) => ({
    Total_Quantity: cartItem.reduce(
      (accumelatedQuantity, cartItem) =>
        accumelatedQuantity + cartItem.quantity,
      0
    ),
  }));
  const { Total_Price } = useSelector(({ cart: { cartItem } }) => ({
    Total_Price: cartItem.reduce(
      (accumelatedPrice, cartItem) =>
        accumelatedPrice + cartItem.quantity * cartItem.price,
      0
    ),
  }));
  console.log(Total_Quantity, Total_Price);
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {Items.cartItem.length <= 0 ? (
          <span className="empty">Your cart is empty</span>
        ) : (
          Items.cartItem.map((item) => (
            <CartItem
              id={item.id}
              imageUrl={item.imageUrl}
              price={item.price}
              quantity={item.quantity}
              name={item.name}
            />
          ))
        )}
      </div>
      {Total_Quantity === 0 ? null : (
        <div>Total Quantity: {Total_Quantity}</div>
      )}
      {Total_Price === 0 ? null : <div>Total Price: {Total_Price}$</div>}

      <Button onClick={checkOut}>Go to CheckOut</Button>
    </div>
  );
}

export default CartDropdown;
