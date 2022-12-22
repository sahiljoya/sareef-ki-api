import mongoose from "mongoose";
const Sreel = new mongoose.Schema({
    who_share: {
        type: mongoose.Schema.Types.ObjectId, ref: "shecma",
        required: true
    },
    shareReel: {
        type: mongoose.Schema.Types.ObjectId, ref: 'Reels',
        required: true
    }, 
    who_recevd: {
        type: mongoose.Schema.Types.ObjectId, ref: "shecma",
        required: true
    },
    is_delete: {
        type: Boolean,
        default: 0
    },
    status: {
        type: String,
        enum: ['Active', 'inactive'],
        default: 'Active'
    }
}, { timestamps: true })
const ShareReel = mongoose.model('shareReel', Sreel)
export default ShareReel