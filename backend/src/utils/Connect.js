const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

const userSchema = require('../models/users');

// MongoDB URI from .env
const MONGO_URI = process.env.MONGO_URI;

const connectMongoose = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("Mongoose connected successfully");

        // Prevent model overwrite error
        const User =
            mongoose.models.User || mongoose.model('User', userSchema);

        // Example: create a user
        const newUser = new User({
            name: 'Ananya Sharma',
            email: 'ananya@gmail.com',
            password: 'hashed_password_123',
            createdAt: new Date(),
        });

        await newUser.save();
        console.log("New user saved:", newUser.name);

        // Example: find users
        const users = await User.find({
            email: { $regex: '@gmail.com$' },
        });

        console.log("Users found:");
        console.log(users);

    } catch (error) {
        console.error("MongoDB error:", error.message);
    }
};

module.exports = connectMongoose;
