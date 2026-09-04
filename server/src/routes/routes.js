const express = require("express");
const router = express.Router();
const { FieldValue } = require("firebase-admin/firestore");

const { db } = require("../config/firebase.js");
const authenticateUser = require("../middleware/middleware.js");

router.post("/", authenticateUser, async (req, res) => {
  try {
    const docRef = await db.collection("posts").add({
      userId: req.user.uid,
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

router.patch("/:id", authenticateUser, async (req, res) => {
  try {
    const { title, content, language } = req.body;

    const docRef = db.collection("posts").doc(req.params.id);

    const snapshot = await docRef.get();

    if (!snapshot.exists) {
      return res.status(404).json({
        error: "Post not found",
      });
    }

    if (snapshot.data().userId !== req.user.uid) {
      return res.status(403).json({
        error: "Forbidden",
      });
    }

    await docRef.update({
      title,
      content,
      language,
    });

    res.status(200).json({
      id: req.params.id,
      title,
      content,
      language,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      error: "Failed to update post",
    });
  }
});

module.exports = router;
