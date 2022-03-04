const express = require("express");
const mongoose = require("mongoose");
const env = require("dotenv");
const app = express();
const multer=require('multer')
const authRoutes = require("./routes/authRoutes");
const postRoutes = require("./routes/postRoutes");
const userRoutes = require("./routes/userRoutes");
env.config();
app.use(express.json());
const PORT = process.env.PORT || 5000;
try {
  mongoose.connect(process.env.MONGO_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`MongoDB Connected`);
} catch (err) {
  console.log(`Error:${err.message}`);
  process.exit();
}

const upload=multer({
  dest:'images'
})
app.post('/upload',upload.single('upload'),(req,res)=>{
  res.send()
})

app.use(authRoutes);
app.use(postRoutes);
app.use(userRoutes);
app.listen(PORT, (req, res) => console.log(`Listening on Port ${PORT}`));
