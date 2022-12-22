import Like from "../models/like.model.js"

export const userLike = async (req, res) => {
    try {
        const createLike = await Like.create(req.body)
        res.send({
            status: true,
            msg: "like successfully",
            data: createLike
        })
    } catch (error) {
        res.status(401).send({
            status: false,
            msg: 'Something wrong with request.',
            data: error
        })
    }
}