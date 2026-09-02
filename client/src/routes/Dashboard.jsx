import React from "react";
import { logoutFirebaseUser } from "../config/firebase";
import { useNavigate } from "react-router";

export default function Dashboard() {
  const logoutUser = async () => {
    try {
      await logoutFirebaseUser();
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <div>
      <div>
        <h2>Dashboard</h2>
        <button onClick={logoutUser}>Logout</button>
      </div>
    </div>
  );
}
