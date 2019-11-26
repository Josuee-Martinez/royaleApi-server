require("dotenv").config();
const express = require("express");
const clashRoyale = require("./routes/clashRoyale");
const app = express();

app.use(require("./middleware/headers"));

app.use("/api/clan", clashRoyale);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`express server running on port ${PORT}`));
