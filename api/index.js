const express = require("express");
const mongoose=require('mongoose')
const env = require("dotenv");
const app = express();
env.config();
const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => console.log(`Listening on Port ${PORT}`));
