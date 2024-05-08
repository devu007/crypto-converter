const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.get("/cryptocurrencies", async (req, res) => {
  try {
    const response = await axios.get(
      "https://api.coingecko.com/api/v3/exchange_rates"
    );
    console.log("Received response from CoinGecko API");
    const data = await response.data;
    res.json(data);
  } catch (error) {
    console.error("Error fetching cryptocurrencies:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
