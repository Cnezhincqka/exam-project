const mongoose = require("mongoose")
const VuzSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true
    },
    faculties: {
        type: Array,
        required: true,
    },
    specs: {
        type: Array,
        required: true,
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    site: {
        type: String,
        required: true
    },
    hostel: {
        type: String,
        required: true
    },
    price: {
        type: String,
        required: true
    },
    documents: {
        type: String,
        required: true
    }
})
module.exports = mongoose.model("Vuz", VuzSchema)