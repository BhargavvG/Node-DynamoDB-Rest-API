const express = require("express");
const app = express();
// Replace if using a different env file or config
require("dotenv").config();
const Router = require("./router");

app.use(express.json());
app.get("/", (req, res) => {
  res.json({ success: true, message: "Server is live!" });
});

app.use('/', Router);

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`Node server listening on port http://localhost:${port}!`)
);
