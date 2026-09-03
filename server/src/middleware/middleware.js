const { auth } = require("../config/firebase");

const authenticateUser = async (req, res, next) => {
  try {
    const header = req.headers.authorization;

    if (!header || !header?.startsWith("Bearer ")) {
      return res.status(401).json({
        error: "Unauthorized",
      });
    }

    const token = header.split("Bearer ")[1];

    const decodedToken = await auth.verifyIdToken(token);

    req.user = decodedToken;

    next();
  } catch (error) {
    return res.status(401).json({
      error: "Invalid authentication token",
    });
  }
};

module.exports = authenticateUser;
