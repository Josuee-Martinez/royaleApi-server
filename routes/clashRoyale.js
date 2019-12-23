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

    res.json(axiosRes.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.get("/:tag", async (req, res) => {
  try {
    const config = {
      headers: {
        auth: process.env.apiKey
      }
    };
    const axiosRes = await axios.get(
      `https://api.royaleapi.com/player/${req.params.tag}`,
      config
    );

    res.json(axiosRes.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

router.get("/:tag/chests", async (req, res) => {
  try {
    const config = {
      headers: {
        auth: process.env.apiKey
      }
    };
    const axiosRes = await axios.get(
      `https://api.royaleapi.com/player/${req.params.tag}/chests`,
      config
    );

    res.json(axiosRes.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("server error");
  }
});

module.exports = router;
