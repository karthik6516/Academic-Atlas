const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const capstoneSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    academicYear: {
        type: String,
        required: true,
    },
    branch: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    courseTags: [{
        course: {
            type: String,
            required: true,
        }
    }
    ],
    faculties: [{
        faculty: {
            type: String, 
        }      
    }],
    students: [{
        student: {
            type: String,
            required: true,
        }
    }], 
    url:{
        type: String, //github for projects and papaer link for research papers
        required: true,
    }
});

module.exports = mongoose.model('Capstone', capstoneSchema);