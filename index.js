const express = require("express");
const app = express();
const routes = require("./api/routes");
const errorHandlingMiddleware = require("./api/middlewares/errorHandlingMiddleware");
const database = require("./persistence/database");

database.connect();

app.use(express.json());

app.use("/api", routes);

app.use(errorHandlingMiddleware);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
