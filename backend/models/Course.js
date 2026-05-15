const mongoose = require('mongoose');
const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
  duration: {
        type: String,
    },
    price: {
        type: Number
    }
});
module.exports = mongoose.model('Course', courseSchema);