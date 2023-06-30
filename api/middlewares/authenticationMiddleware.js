const { verifyToken } = require("../auth");

function authenticationMiddleware(req, res, next) {
  const authToken = req.headers.authorization;

  if (!authToken) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const token = authToken.split(" ")[1];

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  req.userId = decoded.userId;

  next();
}

module.exports = authenticationMiddleware;
