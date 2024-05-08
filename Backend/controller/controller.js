import axios from "axios";

export const ExchangeRates = async (req, res) => {
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
};
