import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth() {
  const [authType, setAuthType] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    email: "",
    password: "",
  });

  return authType ? (
    <Login
      authType={authType}
      setAuthType={setAuthType}
      setLoginInfo={setLoginInfo}
    />
  ) : (
    <Register
      auth={authType}
      setAuthType={setAuthType}
      setLoginInfo={setLoginInfo}
    />
  );
}
