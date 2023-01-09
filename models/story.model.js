import mongoose, { model } from "mongoose";
import profile from "./profile_pic.model.js";

const storySchemas = new mongoose.Schema({
    who_upload:{
        type:mongoose.Schema.Types.ObjectId,ref:'shecma',
        required:true
    },
    story: [profile, { required: true }],
    viwe: {
        type: Array,
        required:false
    },
    is_deleteAt: {
        type: Boolean,
        default: 0
    },
    status:{
        type:String,
        enum:['Active','inactive'],
        default:'Active'
    }
},{timestamps:true})
const StoryModel = mongoose.model('story',storySchemas)
export default StoryModel