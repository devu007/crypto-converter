import express from "express";
import { Converter } from "../controller/controller.js";

const route = express.Router();

route.get("/cryptocurrencies", Converter);

export default route;
