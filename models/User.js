const mongoose = require('mongoose');

const userSchema = new mongoose.Schema
({
    username: { 
        type: String,
        required: true,
        unique: true,
        trimmed: true },
    email: {
        type: String, 
        required: true,
        unique: true,
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']},
    thoughts: {

    },
    friends: {
        
    }
});