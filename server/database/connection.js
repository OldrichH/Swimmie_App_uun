const mongoose = require('mongoose');

const MONGODB_URL = 'mongodb+srv://common_user_123:x7hsu87hhjud7jd8@cluster1.ufftvky.mongodb.net/';

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB_URL, {});
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;