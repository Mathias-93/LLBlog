import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import { createFirebaseUser } from "../config/firebase.js";

export default function Auth() {
  const [authType, setAuthType] = useState(true);

  return authType ? (
    <Login authType={authType} setAuthType={setAuthType} />
  ) : (
    <Register
      setAuthType={setAuthType}
      createFirebaseUser={createFirebaseUser}
    />
  );
}
