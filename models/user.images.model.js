import profile from "./profile_pic.model.js"
import mongoose from "mongoose";
const data = new mongoose.Schema({
    profilepic:[profile],
    status: {
        type: String,
        enum: ["Active", "deActive"],
        default: "Active"
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }

})
const userImage = mongoose.model("imageData",data)
export default userImage