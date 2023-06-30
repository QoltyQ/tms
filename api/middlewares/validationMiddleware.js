function validationMiddleware(req, res, next) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Invalid request. Missing required fields." });
  }

  next();
}

module.exports = validationMiddleware;
