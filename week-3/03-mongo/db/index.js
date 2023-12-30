const mongoose = require('mongoose');


// Define schemas
const AdminSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    madeCourses: [{type:mongoose.Types.ObjectId, required: true, ref: "Course"}]
});

const UserSchema = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    purchasedCourses: [{type:mongoose.Types.ObjectId, required: true, ref: "Course"}]
});

const CourseSchema = new mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String},
    creator: {type: mongoose.Types.ObjectId, required: true, ref: "Admin"}
});

const Admin = mongoose.model('Admin', AdminSchema);
const User = mongoose.model('User', UserSchema);
const Course = mongoose.model('Course', CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}