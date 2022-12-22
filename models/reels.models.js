import mongoose from "mongoose";
import profile from "./profile_pic.model.js";
const Vreel = await mongoose.Schema({
    reels: [profile, { required: true }],
    user_is: {
      type:mongoose.Schema.Types.ObjectId,ref:"shecma",
      required:true
    },
    status:{
        type:String,
        enum:["Active","inactive"],
        default:"Active"
    }
},{timestamps:true})
const Reels = mongoose.model("Reels",Vreel)
export default Reels