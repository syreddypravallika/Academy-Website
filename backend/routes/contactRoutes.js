const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact');

router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required" });
    }
   const newContact = await Contact.create({
      name,
      email,
      message
    });
    await newContact .save();
   res.status(201).json({
      message: "Query submitted successfully",
      data: newContact  });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});
//get
//Get all details
router.get('/all', async (req, res) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ message: "Unauthorized" });
    try {
      const decoded = jwt.verify(token, jwtSecret);
      if (decoded.role !== 'admin') {
        return res.status(403).json({ message: "Access denied" });
      }
      const  queries = await Contact.find();
      res.json(queries);
    } catch (error) {
      return res.status(403).json({ message: "Invalid token" });
    }
  });
module.exports = router;