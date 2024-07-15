const EnrolledUser = require('../models/enrolledUsers');

const getEnrolledUsers = async (req, res) => {
    try {
        const users = await EnrolledUser.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createEnrolledUser = async (req, res) => {
    try {
        const user = new EnrolledUser({
            name: req.body.name,
            email: req.body.email,
            course: req.body.course
        });
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = { getEnrolledUsers, createEnrolledUser };
