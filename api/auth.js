const jwt = require("jsonwebtoken");

function generateToken(payload) {
  const expiresIn = "1h";

  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn });

  return token;
}

function verifyToken(token) {
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded;
  } catch (error) {
    return null;
  }
}

module.exports = {
  generateToken,
  verifyToken,
};
