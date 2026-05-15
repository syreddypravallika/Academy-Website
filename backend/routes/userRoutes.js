const express = require('express');
const User= require('../models/User');
const Router = express.Router();
const jwt = require('jsonwebtoken');
const jwtSecret =require('../config/jwtsecret');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

// Registration route
Router.post('/register', async (req, res) => {
   try {
        const { fullName, email, PhoneNumber, password, role } = req.body; // include role
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        // Use role if provided, otherwise default to 'user'
        const newUser = new User({ fullName, email, PhoneNumber, password: hashedPassword, role: role || 'user' });

        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
   } catch (error) {
       res.status(500).json({ message: 'Server error' });
   }
});
//Login route
Router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(400).json({ message:'User not found'});
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password'});
        }

        const token = jwt.sign(
            { userId: user._id, email: user.email ,role: user.role},
            jwtSecret,
            { expiresIn: '30d' }
        );

        return res.json({ message: 'Login successful', token });

    } catch (error) {
        console.log("LOGIN ERROR:", error);
        return res.status(500).json({ message: error.message });
    }
});
//forgot password route 
Router.post('/forgot-password', async (req, res) => {
    try {
        const { email,newPassword } = req.body;
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ message: 'User not found' });
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();
        res.json({ message: 'Password updated successfully' });
    } catch (error) {
        console.log("Forgot Password Error:", error.message);
        res.status(500).json({ message:error.message });
    }
});
 // routes/userRoutes.js (temporary)
Router.put('/make-admin', async (req, res) => {
    try {
        const { email } = req.body;
        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: 'User not found' });

        user.role = 'admin';
        await user.save();
        res.json({ message: 'User promoted to admin successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
module.exports = Router;
