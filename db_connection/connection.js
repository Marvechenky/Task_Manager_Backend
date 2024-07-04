const mongoose = require('mongoose');
require('dotenv').config();


mongoose.set('strictQuery', true); // or false, based on your preference


mongoose.connect(process.env.MONGODB_URL, 
  { useNewUrlParser: true, useUnifiedTopology: true });

  


