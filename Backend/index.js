import express, { urlencoded } from "express";
import route from "./routes/api.js";
import corsMiddleware from "./middlewares/cors.js";
import errorHandlerMiddleware from "./middlewares/errorHandler.js";

const app = express();

app.use(corsMiddleware);

app.use("/", route);

app.use(errorHandlerMiddleware);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
