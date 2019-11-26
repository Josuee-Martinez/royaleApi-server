const { Router } = require("express");
const router = Router();
const axios = require("axios");

router.get("/", async (req, res) => {
  try {
    const config = {
      headers: {
        auth: process.env.apiKey
      }
    };
    const axiosRes = await axios.get(process.env.apiUrl, config);

    res.json({ data: axiosRes.data });
  } catch (error) {
    console.error(err.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
