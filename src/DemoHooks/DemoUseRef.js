import React, { useState, useRef } from "react";

export default function DemoUseRef() {
  const [inputLogin, setInputLogin] = useState({ like: "1" });
  const inputEmail = useRef(null);
  const inputPass = useRef(null);
  //   let userName = useRef("");
  console.log("inputLoginRender", inputLogin);
  console.log("render");
  let userName = useRef("");
  console.log("userNameRender", userName);
  const handleLogin = () => {
    // console.log("inputEmail", inputEmail.current.value);
    // console.log("inputEmail", inputEmail.current.name);
    // console.log("inputPass", inputPass.current.value);
    // console.log("inputPass", inputPass.current.name);

    // userName.current = "i love you";
    console.log("userName", userName);
    userName.current = "i love you";
    setInputLogin({
      like: userName.current,
    });
    console.log("inputLogin", inputLogin);
  };

  return (
    <div className="container">
      <h3>Login</h3>
      <div className="form-group">
        <label>Email</label>
        <input ref={inputEmail} name="email" />
      </div>
      <div className="form-group">
        <label>password</label>
        <input ref={inputPass} name="password" />
      </div>
      <button className="btn btn-success" onClick={handleLogin}>
        Submit
      </button>
      <small>{inputLogin.like}</small>
    </div>
  );
}
