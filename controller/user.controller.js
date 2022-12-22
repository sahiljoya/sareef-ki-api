import user from "../models/user.model.js";
import bcrypt from "bcrypt"
import Jwt from "jsonwebtoken";
export const sing = async (req, res) => {
    try {
        const idMach = await user.findOne({ number: req.body.number })
        if (idMach) {
            res.send({
                status: false,
                "msg": "number allready exist",
                data: {}
            })

        } else {
            const pass = await bcrypt.hash(req.body.password, 10)
            req.body.password = pass
            const creat = await user.create(req.body)
            creat.token = await Jwt.sign({ time: Date(), userId: creat._id }, "khan")
            res.send({
                status: true,
                "msg": "sing successfully",
                data: creat
            })

        }
    } catch (error) {
        res.send(error)
    }
}
export const login = async (req, res) => {
    try {
        const userMach = await user.findOne({ number: req.body.number })
        if (userMach) {
            const passMach = await bcrypt.compare(req.body.password, userMach.password)
            if (passMach) {
                const token = await Jwt.sign({ time: Date(), userId: userMach._id }, "khan")
                userMach.token = token
                res.send({
                    status: true,
                    msg: "user login",
                    data: userMach
                })
            } else {
                res.send({
                    status: false,
                    msg: "password wrong",
                    data: {}
                })
            }
        } else {
            res.send({
                status: false,
                msg: "number does not existe",
                data: {}
            })
        }
    } catch (err) {
        res.send({
            status: false,
            msg: " data misteck",
            data: err
        })
    }
}
export const follower = async (req, res) => {
    try {
        // var follow = {}
        const userFollowing = await user.findOneAndUpdate({ username: req.body.username }, req.body)
        userFollowing.following = req.body.following
        //console.log(userFollowing);
        if (userFollowing) {
            const userFollowers = await user.findOneAndUpdate({ username: req.body.username }, req.body)
            var allData = []
            userFollowers.forEach(follow => {
            console.log(follow);

            });
            res.send(userFollowing)
            // console.log(userFollowing);
        }
    } catch (err) {

    }
}