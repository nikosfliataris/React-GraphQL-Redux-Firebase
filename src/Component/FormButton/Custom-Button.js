import React from "react";
import "./CustomButton.scss";
function Button({ children, isGoogleSignIn, inverted, ...otherProps }) {
  return (
    <button
      className={`${inverted ? "inverted " : ""}custom-botton`}
      {...otherProps}
    >
      {children}
    </button>
  );
}

export default Button;
