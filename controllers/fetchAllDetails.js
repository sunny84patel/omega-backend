const EnrolledUser = require('../models/enrolledUsers');
const Course = require('../models/CourseDetails');

const fetchAllDetails = async (req, res) => {
    try {
        const users = await EnrolledUser.find().populate('course');
        const courses = await Course.find();
        res.status(200).json({ users, courses });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

module.exports = { fetchAllDetails };
