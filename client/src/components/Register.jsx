import React, { useState } from "react";
import { NavLink } from "react-router";

export default function Register({ authType, setAuthType, setLoginInfo }) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    passwordRepeat: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (validateForm()) {
      console.log("Form Submitted Successfully:", formData);
      setLoginInfo({
        email: formData.email,
        password: formData.password,
      });
      // Add API call logic here
    } else {
      console.log("Form submission failed due to validation errors.");
    }
  };

  const validateForm = () => {
    return formData.password === formData.passwordRepeat;
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-slate-800 w-2/4 rounded-sm p-5 flex flex-col items-center gap-2 shadow-lg"
    >
      <h2 className="text-2xl text-slate-200">Register</h2>
      <div className="flex flex-col">
        <label className="text-slate-200">Email</label>
        <input
          name="email"
          type="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          className="bg-slate-200 p-1 rounded-sm"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-slate-200">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          value={formData.password}
          onChange={handleChange}
          className="bg-slate-200 p-1 rounded-sm"
          required
        />
      </div>
      <div className="flex flex-col">
        <label className="text-slate-200">Re-enter password</label>
        <input
          type="password"
          name="passwordRepeat"
          id="passwordRepeat"
          value={formData.passwordRepeat}
          onChange={handleChange}
          className="bg-slate-200 p-1 rounded-sm"
          required
        />
      </div>
      <button
        type="submit"
        className="text-slate-200 bg-slate-700 px-5 py-2 rounded-sm hover:bg-slate-500 cursor-pointer shadow-md"
      >
        Register
      </button>
      <p className="text-slate-200">
        Already have an account? Login{" "}
        <span
          className="text-blue-400 cursor-pointer hover:underline"
          onClick={() => setAuthType(true)}
        >
          here!
        </span>
      </p>
    </form>
  );
}
