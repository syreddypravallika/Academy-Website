const express = require("express");
const router = express.Router();
const Payment = require("../models/Payment");
const User =require("../models/User")
const jwt = require("jsonwebtoken");
const jwtSecret=require("../config/jwtsecret");
// Test route
router.get("/test", (req, res) => {
    res.send("Payment route working");
});

// Store payment
router.post("/pay", async (req, res) => {

  try {

    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided"
      });
    }

    const decoded = jwt.verify(token, jwtSecret);

    const userId = decoded.id || decoded.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    const { name, email, courseName, amount, method } = req.body;

    const newPayment = new Payment({
      userId,
      name,
      email,
      courseName,
      amount,
      method
    });

    await newPayment.save();

    res.json({
      success: true,
      message: "Payment successful!"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error"
    });

  }

});
module.exports = router;