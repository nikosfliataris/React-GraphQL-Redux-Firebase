import React from "react";
import "./CartComponent.scss";
import { ReactComponent as Icon } from "./../../Assets/Images/CartIcon.svg";
import { useSelector, useDispatch } from "react-redux";
import { toggleCartHidden } from "./../../Redux/Cart/CartAction";
function CartComponent() {
  const Currenthidden = useSelector((state) => ({ hidden: state.cart.hidden }));
  console.log(Currenthidden);
  const dispatch = useDispatch();
  const handleDropdown = () => {
    console.log("click");
    dispatch(toggleCartHidden((state) => ({ hidden: state.hidden })));
  };

  const { Total_Price } = useSelector(({ cart: { cartItem } }) => ({
    Total_Price: cartItem.reduce(
      (accumelatedPrice, cartItem) =>
        accumelatedPrice + cartItem.quantity * cartItem.price,
      0
    ),
  }));
  return (
    <div className="cart-icon">
      <i
        className="fas fa-shopping-cart shopping-cart"
        onClick={handleDropdown}
      ></i>

      <span className="item-count">
        {Total_Price === 0 ? 0 : `${Total_Price}$`}
      </span>
    </div>
  );
}

export default CartComponent;
