import ShareReel from "../models/share.reel.model.js"

export const SHAREreels = async (req, res) => {
    try {
        const Share = await ShareReel.create(req.body)
        res.send({
            status: true,
            msg: 'Share a reel',
            data: Share
        })
    } catch (err) {
        res.status(401).send({
            status: false,
            msg: 'Something wrong with request.',
            data: err
        })
    }
}
export const getDataGEt = async (req, res) => {
    try {
        const getData = await ShareReel.find({who_recevd:req.body._id}).populate("shareReel").sort({_id:'-1'})
        res.send({
            status:true,
            msg:'get Data',
            data:getData
        })
    } catch (error) {
        res.status(401).send({
            status: false,
            msg: 'Something wrong with request.',
            data: error
        })
    }
}
