import exp from "constants"
import multer from "multer"
import path from "path"

let imageStorege = multer.diskStorage({
    //Destination to store image 
    destination: "images",
    //images store 3 caalback ,,1:req..2:file..,3:cb
    filename: (req, file, cb) => {
        //cb 5 promiss 1:null 2:file ka fieldname 3: ek string 4:abar ki tarik 5:image ko original name (png/jpg/zip/jpeg)
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
        // file.fieldname is name of the field (image)
        // path.extname get the uploaded file extension
    }
})
let reelstorege = multer.diskStorage({
    destination: "reels",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname))
    }
})
let storyStorege = multer.diskStorage({
    destination: 'story',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
let csvStorege = multer.diskStorage({
    destination: 'csv',
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname))
    }
})
export const imageUploaded = multer({
    storage: imageStorege,
    limits: {
        fileSize: 1000000 * 3  // 1000000 Bytes = 1 MB 
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|zip|html)$/)) {
            // upload only png and jpg format
            return cb(new Error("pleass anter valid image"))
        }
        cb(undefined, true)
    }
})
export const reelServish = multer({
    storage: reelstorege,
    limits: {
        fileSize: 1000000 * 25
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp3|mp4|mov|wmv|webm)$/)) {
            return cb(new Error("pleass anter valid reel path"))
        }
        cb(undefined, true)
    }
})
export const storyService = multer({
    storage: storyStorege,
    limits: {
        fileSize: 1000000 * 10
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(mp3|mp4|mov|wmv|webm|png|jpg|heic|zif|webp|bmp)$/)) {
            return cb(new Error("pleass anter valid reel path"))
        }
        cb(undefined, true)
    }
})
export const csvService = multer({
    destination: csvStorege,
    limits: {
        fileSize: 1000000 * 100
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(xlse|csv)$/)) {
            return cb(new Error("pleass enter valid csv path"))
        }
        cb(undefined, true)
    }
})