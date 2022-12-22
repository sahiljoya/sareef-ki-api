import mongoose from "mongoose";
const likeSchemas = new mongoose.Schema({
    who_liked:{
        type:mongoose.Schema.Types.ObjectId,ref:'shecma',
        required:true,
    },
    who_like:{
        type:mongoose.Schema.Types.ObjectId,ref:'Reels',
        required:true
    },
    is_delete:{
        type:String,
        enum:['like','unlike'],
        default:'like'
    },
    status:{
        type:String,
        enum:['Active','inactive'],
        default:'Active'
    }
},{timestamps:true})
const Like = mongoose.model('likes',likeSchemas)
export default Like