import Reels from "../models/reels.models.js";
export const UploadReel = async (req, res) => {
    try {
        var reelAllData = []
        req.files.forEach(reel => {
            var reelsType = ''
            if (reel.mimetype == 'video/mp3') {
                reelsType = 'mp3'
            } else if (reel.mimetype == 'video/mp4') {
                reelsType = 'mp4'
            } else if (reel.mimetype == 'video/webm') {
                reelsType = 'webm'
            }
            var reelDatas = {
                type: reelsType,
                path: reel.filename,
                fullpath: 'localhost:3003/' + reel.path
            }
            reelAllData.push(reelDatas)

        });
        req.body.reels = reelAllData
        const createData = await Reels.create(req.body)
        res.send({
            status: true,
            msg: 'Reel upload successfully',
            data: createData
        })
    } catch (error) {
        res.status(401).send({
            status: false,
            msg: 'Something wrong with request.',
            data: error
        })
    }
}