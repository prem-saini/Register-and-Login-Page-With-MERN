const mongoose = require("mongoose");
const validator = require("validator");



const useSchema = new mongoose.Schema({
    fname: {
        type: String,

        trim: true
    },

    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("not valid email")
            }
        }
    },

    phone: {
        type: Number,


    },
    address: {
        type: String,

    },
    lastname: {
        type: String,

        trim: true

    },

})


const userdata = new mongoose.model("orders", useSchema);

module.exports = userdata;
