import mongoose from "mongoose";
const profile = new mongoose.Schema({
    path: {
        type: String,
        required: true
    },
    fullpath: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ["Active", "Deactive"],
        default: "Active"
    }
},{ timestamps: true })
export default profile