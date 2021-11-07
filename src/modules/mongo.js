const mongoose = require("mongoose");
const { MONGODB_URL } = require("../../config");
module.exports = async () => {
    try {
        await mongoose.connect(MONGODB_URL)
        console.log("DB CONNECTED")
    } catch (err) {
        console.log("CONNECTION FAILED", err)
    }
}