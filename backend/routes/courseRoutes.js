const express = require('express');
const Course = require('../models/Course');
const Router = express.Router(); 
const jwt = require('jsonwebtoken');
const jwtSecret =require('../config/jwtsecret');

// add course
Router.post('/add', async (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        const decoded = jwt.verify(token, jwtSecret);

        if (decoded.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        const { title, description, duration, price } = req.body;

        const newCourse = new Course({
            title,
            description,
            duration,
            price
        });

        await newCourse.save();

        res.status(201).json({ message: 'Course added successfully' });

    } catch (error) {
        console.log("JWT ERROR:", error.message);
        res.status(500).json({ message: 'Server error' });
    }
});
// get all courses
Router.get('/all', async (req, res) => {
    try {   
        const courses = await Course.find();
        res.json(courses);
    }
    catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
//update a course
Router.put('/update/:id', async (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        jwt.verify(token, jwtSecret);
        const { title, description, duration, price } = req.body;
        const updatedCourse = await Course.findByIdAndUpdate(
            req.params.id,
            { title, description, duration, price },
            { new: true }   
        );
        if (!updatedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json({message: 'Course updated successfully',updatedCourse });

    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
// delete a course
Router.delete('/delete/:id', async (req, res) => {
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }
    try {
        jwt.verify(token, jwtSecret);
        const deletedCourse = await Course.findByIdAndDelete(req.params.id);
        if (!deletedCourse) {
            return res.status(404).json({ message: 'Course not found' });
        }
        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
});
module.exports = Router;