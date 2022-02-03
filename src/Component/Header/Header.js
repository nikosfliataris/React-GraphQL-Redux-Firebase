import React from "react";
import "./Header.scss";
import logo from "./../../Assets/Images/Logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "./../../firebase/firebase";
import { useDispatch, useSelector } from "react-redux";
import { toggleCartHidden } from "./../../Redux/Cart/CartAction";
import CartComponent from "../Cart/CartComponent";
import CartDropdown from "../CartDropdown/CartDropdown";
import { SignOut } from "../../Redux/User/userAction";
function Header() {
  const CurrentUser = useSelector((state) => state.user.User);
  console.log(CurrentUser);
  const Currenthidden = useSelector((state) => ({ hidden: state.cart.hidden }));
  console.log(Currenthidden.hidden);
  const dispatch = useDispatch();
  const handleSignOut = (e) => {
    auth.signOut().then(dispatch(SignOut()));
  };

  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact Us
        </Link>
        {
          <Link to={!CurrentUser && "/signin"} className="option">
            <a onClick={handleSignOut}>
              {!CurrentUser ? "Sign In" : "Sign Out"}
            </a>
          </Link>
        }
        <CartComponent />
      </div>
      {Currenthidden.hidden === true ? null : <CartDropdown />}
    </div>
  );
}

export default Header;
