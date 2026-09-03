import React, { useState } from "react";
import { useParams } from "react-router";
import { useAuth } from "../context/AuthContext";
import { Tiptap } from "@tiptap/react";
import BlogEditor from "./BlogEditor";

export default function BlogPost() {
  const { postId } = useParams();
  const { logoutUser } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // API call here
      console.log(e.target.value);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <main className="bg-linear-to-b from-slate-800 via-slate-900 to-slate-950 w-screen h-screen flex flex-col p-10 align-middle items-center gap-4">
      <header className="w-full h-1/10 flex justify-between">
        <h2 className="text-3xl text-violet-300">LLBlog Blogpost</h2>

        <button
          className="text-slate-200 h-12 bg-slate-700 px-5 py-2 rounded-sm hover:bg-slate-500 cursor-pointer shadow-md"
          onClick={logoutUser}
        >
          Logout
        </button>
      </header>
      <div className="w-full h-full p-2 flex flex-col justify-center items-center gap-5">
        <form className="w-2/3 h-full" onSubmit={handleSubmit}>
          <BlogEditor />
          <button
            type="submit"
            className="text-slate-200 bg-slate-700 px-5 py-2 rounded-sm hover:bg-slate-500 cursor-pointer shadow-md"
          >
            Publish Post
          </button>
        </form>
      </div>
    </main>
  );
}
