import React, { useState } from "react";
import "./Registration.scss";
import { useNavigate } from "react-router-dom";
import Form from "../../Component/FormInput/Form";
import Button from "../../Component/FormButton/Custom-Button";
import { auth, createUserProfileDocument } from "./../../firebase/firebase";
function Registration() {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const history = useNavigate();
  console.log("displayName:", displayName);
  console.log("email:", email);
  console.log("password:", password);
  console.log("password:", confirm);
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirm) {
      alert("Password don't match");
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName }).then(
        setDisplayName(""),
        setEmail(""),
        setPassword(""),
        setConfirm(""),
        alert("Registration Succeded"),
        history({ pathname: "/" })
      );
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div className="registration">
      <h2 className="title">Create an Account</h2>
      <span>Sign up with email and password</span>
      <form className="registration-form" onSubmit={handleSubmit}>
        <Form
          type="text"
          name="displayName"
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
          label="First Name/Last Name"
          required
        />{" "}
        <Form
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          required
        />{" "}
        <Form
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          label="password"
          required
        />{" "}
        <Form
          type="password"
          name="password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
          label="Confirm Password"
          required
        />
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
}

export default Registration;
