import React from "react";
import { NavLink } from "react-router";

export default function Register({ auth, setAuth }) {
  return (
    <div className="bg-slate-800 w-2/4 rounded-sm p-5 flex flex-col items-center gap-2 shadow-lg">
      <h2 className="text-2xl text-slate-200">Register</h2>
      <div className="flex flex-col">
        <label className="text-slate-200">Username</label>
        <input className="bg-slate-300 p-1 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label className="text-slate-200">Password</label>
        <input className="bg-slate-300 p-1 rounded-sm" />
      </div>
      <div className="flex flex-col">
        <label className="text-slate-200">Password</label>
        <input className="bg-slate-300 p-1 rounded-sm" />
      </div>
      <button className="text-slate-200 bg-slate-700 px-5 py-2 rounded-sm hover:bg-slate-500 cursor-pointer shadow-md">
        Register
      </button>
      <p className="text-slate-200">
        Already have an account? Login{" "}
        <span
          className="text-blue-400 cursor-pointer hover:underline"
          onClick={() => setAuth(!auth)}
        >
          here!
        </span>
      </p>
    </div>
  );
}
