import React, { useState, createContext, useContext, useEffect } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
import createFirebaseUser from "../config/firebase.js";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../config/firebase.js";

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
      createFirebaseUser={createFirebaseUser}
    />
  );
}
