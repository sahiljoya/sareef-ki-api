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
export const imageUploaded = multer({
    storage: imageStorege,
    limits: {
        fileSize: 1000000 * 3  // 1000000 Bytes = 1 MB 
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg|jpeg|zip)$/)) {
            // upload only png and jpg format
            return cb(new Error("pleass anter valid image"))
        }
        cb(undefined, true)
    }
})