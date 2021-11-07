const mongoose = require("mongoose");
const UrlSchema = new mongoose.Schema({
    url_id: {
        type: String,
        required: true,
        unique: true
    },
    url: {
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true,
    }
})
const Url = mongoose.model("urls", UrlSchema);
module.exports = Url;