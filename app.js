require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const taskRoute = require("./routes/taskRoute");
const profileRoute = require("./routes/profileRoute");

app.use(express.json());
app.use(cors());



const mongoUrl = mongoose.connect(process.env.MONGODB_URL, 
    { useNewUrlParser: true, useUnifiedTopology: true });
  
  const db = mongoose.connection;
  
  db.on('error', (err) => {
    console.error('Database connection failed...', err);
  });
  
  db.once('open', () => {
    console.log('Database connection successful...');
  });



app.use("/api/auth", authRoute);
app.use("/api/task", taskRoute);
app.use("/api/profile", profileRoute);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, "../Task_Manager_Frontend/build")));
  app.get("/", (req, res) => res.sendFile(path.resolve(__dirname, "../Task_Manager_Frontend/build/index.html")));
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
