const express = require("express");
const cors = require("cors");
const db = require("./config/firebase");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.get("/api/test-db", async (req, res) => {
  try {
    const docRef = await db.collection("test").add({
      message: "Hello Firestore",
      createdAt: new Date(),
    });

    res.status(201).json({
      id: docRef.id,
      message: "Document created",
    });
  } catch (error) {
    console.error("Error: " + error);

    res.status(500).json({
      error: "Could not connect to Firestore",
    });
  }
});

const PORT = process.env.port || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
