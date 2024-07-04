const mongoose = require('mongoose');
require('dotenv').config();

mongoose.set('strictQuery', true); // or false, based on your preference

mongoose.connect(process.env.MONGODB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error('MongoDB connection error:', err));
