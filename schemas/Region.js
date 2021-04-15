const mongoose = require("mongoose");
const RegionSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    ids: {
        type: Array,
        required: true,
        default: []
    }
})
module.exports = mongoose.model("Region", RegionSchema)