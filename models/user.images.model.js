import profile from "./profile_pic.model.js"
import mongoose from "mongoose";
const data = new mongoose.Schema({
    image:[profile],
    status: {
        type: String,
        enum: ["Active", "deActive"],
        default: "Active"
    },
    User_id:{
        type:mongoose.Schema.Types.ObjectId,ref:'shecma',
        required:true
    },
    createAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }

},{ timestamps: true })
const userImage = mongoose.model("imageData",data)
export default userImage