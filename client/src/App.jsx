import { useState } from "react";
import Auth from "./routes/Auth";

function App() {
  return (
    <main className="bg-linear-to-b from-slate-800 via-slate-900 to-slate-950 w-screen h-screen flex flex-col p-10 align-middle items-center gap-4">
      <h1 className="text-5xl text-slate-200">LLBlog</h1>
      <p className="text-base text-slate-200">
        Language learning through writing!
      </p>
      <Auth />
    </main>
  );
}

export default App;
