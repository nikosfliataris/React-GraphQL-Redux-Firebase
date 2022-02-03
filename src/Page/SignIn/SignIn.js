import React, { useState } from "react";
import "./SignIn.scss";
import Form from "../../Component/FormInput/Form";
import CustomButton from "./../../Component/FormButton/Custom-Button";
import { auth, signInWithGoogle } from "./../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useNavigate();
  const dispatch = useDispatch;
  const handleSubmit = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(history({ pathname: "/" }));
    setEmail("");
    setPassword("");
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleRegister = (e) => {
    e.preventDefault();
    history({ pathname: "/registration" });
  };
  return (
    <div className="signin">
      <h2>I already have an account </h2>
      <span>SignIn with email and password</span>
      <form onSubmit={handleSubmit}>
        <Form
          name="email"
          type="email"
          label="Email"
          value={email}
          handleChange={handleEmail}
          required
        />

        <Form
          name="password"
          type="password"
          label="Password"
          value={password}
          handleChange={handlePassword}
          required
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
      <div className="registration-button">
        <h2>You Don't have an account </h2>
        <div className="button-path">
          <CustomButton type="submit" onClick={handleRegister}>
            Register
          </CustomButton>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
