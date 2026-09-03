const express = require("express");
const router = express.Router();
const { FieldValue } = require("firebase-admin/firestore");

const { db } = require("../config/firebase.js");
const authenticateUser = require("../middleware/middleware.js");

router.post("/", authenticateUser, async (req, res) => {
  try {
    const docRef = await db.collection("posts").add({
      title: "",
      content: "",
      language: "",
      status: "draft",
      createdAt: FieldValue.serverTimestamp(),
      updatedAt: FieldValue.serverTimestamp(),
    });

    res.status(201).json({
      id: docRef.id,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to create post",
    });
  }
});

module.exports = router;
