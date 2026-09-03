import React from "react";
import { logoutFirebaseUser } from "../config/firebase";
import { useNavigate } from "react-router";
import { ActivityCalendar } from "react-activity-calendar";
import { updateCurrentUser } from "firebase/auth";
import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const navigate = useNavigate();
  const { currentUser, logoutUser } = useAuth();

  const goToNewBlogpost = async () => {
    const token = await currentUser.getIdToken();

    try {
      const response = await fetch("http://localhost:3000/api/posts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const post = await response.json();
      navigate(`/blogpost/${post.id}`);
    } catch (error) {
      console.log("Something went wrong: ", error.message);
    }
  };

  const generateData = () => {
    const data = [];
    const today = new Date();
    const startDate = new Date();

    startDate.setFullYear(today.getFullYear() - 1);

    const currentDate = new Date(startDate);

    while (currentDate <= today) {
      data.push({
        date: currentDate.toISOString().split("T")[0],
        count: 0,
        level: 0,
      });

      currentDate.setDate(currentDate.getDate() + 1);
    }

    return data;
  };

  const data = generateData();

  return (
    <main className="bg-linear-to-b from-slate-800 via-slate-900 to-slate-950 w-screen h-screen flex flex-col p-10 align-middle items-center gap-4">
      <header className="w-full h-1/10 flex justify-between">
        <h2 className="text-3xl text-violet-300">LLBlog Dashboard</h2>

        <button
          className="text-slate-200 h-12 bg-slate-700 px-5 py-2 rounded-sm hover:bg-slate-500 cursor-pointer shadow-md"
          onClick={logoutUser}
        >
          Logout
        </button>
      </header>
      <div className="w-full h-full p-2 flex flex-col justify-center items-center gap-5">
        <div className="w-full h-2/3 flex justify-center items-center gap-5">
          <div className="w-2/5 h-full bg-slate-800 flex flex-col rounded-md">
            <h3 className="text-3xl text-slate-200 text-center p-2">History</h3>
            <div className="w-full h-full text-slate-200 flex justify-center items-center">
              API data here
            </div>
          </div>
          <div
            onClick={goToNewBlogpost}
            className="w-2/5 h-full bg-slate-800 flex flex-col rounded-md cursor-pointer hover:transition-transform duration-200 hover:scale-102 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
          >
            <h3 className="text-3xl text-slate-200 text-center p-2">
              New post
            </h3>
            <div className="w-full h-full"></div>
          </div>
        </div>
        <div className="w-4/5 h-1/3 bg-slate-800 flex flex-col justify-center items-center rounded-md p-3">
          <ActivityCalendar
            data={data}
            minLevel={0}
            maxLevel={4}
            theme={{
              light: ["grey", "hsl(0, 0%, 92%)", "purple"],
              dark: ["grey", "hsl(0, 0%, 92%)", "purple"],
            }}
          />
        </div>
      </div>
    </main>
  );
}
