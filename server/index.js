const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

const password = process.argv[2];
const MONGODB_URI = `mongodb+srv://practice:${password}@practicecluster.uazbw.mongodb.net/reminiscence-app?retryWrites=true&w=majority`;

mongoose.connect(MONGODB_URI)
  .then((res) => console.log('connected to DB'))
  .catch((err) => console.error(err));

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));