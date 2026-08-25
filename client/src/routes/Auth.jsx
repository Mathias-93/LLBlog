import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";

export default function Auth() {
  const [auth, setAuth] = useState(true);

  return auth ? (
    <Login auth={auth} setAuth={setAuth} />
  ) : (
    <Register auth={auth} setAuth={setAuth} />
  );
}
