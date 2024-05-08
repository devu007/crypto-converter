import express from "express";
import { ExchangeRates } from "../controller/controller.js";

const route = express.Router();

route.get("/cryptocurrencies", ExchangeRates);

export default route;
