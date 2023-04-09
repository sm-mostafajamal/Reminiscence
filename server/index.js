const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const CONNECTION_URL = `mongodb+srv://practice:practice@practicecluster.uazbw.mongodb.net/reminiscence-app?retryWrites=true&w=majority`;
const PORT = process.env.PORT || 5000;
const postRouter = require("./routes/posts");

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRouter);

mongoose
  .connect(CONNECTION_URL)
  .then(() =>
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))
  )
  .catch((err) => console.log(err.message));
