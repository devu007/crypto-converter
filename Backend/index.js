import express, { urlencoded } from "express";
import cors from "cors";
import route from "./routes/route.js";
import bodyParser from "body-parser";

const app = express();

app.use(cors());

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", route);
const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
