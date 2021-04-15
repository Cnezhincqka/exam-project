const mongoose = require('mongoose')
const SpecialitySchema = new mongoose.Schema({
    id: {
        type: String,
    },
    faculty: {
        type: String,
    },
    speciality: {
        type: String
    },
    FoE: {
        type: String,
    },
    url: {
        type: String
    },
    qualification: {
        type: String,
    },
    time: {
        type: String
    },
    format: {
        type: String
    },
    exams: {
        type: String
    },
    additional: {
        type: String
    },
    plan: {
        type: String
    }
})
module.exports = mongoose.model("Speciality", SpecialitySchema)