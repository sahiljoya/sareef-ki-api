import userImage from "../models/user.images.model.js";
export const uploadProfile = async (req, res) => {
    try {
        var imagedata = []
        req.files.forEach(image => {
            var imageTypee = ''
            if (image.mimetype == 'image/png') {
                imageTypee = 'png'
            } else if (image.mimetype == 'image/jpg') {
                imageTypee = 'jpg'
            }
            var imageStroge = {
                type: imageTypee,
                path: image.filename,
                fullpath: 'localhost:3003/' + image.path
            }
            imagedata.push(imageStroge)
        });
        req.body.image = imagedata
        const createProfile = await userImage.create(req.body)
        res.send({
            status: true,
            msg: "Profile Upload",
            data: createProfile
        })
    } catch (error) {
        res.send({
            status: false,
            msg: 'Something wrong with request.',
            data: error
        })
    }
}
export const UpdateProfie = async (req, res) => {
    try {
        var imagedata = []
        req.files.forEach(image => {
            var imageTypee = ''
            if (image.mimetype == 'image/png') {
                imageTypee = 'png'
            } else if (image.mimetype == 'image/jpg' || image.mimetype == 'image/jpeg') {
                imageTypee = 'jpg'
            } else if (image.mimetype == 'image/html') {
                imageTypee = 'html'
            }
            var imageStroge = {
                type: imageTypee,
                path: image.filename,
                fullpath: 'localhost:3003/Update' + image.path
            }
            imagedata.push(imageStroge)
        });
        req.body.image = imagedata
        const findPic = await userImage.findByIdAndUpdate({ _id: req.body._id }, req.body)
        res.send({
            status: true,
            msg: 'Update a profile',
            data: findPic
        })
    } catch (err) {
        res.status(401).send({
            status: false,
            msg: 'Something wrong with request.',
            data: err
        })
    }
}