const express = require("express");
const cors = require("cors");
const db = require("./config/firebase");
const postsRouter = require("./routes/routes.js");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.use("/api/posts", postsRouter);

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
