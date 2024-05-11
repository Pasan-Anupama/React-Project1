const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    phone: {
        type: Number,
        required: true,
    },

    email: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },

    confirmpw: {
        type: String,
        required,
    },
});

//exporting

const user = mongoose.model("User", userSchema);

module.exports = User